import Keyv from "keyv";
import fetch from "node-fetch";
import { setCookie } from "cookies-next";

export default async function signin(req, res) {
  const keyv = new Keyv(process.env.MONGO_URL);

  const email = req.query["e"];
  const password = req.query["p"];
  const isAccount = await keyv.get(email);

  if (isAccount) {
    return await res.redirect("/signin?err=ACCOUNT_EXISTS");
  }

  const url = `https://email-verifier-completely-free.p.rapidapi.com/email-verification/${req.query.e}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":
        process.env.EMAIL_API_KEY || process.env.NEXT_PUBLIC_EMAIL_API_KEY,
      "X-RapidAPI-Host": "email-verifier-completely-free.p.rapidapi.com",
    },
  };

  const { response: data } = await fetch(url, options).then((res) =>
    res.json()
  );
  const { email_status: exists } = data;

  console.log(exists);

  if (exists == "No") {
    return await res.redirect("/signin?err=EMAIL_NO_EXIST");
  }

  const username = email.split("@")[0];
  console.log(username);
  await keyv.set(
    email,
    JSON.stringify({
      username,
      email,
      password,
      connectedAccounts: {
        discord: null,
        google: null,
        twitch: null,
      },
    })
  );

  await setCookie("email", email, { req, res });

  return await res.redirect("/?msg=JUST_LOGGED_IN");
}
