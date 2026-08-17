const SUPABASE_URL = "https://pdxcwwnunqgsrixzflzf.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_nmW7dJeu2eN8-gENwfMmFg_6AruP9BI";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);