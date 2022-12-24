import styles from "../styles/signin.module.css";
import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function LogIn() {
  const router = useRouter();

  const { err } = router.query;
  const accNoExists = err == "ACCOUNT_NO_EXIST";
  const passwordInvalid = err == "PASSWORD_INVALID";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    router.push(
      `/api/auth/login?e=${e.target["0"].value}&p=${e.target["1"].value}`
    );
  };

  const remove = () => {
    router.push("/login");
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

        {accNoExists ? (
          <div className="popup error">
            <div className="message">
              <p>
                An account doesn't exist with that email. <br />
                Please signin or use a different email.
              </p>
            </div>
            <div className="action">
              <button onClick={remove}>okay</button>
            </div>
          </div>
        ) : (
          ""
        )}

        {passwordInvalid ? (
          <div className="popup error">
            <div className="message">
              <p>
                Invalid Credentials. <br />
                Please try again with correct email/password.
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
                Log In
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
