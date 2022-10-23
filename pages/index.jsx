import Head from "next/head";
import styles from "../styles/Home.module.css";

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
          <a href="/botStats" class="bn13">
            See bot stats
          </a>
        </div>

        <div className="ultraCenter">
          <a href="https://thealiendoctor.com/addAlienBot" class="bn13">
            Add to your server
          </a>
        </div>

        <div className="ultraCenter">
          <a href="/serverList" class="bn13">
            Configure your bot
          </a>
        </div>
      </div>
    </div>
  );
}
