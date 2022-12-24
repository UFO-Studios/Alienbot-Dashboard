export default async function connectAccounts(req, res) {
  const url = `https://id.twitch.tv/oauth2/authorize?client_id=${process.env.TWITCH_CLIENT_ID}&redirect_uri=http://localhost:3000/api/auth/callback/twitch&response_type=code&scope=channel%3Amanage%3Amoderators%20channel%3Amanage%3Apolls%20channel%3Amanage%3Araids%20channel%3Aread%3Aeditors%20channel%3Aread%3Apolls%20channel%3Aread%3Astream_key%20moderation%3Aread%20moderator%3Amanage%3Achat_messages%20moderator%3Aread%3Achatters%20user%3Aedit%20user%3Aread%3Ablocked_users%20user%3Aread%3Aemail`;

  return await res.redirect(url);
}
