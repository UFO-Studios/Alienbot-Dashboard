import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Keyv from "keyv";
import { useRouter } from "next/router";
import { getCookie, hasCookie } from "cookies-next";

export default function Home({ loggedIn, user }) {
  const remove = () => {
    router.push("/");
  };

  const router = useRouter();

  const { msg } = router.query;
  const justLogged = msg == "JUST_LOGGED_IN";
  const justConnected = msg == "JUST_CONNECTED";
  const didntConnect = msg == "DIDN'T_CONNECT";

  return (
    <div>
      <Head>
        <title>Home | AlienBot</title>
      </Head>
      <div className={styles.image}>
        <div className="center">
          <h1 className="wheat">AlienBot Dashboard</h1>
        </div>

        {justLogged ? (
          <div className="popup success">
            <div className="message">
              <p>Logged in successfully!</p>
            </div>
            <div className="action">
              <button onClick={remove}>okay</button>
            </div>
          </div>
        ) : (
          ""
        )}

        {didntConnect ? (
          <div className="popup success">
            <div className="message">
              <p>Account connecting un-successful!</p>
            </div>
            <div className="action">
              <button onClick={remove}>okay</button>
            </div>
          </div>
        ) : (
          ""
        )}

        {justConnected ? (
          <div className="popup success">
            <div className="message">
              <p>Account connected successfully!</p>
            </div>
            <div className="action">
              <button onClick={remove}>okay</button>
            </div>
          </div>
        ) : (
          ""
        )}

        {!loggedIn ? (
          <div className="ultraCenter">
            <button className="bn13 ultraCenter">
              <Link href="/signin" className="wheat ultraCenter">
                Sign In
              </Link>
            </button>
            <button className="bn13 ultraCenter">
              <Link href="/login" className="wheat ultraCenter">
                Log In
              </Link>
            </button>
          </div>
        ) : (
          <>
            <div className="ultraCenter">
              <h1 className="wheat">Hey there {user.username}!</h1>
            </div>
            <div className="ultraCenter">
              {(() => {
                if (!user.connectedAccounts.discord) {
                  return (
                    <>
                      <button className="bn13 ultraCenter">
                        <Link
                          href="/api/auth/connect/discord"
                          className="wheat ultraCenter"
                        >
                          Connect your account with Discord
                        </Link>
                      </button>
                    </>
                  );
                }
              })()}

              {(() => {
                if (!user.connectedAccounts.google) {
                  return (
                    <>
                      <button className="bn13 ultraCenter">
                        <Link
                          href="/api/auth/connect/google"
                          className="wheat ultraCenter"
                        >
                          Connect your account with Google
                        </Link>
                      </button>
                    </>
                  );
                }
              })()}

              {(() => {
                if (!user.connectedAccounts.twitch) {
                  return (
                    <>
                      <button className="bn13 ultraCenter">
                        <Link
                          href="/api/auth/connect/twitch"
                          className="wheat ultraCenter"
                        >
                          Connect your account with Twitch
                        </Link>
                      </button>
                    </>
                  );
                }
              })()}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const loggedIn = hasCookie("email", { req, res });
  const email = getCookie("email", { req, res }) || null;
  const keyv = new Keyv(process.env.NEXT_PUBLIC_MONGO_URL);

  if (loggedIn) {
    return {
      props: {
        loggedIn,
        user: await keyv.get(email).then((rawData) => JSON.parse(rawData)),
      },
    };
  } else {
    return {
      props: {
        loggedIn,
        user: null,
      },
    };
  }
}
