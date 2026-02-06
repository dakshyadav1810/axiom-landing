-- =============================================
-- Axiom Waitlist Schema
-- Run this in Supabase Dashboard → SQL Editor
-- =============================================

-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address TEXT,
  user_agent TEXT
);

-- =============================================
-- Row Level Security (RLS)
-- This protects your data from unauthorized access
-- =============================================

-- Enable RLS on the table
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if re-running
DROP POLICY IF EXISTS "Allow anonymous inserts" ON waitlist;
DROP POLICY IF EXISTS "Block all reads" ON waitlist;
DROP POLICY IF EXISTS "Block all updates" ON waitlist;
DROP POLICY IF EXISTS "Block all deletes" ON waitlist;

-- ONLY allow inserts (for landing page signups)
-- Nobody can read, update, or delete without being authenticated as admin
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT 
  WITH CHECK (true);

-- Block ALL reads from anonymous users
-- Only you (via Supabase dashboard) can view emails
CREATE POLICY "Block all reads" ON waitlist
  FOR SELECT 
  USING (false);

-- Block ALL updates
CREATE POLICY "Block all updates" ON waitlist
  FOR UPDATE 
  USING (false);

-- Block ALL deletes
CREATE POLICY "Block all deletes" ON waitlist
  FOR DELETE 
  USING (false);

-- =============================================
-- Optional: Add index for faster email lookups
-- =============================================
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist (email);
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist (created_at DESC);

-- =============================================
-- Verify RLS is enabled
-- =============================================
-- Run this to confirm: SELECT relname, relrowsecurity FROM pg_class WHERE relname = 'waitlist';
-- Should return: waitlist | true
