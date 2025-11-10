import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ubmxnowtwnubrprmdngx.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibXhub3d0d251YnJwcm1kbmd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NjQwMTksImV4cCI6MjA3ODU0MDAxOX0.96F-ZBariXzIB4q5BNywyNkdN0efwsFjDiNYQaRCZ0g";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
