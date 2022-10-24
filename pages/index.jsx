import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>AlienBot Dashboard</title>
      </Head>

      <div className={styles.image}>
        <div className="center">
          <h1 className="white">AlienBot Dashboard</h1>
        </div>

        <div className="ultraCenter">
          <Link href="https://thealiendoctor.com/addAlienBot" class="bn13">
            Add to your server
          </Link>
        </div>

        <div className="ultraCenter">
          <Link href="/serverList" class="bn13">
            Configure your bot
          </Link>
        </div>
      </div>
    </div>
  );
}
