/*
  # MandaStrong Studio Database Schema

  ## Overview
  Complete database schema for MandaStrong Studio video editing platform with user management, 
  subscription handling, project management, media storage, and edit history tracking.

  ## New Tables
  
  ### 1. `profiles`
  User profile information linked to Supabase auth.users
  - `id` (uuid, primary key) - Links to auth.users.id
  - `email` (text) - User email
  - `full_name` (text) - User's full name
  - `avatar_url` (text, optional) - Profile picture URL
  - `created_at` (timestamptz) - Account creation timestamp
  - `updated_at` (timestamptz) - Last profile update timestamp

  ### 2. `subscription_plans`
  Available subscription tiers (Basic, Pro, Studio)
  - `id` (uuid, primary key) - Plan identifier
  - `name` (text) - Plan name (e.g., "Basic", "Pro", "Studio")
  - `price` (integer) - Monthly price in cents
  - `features` (jsonb) - Plan features as JSON object
  - `max_projects` (integer) - Maximum concurrent projects allowed
  - `max_storage_gb` (integer) - Maximum storage in GB
  - `created_at` (timestamptz) - Plan creation timestamp
  - `active` (boolean) - Whether plan is currently available

  ### 3. `user_subscriptions`
  Links users to their active subscriptions
  - `id` (uuid, primary key) - Subscription record identifier
  - `user_id` (uuid, foreign key) - References profiles.id
  - `plan_id` (uuid, foreign key) - References subscription_plans.id
  - `status` (text) - Subscription status: 'active', 'cancelled', 'expired'
  - `started_at` (timestamptz) - Subscription start date
  - `expires_at` (timestamptz) - Subscription expiration date
  - `cancelled_at` (timestamptz, optional) - Cancellation timestamp
  - `created_at` (timestamptz) - Record creation timestamp

  ### 4. `projects`
  Video editing projects created by users
  - `id` (uuid, primary key) - Project identifier
  - `user_id` (uuid, foreign key) - References profiles.id
  - `title` (text) - Project title
  - `description` (text, optional) - Project description
  - `duration_minutes` (integer) - Target video duration in minutes
  - `status` (text) - Project status: 'draft', 'in_progress', 'completed'
  - `thumbnail_url` (text, optional) - Project thumbnail URL
  - `created_at` (timestamptz) - Project creation timestamp
  - `updated_at` (timestamptz) - Last modification timestamp

  ### 5. `media_files`
  Media assets (videos, images, audio) uploaded by users
  - `id` (uuid, primary key) - File identifier
  - `user_id` (uuid, foreign key) - References profiles.id
  - `filename` (text) - Original filename
  - `file_type` (text) - MIME type (e.g., 'video/mp4', 'image/jpeg')
  - `file_size_bytes` (bigint) - File size in bytes
  - `storage_path` (text) - Path in Supabase Storage
  - `duration_seconds` (integer, optional) - Duration for video/audio files
  - `created_at` (timestamptz) - Upload timestamp

  ### 6. `project_edits`
  Edit history and versions for projects
  - `id` (uuid, primary key) - Edit record identifier
  - `project_id` (uuid, foreign key) - References projects.id
  - `user_id` (uuid, foreign key) - References profiles.id
  - `edit_type` (text) - Type of edit: 'cut', 'trim', 'split', 'fx', 'audio', 'render'
  - `edit_data` (jsonb) - Edit parameters and settings as JSON
  - `created_at` (timestamptz) - Edit timestamp

  ## Security
  
  ### Row Level Security (RLS)
  - All tables have RLS enabled
  - Users can only access their own data
  - Subscription plans are publicly readable
  - Project edits are linked to project ownership
  - Media files are restricted to owners

  ### RLS Policies
  - SELECT: Users can view their own records
  - INSERT: Users can create their own records
  - UPDATE: Users can update their own records
  - DELETE: Users can delete their own records
  - Exception: subscription_plans are readable by all authenticated users

  ## Important Notes
  1. Uses Supabase auth.users for authentication
  2. All foreign keys have ON DELETE CASCADE for data integrity
  3. Timestamps use `timestamptz` with default `now()`
  4. Indexes added for performance on foreign keys and status fields
  5. JSONB used for flexible feature/edit data storage
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  avatar_url text,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Create subscription_plans table
CREATE TABLE IF NOT EXISTS subscription_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  price integer NOT NULL DEFAULT 0,
  features jsonb DEFAULT '{}' NOT NULL,
  max_projects integer DEFAULT 5 NOT NULL,
  max_storage_gb integer DEFAULT 10 NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  active boolean DEFAULT true NOT NULL
);

-- Create user_subscriptions table
CREATE TABLE IF NOT EXISTS user_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  plan_id uuid NOT NULL REFERENCES subscription_plans(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired')),
  started_at timestamptz DEFAULT now() NOT NULL,
  expires_at timestamptz NOT NULL,
  cancelled_at timestamptz,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  duration_minutes integer DEFAULT 90 NOT NULL,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'in_progress', 'completed')),
  thumbnail_url text,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Create media_files table
CREATE TABLE IF NOT EXISTS media_files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  filename text NOT NULL,
  file_type text NOT NULL,
  file_size_bytes bigint NOT NULL DEFAULT 0,
  storage_path text NOT NULL,
  duration_seconds integer,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Create project_edits table
CREATE TABLE IF NOT EXISTS project_edits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  edit_type text NOT NULL CHECK (edit_type IN ('cut', 'trim', 'split', 'fx', 'audio', 'render')),
  edit_data jsonb DEFAULT '{}' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_user_id ON user_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_status ON user_subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_projects_user_id ON projects(user_id);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_media_files_user_id ON media_files(user_id);
CREATE INDEX IF NOT EXISTS idx_project_edits_project_id ON project_edits(project_id);
CREATE INDEX IF NOT EXISTS idx_project_edits_user_id ON project_edits(user_id);

-- Enable Row Level Security on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_edits ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can delete own profile"
  ON profiles FOR DELETE
  TO authenticated
  USING (auth.uid() = id);

-- Subscription plans policies (publicly readable)
CREATE POLICY "Anyone can view active subscription plans"
  ON subscription_plans FOR SELECT
  TO authenticated
  USING (active = true);

-- User subscriptions policies
CREATE POLICY "Users can view own subscriptions"
  ON user_subscriptions FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own subscriptions"
  ON user_subscriptions FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own subscriptions"
  ON user_subscriptions FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can delete own subscriptions"
  ON user_subscriptions FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

-- Projects policies
CREATE POLICY "Users can view own projects"
  ON projects FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can delete own projects"
  ON projects FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

-- Media files policies
CREATE POLICY "Users can view own media files"
  ON media_files FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own media files"
  ON media_files FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own media files"
  ON media_files FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can delete own media files"
  ON media_files FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

-- Project edits policies
CREATE POLICY "Users can view own project edits"
  ON project_edits FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own project edits"
  ON project_edits FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can delete own project edits"
  ON project_edits FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

-- Insert default subscription plans
INSERT INTO subscription_plans (name, price, features, max_projects, max_storage_gb) 
VALUES 
  ('Basic', 2000, '{"video_quality": "HD", "support": "email", "watermark": false}', 5, 10),
  ('Pro', 4000, '{"video_quality": "4K", "support": "priority", "watermark": false, "advanced_effects": true}', 20, 50),
  ('Studio', 8000, '{"video_quality": "4K", "support": "24/7", "watermark": false, "advanced_effects": true, "collaboration": true, "api_access": true}', 100, 500)
ON CONFLICT (name) DO NOTHING;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
