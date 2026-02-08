// Stash Configuration
// Replace these with your Supabase project details

const CONFIG = {
  // Your Supabase project URL (from Project Settings > API)
  SUPABASE_URL: 'https://nagmeobjhbzosnbrlspi.supabase.co',

  // Your Supabase anon/public key (from Project Settings > API)
  SUPABASE_ANON_KEY: 'sb_publishable_FDVw6s4o5aaCebGl3tSbaA_0Ky4lSoD',

  // Your web app URL (after deploying to Vercel/Netlify)
  WEB_APP_URL: 'https://stash-f7mp4zi1f-rck05rs-projects.vercel.app/',

  // Your user ID from Supabase (Authentication > Users)
  // For multi-user mode, this can be removed and auth will be required
  USER_ID: '67da2017-c0d5-4350-969d-ae316b75092a',
};

// Don't edit below this line
if (typeof module !== 'undefined') {
  module.exports = CONFIG;
}
