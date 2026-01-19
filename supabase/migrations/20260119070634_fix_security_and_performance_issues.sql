/*
  # Fix Security and Performance Issues

  ## Overview
  This migration addresses critical security and performance issues identified by Supabase:
  1. Adds missing index for foreign key
  2. Optimizes RLS policies to prevent per-row function re-evaluation
  3. Fixes function security by setting immutable search_path

  ## Changes

  ### 1. Missing Index
  - Add index for `user_subscriptions.plan_id` foreign key to improve query performance

  ### 2. RLS Policy Optimization
  All RLS policies are recreated with optimized `(select auth.uid())` syntax to:
  - Evaluate auth.uid() once per query instead of per row
  - Significantly improve query performance at scale
  - Maintain same security guarantees

  ### 3. Function Security
  - Update `update_updated_at_column` function with secure search_path
  - Prevents potential security vulnerabilities from search_path manipulation

  ## Security Notes
  - All RLS policies maintain the same security guarantees
  - Performance improvements do not compromise data protection
  - Users still can only access their own data
*/

-- ============================================================================
-- 1. ADD MISSING INDEX FOR FOREIGN KEY
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_user_subscriptions_plan_id 
  ON user_subscriptions(plan_id);

-- ============================================================================
-- 2. OPTIMIZE RLS POLICIES - DROP OLD POLICIES
-- ============================================================================

-- Drop all existing policies
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can delete own profile" ON profiles;

DROP POLICY IF EXISTS "Users can view own subscriptions" ON user_subscriptions;
DROP POLICY IF EXISTS "Users can insert own subscriptions" ON user_subscriptions;
DROP POLICY IF EXISTS "Users can update own subscriptions" ON user_subscriptions;
DROP POLICY IF EXISTS "Users can delete own subscriptions" ON user_subscriptions;

DROP POLICY IF EXISTS "Users can view own projects" ON projects;
DROP POLICY IF EXISTS "Users can insert own projects" ON projects;
DROP POLICY IF EXISTS "Users can update own projects" ON projects;
DROP POLICY IF EXISTS "Users can delete own projects" ON projects;

DROP POLICY IF EXISTS "Users can view own media files" ON media_files;
DROP POLICY IF EXISTS "Users can insert own media files" ON media_files;
DROP POLICY IF EXISTS "Users can update own media files" ON media_files;
DROP POLICY IF EXISTS "Users can delete own media files" ON media_files;

DROP POLICY IF EXISTS "Users can view own project edits" ON project_edits;
DROP POLICY IF EXISTS "Users can insert own project edits" ON project_edits;
DROP POLICY IF EXISTS "Users can delete own project edits" ON project_edits;

-- ============================================================================
-- 3. CREATE OPTIMIZED RLS POLICIES WITH (SELECT AUTH.UID())
-- ============================================================================

-- Profiles policies
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = id)
  WITH CHECK ((select auth.uid()) = id);

CREATE POLICY "Users can delete own profile"
  ON profiles FOR DELETE
  TO authenticated
  USING ((select auth.uid()) = id);

-- User subscriptions policies
CREATE POLICY "Users can view own subscriptions"
  ON user_subscriptions FOR SELECT
  TO authenticated
  USING (user_id = (select auth.uid()));

CREATE POLICY "Users can insert own subscriptions"
  ON user_subscriptions FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users can update own subscriptions"
  ON user_subscriptions FOR UPDATE
  TO authenticated
  USING (user_id = (select auth.uid()))
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users can delete own subscriptions"
  ON user_subscriptions FOR DELETE
  TO authenticated
  USING (user_id = (select auth.uid()));

-- Projects policies
CREATE POLICY "Users can view own projects"
  ON projects FOR SELECT
  TO authenticated
  USING (user_id = (select auth.uid()));

CREATE POLICY "Users can insert own projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users can update own projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (user_id = (select auth.uid()))
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users can delete own projects"
  ON projects FOR DELETE
  TO authenticated
  USING (user_id = (select auth.uid()));

-- Media files policies
CREATE POLICY "Users can view own media files"
  ON media_files FOR SELECT
  TO authenticated
  USING (user_id = (select auth.uid()));

CREATE POLICY "Users can insert own media files"
  ON media_files FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users can update own media files"
  ON media_files FOR UPDATE
  TO authenticated
  USING (user_id = (select auth.uid()))
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users can delete own media files"
  ON media_files FOR DELETE
  TO authenticated
  USING (user_id = (select auth.uid()));

-- Project edits policies
CREATE POLICY "Users can view own project edits"
  ON project_edits FOR SELECT
  TO authenticated
  USING (user_id = (select auth.uid()));

CREATE POLICY "Users can insert own project edits"
  ON project_edits FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Users can delete own project edits"
  ON project_edits FOR DELETE
  TO authenticated
  USING (user_id = (select auth.uid()));

-- ============================================================================
-- 4. FIX FUNCTION SECURITY - SET IMMUTABLE SEARCH_PATH
-- ============================================================================

-- Recreate function with secure search_path
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER 
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;
