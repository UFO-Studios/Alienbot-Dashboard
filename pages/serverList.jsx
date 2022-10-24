import React from "react";
import Head from "next/head";
import styles from "../styles/serverList.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function serverList() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>Login In</button>
    </>
  );
}
