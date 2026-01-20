/*
  # Fix Security and Performance Issues

  ## Overview
  This migration addresses critical security and performance issues identified in the database:
  - Adds missing foreign key index on comments table
  - Optimizes RLS policies to use `(select auth.uid())` instead of `auth.uid()`
  - Fixes function search path mutability
  
  ## Changes

  ### 1. Missing Index
  - Add index on `comments.user_id` foreign key for optimal query performance

  ### 2. RLS Policy Optimization
  All RLS policies updated to use `(select auth.uid())` pattern to prevent re-evaluation per row:
  - `videos` table: 3 policies (insert, update, delete)
  - `comments` table: 2 policies (insert, delete)
  - `likes` table: 2 policies (insert, delete)
  - `mixer_settings` table: 3 policies (view, insert, update)

  ### 3. Function Security
  - Fix `update_video_counts` function with immutable search_path

  ## Performance Impact
  - Significant improvement in query performance at scale
  - Reduced CPU usage for auth function calls
  - Better index utilization for foreign key queries
*/

-- Add missing index on comments.user_id foreign key
CREATE INDEX IF NOT EXISTS idx_comments_user_id ON comments(user_id);

-- Drop and recreate videos table RLS policies with optimized auth.uid() calls
DROP POLICY IF EXISTS "Users can insert own videos" ON videos;
DROP POLICY IF EXISTS "Users can update own videos" ON videos;
DROP POLICY IF EXISTS "Users can delete own videos" ON videos;

CREATE POLICY "Users can insert own videos"
  ON videos FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users can update own videos"
  ON videos FOR UPDATE
  TO authenticated
  USING (user_id = (select auth.uid()))
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users can delete own videos"
  ON videos FOR DELETE
  TO authenticated
  USING (user_id = (select auth.uid()));

-- Drop and recreate comments table RLS policies with optimized auth.uid() calls
DROP POLICY IF EXISTS "Users can insert comments" ON comments;
DROP POLICY IF EXISTS "Users can delete own comments" ON comments;

CREATE POLICY "Users can insert comments"
  ON comments FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users can delete own comments"
  ON comments FOR DELETE
  TO authenticated
  USING (user_id = (select auth.uid()));

-- Drop and recreate likes table RLS policies with optimized auth.uid() calls
DROP POLICY IF EXISTS "Users can insert likes" ON likes;
DROP POLICY IF EXISTS "Users can delete own likes" ON likes;

CREATE POLICY "Users can insert likes"
  ON likes FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users can delete own likes"
  ON likes FOR DELETE
  TO authenticated
  USING (user_id = (select auth.uid()));

-- Drop and recreate mixer_settings table RLS policies with optimized auth.uid() calls
DROP POLICY IF EXISTS "Users view own mixer settings" ON mixer_settings;
DROP POLICY IF EXISTS "Users insert own mixer settings" ON mixer_settings;
DROP POLICY IF EXISTS "Users update own mixer settings" ON mixer_settings;

CREATE POLICY "Users view own mixer settings"
  ON mixer_settings FOR SELECT
  TO authenticated
  USING (user_id = (select auth.uid()));

CREATE POLICY "Users insert own mixer settings"
  ON mixer_settings FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users update own mixer settings"
  ON mixer_settings FOR UPDATE
  TO authenticated
  USING (user_id = (select auth.uid()))
  WITH CHECK (user_id = (select auth.uid()));

-- Drop existing triggers first
DROP TRIGGER IF EXISTS update_comments_count ON comments;
DROP TRIGGER IF EXISTS update_likes_count ON likes;
DROP TRIGGER IF EXISTS update_comment_count ON comments;
DROP TRIGGER IF EXISTS update_like_count ON likes;

-- Drop and recreate function with stable search_path
DROP FUNCTION IF EXISTS update_video_counts() CASCADE;

CREATE OR REPLACE FUNCTION update_video_counts()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF TG_TABLE_NAME = 'comments' THEN
      UPDATE videos 
      SET comment_count = comment_count + 1 
      WHERE id = NEW.video_id;
    ELSIF TG_TABLE_NAME = 'likes' THEN
      UPDATE videos 
      SET like_count = like_count + 1 
      WHERE id = NEW.video_id;
    END IF;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    IF TG_TABLE_NAME = 'comments' THEN
      UPDATE videos 
      SET comment_count = GREATEST(0, comment_count - 1)
      WHERE id = OLD.video_id;
    ELSIF TG_TABLE_NAME = 'likes' THEN
      UPDATE videos 
      SET like_count = GREATEST(0, like_count - 1)
      WHERE id = OLD.video_id;
    END IF;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$;

-- Recreate triggers
CREATE TRIGGER update_comments_count
  AFTER INSERT OR DELETE ON comments
  FOR EACH ROW
  EXECUTE FUNCTION update_video_counts();

CREATE TRIGGER update_likes_count
  AFTER INSERT OR DELETE ON likes
  FOR EACH ROW
  EXECUTE FUNCTION update_video_counts();
