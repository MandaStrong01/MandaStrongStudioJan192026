/*
  # Create chat_messages table for Agent Grok Help Desk

  ## Overview
  This migration creates the chat_messages table to store conversations between users and the AI assistant.

  ## New Tables

  ### `chat_messages`
  Stores chat conversation history
  - `id` (uuid, primary key) - Message identifier
  - `user_id` (uuid, foreign key) - References profiles.id
  - `message` (text) - The message content
  - `is_user` (boolean) - True if message is from user, false if from AI
  - `created_at` (timestamptz) - Message timestamp

  ## Security
  - RLS enabled
  - Users can only access their own chat messages
  - Separate policies for SELECT, INSERT, and DELETE operations

  ## Important Notes
  1. Users can view their own messages
  2. Users can insert their own messages
  3. Users can delete their own messages
  4. AI responses are also associated with the user_id for conversation context
*/

-- Create chat_messages table
CREATE TABLE IF NOT EXISTS chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  message text NOT NULL,
  is_user boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_chat_messages_user_id ON chat_messages(user_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_created_at ON chat_messages(created_at);

-- Enable Row Level Security
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Chat messages policies
CREATE POLICY "Users can view own chat messages"
  ON chat_messages FOR SELECT
  TO authenticated
  USING (user_id = (select auth.uid()));

CREATE POLICY "Users can insert own chat messages"
  ON chat_messages FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users can delete own chat messages"
  ON chat_messages FOR DELETE
  TO authenticated
  USING (user_id = (select auth.uid()));
