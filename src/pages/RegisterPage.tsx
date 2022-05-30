import React from "react";
import { Link } from "react-router-dom";
import { SignUp } from "../components/SignUp";
import styles from "./Pages.module.scss";

export default function RegisterPage() {
  return (
    <>
      <div className={styles.wrapperRegister}>
        <div className={styles.containerRegister}>
          <div className={styles.formRegister}>
            <h2>Register </h2>
            <SignUp />
            <p>
              Already have an accound? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
