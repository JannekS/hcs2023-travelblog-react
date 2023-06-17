import { createClient } from "@supabase/supabase-js";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const SERVER_KEY = import.meta.env.VITE_SERVER_KEY;

const supabase = createClient(SERVER_URL, SERVER_KEY);

export default supabase;
