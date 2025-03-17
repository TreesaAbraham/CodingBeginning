import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dcdazxlnvrrohmjlrwgz.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjZGF6eGxudnJyb2htamxyd2d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNDQ0MTAsImV4cCI6MjA1NzgyMDQxMH0.0t68Ngd53IGHRbY-ValVsqHA1oUOIWCVKu4BXDVhRGA
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
