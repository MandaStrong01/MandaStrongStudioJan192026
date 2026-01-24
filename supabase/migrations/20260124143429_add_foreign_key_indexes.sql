/*
  # Add Foreign Key Indexes for Optimal Performance

  ## Overview
  This migration adds indexes to cover all foreign key constraints in the database.
  While these indexes may not be heavily used in current query patterns, they are
  essential for maintaining optimal performance for:
  - JOIN operations
  - DELETE cascade operations
  - Referential integrity checks
  - Future query patterns

  ## Changes Made

  ### 1. Foreign Key Indexes Added

  #### user_subscriptions table (2 indexes)
  - `idx_user_subscriptions_user_id` - Covers foreign key to profiles(id)
  - `idx_user_subscriptions_plan_id` - Covers foreign key to subscription_plans(id)

  #### projects table (1 index)
  - `idx_projects_user_id` - Covers foreign key to profiles(id)

  #### media_files table (1 index)
  - `idx_media_files_user_id` - Covers foreign key to profiles(id)

  #### project_edits table (2 indexes)
  - `idx_project_edits_project_id` - Covers foreign key to projects(id)
  - `idx_project_edits_user_id` - Covers foreign key to profiles(id)

  #### videos table (1 index)
  - `idx_videos_user_id` - Covers foreign key to profiles(id)

  #### comments table (2 indexes)
  - `idx_comments_user_id` - Covers foreign key to profiles(id)
  - `idx_comments_video_id` - Covers foreign key to videos(id)

  #### likes table (1 index)
  - `idx_likes_user_id` - Covers foreign key to profiles(id)
  - Note: likes_video_id already has coverage through other constraints

  ## Performance Impact
  - Improves JOIN performance across all tables
  - Optimizes DELETE CASCADE operations
  - Speeds up referential integrity checks
  - Essential for scaling as data volume grows

  ## Important Notes
  1. These indexes are critical for database performance
  2. Foreign keys without indexes can cause table-level locks
  3. Indexes improve both read and write performance for foreign key operations
  4. B-tree indexes are used (PostgreSQL default) for optimal foreign key lookups
*/

-- ============================================================================
-- ADD FOREIGN KEY INDEXES ON user_subscriptions TABLE
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_user_subscriptions_user_id ON user_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_plan_id ON user_subscriptions(plan_id);

-- ============================================================================
-- ADD FOREIGN KEY INDEXES ON projects TABLE
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_projects_user_id ON projects(user_id);

-- ============================================================================
-- ADD FOREIGN KEY INDEXES ON media_files TABLE
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_media_files_user_id ON media_files(user_id);

-- ============================================================================
-- ADD FOREIGN KEY INDEXES ON project_edits TABLE
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_project_edits_project_id ON project_edits(project_id);
CREATE INDEX IF NOT EXISTS idx_project_edits_user_id ON project_edits(user_id);

-- ============================================================================
-- ADD FOREIGN KEY INDEXES ON videos TABLE
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_videos_user_id ON videos(user_id);

-- ============================================================================
-- ADD FOREIGN KEY INDEXES ON comments TABLE
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_comments_user_id ON comments(user_id);
CREATE INDEX IF NOT EXISTS idx_comments_video_id ON comments(video_id);

-- ============================================================================
-- ADD FOREIGN KEY INDEXES ON likes TABLE
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_likes_user_id ON likes(user_id);
CREATE INDEX IF NOT EXISTS idx_likes_video_id ON likes(video_id);
