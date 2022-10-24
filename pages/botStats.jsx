import Head from "next/head";
import React from "react";
import Users from "../components/users";

export default function botStats() {
  return (
    <div>
      <Head>
        <title>AlienBot Dashboard</title>
      </Head>

      <div>
        <h1 className="white">Current users</h1>
        <Users />
      </div>
    </div>
  );
}
