import { getCookie } from "cookies-next";
import Keyv from "keyv";
import { google } from "googleapis";

export default async function discord(req, res) {
  const OAuth2 = google.auth.OAuth2;
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectURI = "http://localhost:3000/api/auth/callback/google";
  const scope = [
    "https://www.googleapis.com/auth/youtube.readonly",
    "https://www.googleapis.com/auth/youtube",
    "https://www.googleapis.com/auth/youtube.force-ssl",
  ];
  const auth = new OAuth2(clientId, clientSecret, redirectURI);

  const authUrl = auth.generateAuthUrl({
    access_type: "offline",
    scope,
  });

  res.redirect(authUrl);
}
