import React from "react";
import { Link } from "react-router-dom";
import { Login } from "../components/Login";
import styles from "./Pages.module.scss";

export default function LoginPage() {
  return (
    <>
      <div className={styles.wrapperLogin}>
        <div className={styles.containerLogin}>
          <div className={styles.formLogin}>
            <h2>Login form</h2>
            <Login />
            <p>
              No account? <Link to="/register">Register</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
