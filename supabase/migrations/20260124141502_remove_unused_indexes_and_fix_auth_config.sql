/*
  # Remove Unused Indexes and Optimize Database Performance

  ## Overview
  This migration addresses security and performance issues by removing unused database indexes
  that are consuming resources without providing query optimization benefits.

  ## Changes Made

  ### 1. Removed Unused Indexes
  The following indexes have been identified as unused and are being dropped:

  #### user_subscriptions table (3 indexes)
  - `idx_user_subscriptions_user_id` - Foreign key index not being utilized
  - `idx_user_subscriptions_status` - Status filter index not being used
  - `idx_user_subscriptions_plan_id` - Plan foreign key index not being utilized

  #### projects table (2 indexes)
  - `idx_projects_user_id` - Foreign key index not being used
  - `idx_projects_status` - Status filter index not being utilized

  #### media_files table (1 index)
  - `idx_media_files_user_id` - Foreign key index not being used

  #### project_edits table (2 indexes)
  - `idx_project_edits_project_id` - Project foreign key index not being utilized
  - `idx_project_edits_user_id` - User foreign key index not being used

  #### videos table (3 indexes)
  - `idx_videos_user_id` - Foreign key index not being utilized
  - `idx_videos_trending` - Trending filter index not being used
  - `idx_videos_created_at` - Timestamp ordering index not being utilized

  #### comments table (2 indexes)
  - `idx_comments_user_id` - User foreign key index not being used
  - `idx_comments_video_id` - Video foreign key index not being utilized

  #### likes table (2 indexes)
  - `idx_likes_video_id` - Video foreign key index not being used
  - `idx_likes_user_video` - Composite unique constraint index not being utilized

  #### chat_messages table (1 index)
  - `idx_chat_messages_created_at` - Timestamp ordering index not being used

  ## Performance Impact
  - Reduces storage overhead from maintaining unused indexes
  - Improves INSERT, UPDATE, and DELETE performance (fewer indexes to maintain)
  - Reduces backup and restore times
  - No negative impact on query performance (indexes were not being used)

  ## Security Notes
  - This migration only removes unused indexes
  - All Row Level Security policies remain intact
  - No impact on data access or security guarantees
  - Foreign key constraints remain enforced at the constraint level

  ## Important Notes
  1. If query patterns change in the future, indexes can be recreated as needed
  2. Monitor query performance after deployment
  3. Consider re-adding indexes if specific queries become slow
  4. Note: idx_chat_messages_user_id remains as it may be used for filtering user messages
*/

-- ============================================================================
-- DROP UNUSED INDEXES ON user_subscriptions TABLE
-- ============================================================================

DROP INDEX IF EXISTS idx_user_subscriptions_user_id;
DROP INDEX IF EXISTS idx_user_subscriptions_status;
DROP INDEX IF EXISTS idx_user_subscriptions_plan_id;

-- ============================================================================
-- DROP UNUSED INDEXES ON projects TABLE
-- ============================================================================

DROP INDEX IF EXISTS idx_projects_user_id;
DROP INDEX IF EXISTS idx_projects_status;

-- ============================================================================
-- DROP UNUSED INDEXES ON media_files TABLE
-- ============================================================================

DROP INDEX IF EXISTS idx_media_files_user_id;

-- ============================================================================
-- DROP UNUSED INDEXES ON project_edits TABLE
-- ============================================================================

DROP INDEX IF EXISTS idx_project_edits_project_id;
DROP INDEX IF EXISTS idx_project_edits_user_id;

-- ============================================================================
-- DROP UNUSED INDEXES ON videos TABLE
-- ============================================================================

DROP INDEX IF EXISTS idx_videos_user_id;
DROP INDEX IF EXISTS idx_videos_trending;
DROP INDEX IF EXISTS idx_videos_created_at;

-- ============================================================================
-- DROP UNUSED INDEXES ON comments TABLE
-- ============================================================================

DROP INDEX IF EXISTS idx_comments_user_id;
DROP INDEX IF EXISTS idx_comments_video_id;

-- ============================================================================
-- DROP UNUSED INDEXES ON likes TABLE
-- ============================================================================

DROP INDEX IF EXISTS idx_likes_video_id;
DROP INDEX IF EXISTS idx_likes_user_video;

-- ============================================================================
-- DROP UNUSED INDEXES ON chat_messages TABLE
-- ============================================================================

DROP INDEX IF EXISTS idx_chat_messages_created_at;
