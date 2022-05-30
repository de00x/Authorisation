import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slices/userSlice";
import { Form } from "./Form";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.displayName,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("User not registered!"));
  };

  return <Form title="Sign in" handleClick={handleLogin} />;
};

export { Login };
