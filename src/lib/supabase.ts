import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://mfjxytfusiflmuuaemhh.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1manh5dGZ1c2lmbG11dWFlbWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ1ODk1NTQsImV4cCI6MjExMDE2NTU1NH0.SQ650sU-VAVzKID3AWSFBJPdPp04h5I1jnqNj61B56Q";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
