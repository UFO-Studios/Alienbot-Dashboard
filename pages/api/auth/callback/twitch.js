import { getCookie } from "cookies-next";
import Keyv from "keyv";

export default async function discord(req, res) {
  const { code } = req.query;

  console.log(code, req.query);

  const keyv = new Keyv(process.env.MONGO_URL);
  const email = await getCookie("email", { req, res });

  const rawData = await keyv.get(email);
  const data = await JSON.parse(rawData);

  data.connectedAccounts.twitch = code;
  console.log(data);
  await keyv.set(email, JSON.stringify(data));

  console.log(code);

  return await res.redirect("/?msg=JUST_CONNECTED");
}
