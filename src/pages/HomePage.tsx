import React from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/slices/userSlice";
import styles from "./Pages.module.scss";

export default function HomePage() {
  const dispatch = useAppDispatch();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <>
      <div className={styles.wrapperHome}>
        <div className={styles.headerHome}>
          <h3>Welcome {email}</h3>

          <button onClick={() => dispatch(removeUser())}>Log out</button>
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
}
