import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import styled from "styled-components";



export default function Home() {
  return (
    <div>
      <Head>
        <title>AlienBot Dashboard</title>
      </Head>

      
      <div
  style={{
    '--color-1': 'deepskyblue',
    '--color-2': 'navy',
    background: `
      linear-gradient(
        170deg,
        var(--color-1),
        var(--color-2) 80%
      )
    `,

    // Unrelated styles:
    color: 'white',
    textAlign: 'center',
    padding: 30,
    borderRadius: 12,
  }}
>
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
          <Link href="/botStats" class="bn13">
            See Bot Status
          </Link>
        </div>

        <div className="ultraCenter">
          <Link href="/serverList" class="bn13">
            Configure your bot
          </Link>
        </div>
        <div className="ultraCenter">
          <button2 href="./botStats.jsx">Test</button2>
        </div>
      </div>
      </div>
    </div>
  );
}
