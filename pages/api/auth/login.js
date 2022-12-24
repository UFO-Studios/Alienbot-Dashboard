import Keyv from "keyv";
import { setCookie } from "cookies-next";

export default async function login(req, res) {
  const keyv = new Keyv(process.env.MONGO_URL);

  const email = req.query["e"];
  const password = req.query["p"];
  const account = await keyv.get(email);

  if (!account) {
    return await res.redirect("/login?err=ACCOUNT_NO_EXIST");
  }

  const { password: accountPassword } = account;

  if (!password == accountPassword) {
    return await res.redirect("/login?err=PASSWORD_INVALID");
  }
  await setCookie("email", email, { req, res });

  return await res.redirect("/?msg=JUST_LOGGED_IN");
}
