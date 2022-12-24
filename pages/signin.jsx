import styles from "../styles/signin.module.css";
import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();

  const { err } = router.query;
  const accExists = err === "ACCOUNT_EXISTS";
  const emailNotFound = err === "EMAIL_NO_EXIST";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    router.push(
      `/api/auth/signin?e=${e.target["0"].value}&p=${e.target["1"].value}`
    );
  };

  const remove = () => {
    router.push("/signin");
  };

  return (
    <div>
      <Head>
        <title>SignIn | AlienBot</title>
      </Head>
      <div className={styles.image}>
        <div className="ultraCenter">
          <h1 className="wheat">SignIn To AlienBot Dashboard</h1>
        </div>

        {accExists ? (
          <div class="popup error">
            <div class="message">
              <p>
                An account already exists with that email. <br />
                Please login or use a different email.
              </p>
            </div>
            <div class="action">
              <button onClick={remove}>okay</button>
            </div>
          </div>
        ) : (
          ""
        )}

        {emailNotFound ? (
          <div className="popup error">
            <div className="message">
              <p>
                Your email does not exist. <br />
                Please check if you have written <br />
                the correct spellings.
              </p>
            </div>
            <div className="action">
              <button onClick={remove}>okay</button>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="ultraCenter">
          <form onSubmit={handleSubmit} className="block">
            <label htmlFor="emailInput">Email</label>
            <input type="email" name="emailInput" className="block input" />
            <label htmlFor="passwordInput">Password</label>
            <input
              type="password"
              minLength={8}
              maxLength={12}
              name="passwordInput"
              className="block input"
            />
            <p className="ultraCenter">
              <button type="submit" className="bn13">
                Sign In
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
