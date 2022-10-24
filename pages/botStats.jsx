import Head from "next/head";
import React from 'react';
import ReactDOM from 'react-dom';
import * as Victory from 'victory';
import { VictoryBar } from "victory";
import Users from "./api/botStats/users.js"

export default function Home() {
  return (
    <div>
      <Head>
        <title>AlienBot Dashboard</title>
      </Head>

      <div>
        <h1 className="white">Current users</h1>
        <Users/>
      </div>
    </div>
  );
}
