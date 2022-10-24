import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      scope: "identify email guilds",
    }),
  ],
});
