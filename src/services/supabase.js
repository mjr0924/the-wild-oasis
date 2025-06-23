import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://frgawdtuivumxwjzaood.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyZ2F3ZHR1aXZ1bXh3anphb29kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyODM2NTYsImV4cCI6MjA2NDg1OTY1Nn0.mblwMxuiMWp78Zl-DGtiYt9CuuoCkrHqwwUkVEmySAw";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
