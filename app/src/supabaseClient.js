import { createClient } from '@supabase/supabase-js'

// This tells the app: "Look for the keys in the environment variables"
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// This checks if the keys were found. If not, it warns you in the console.
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL or Anon Key is missing. Please check your .env file.");
}

// Initialize the client
let supabaseInstance = null;
try {
  if (supabaseUrl && supabaseAnonKey) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  } else {
     console.warn("Supabase client not initialized due to missing credentials.");
  }
} catch (error) {
    console.error("Error initializing Supabase client:", error);
}

export const supabase = supabaseInstance;
