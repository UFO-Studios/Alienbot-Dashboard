import Head from "next/head";
import React from "react";
const data = require("./dataIn");

const allUsers = data.allUsers;
const onlineUsers = 56;
const testUptime = "2D 17H";

export default function botStats() {
  return (
    <div>
      <Head>
        <title>AlienBot Dashboard</title>
      </Head>

      <div>
        <h1 className="white">Alien Bot Dashboard: System Overveiw</h1>
        <br></br>
        <p1 className="white"> Uptime: {testUptime}.</p1>
        <p1 className="white"> Users: {allUsers}.</p1>
        <p1 className="white"> Online Users: {onlineUsers}</p1>
      </div>
    </div>
  );
}
