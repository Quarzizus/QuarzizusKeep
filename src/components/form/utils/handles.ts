import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { MouseEvent } from "react";
import { NavigateFunction } from "react-router-dom";
import { Credentials, setError } from "../interfaces";

const GoogleProvider = new GoogleAuthProvider();

interface HandleAuth {
  credentials: Credentials;
  auth: Auth;
  navigate: NavigateFunction;
  setError: setError;
}

const handleSignInUser = async ({
  credentials,
  auth,
  navigate,
  setError,
}: HandleAuth) => {
  await signInWithEmailAndPassword(
    auth,
    credentials.email,
    credentials.password
  )
    .then((userCredentials) => {
      console.log(userCredentials);
      navigate("/home");
    })
    .catch((error) => {
      setError(error.code);
    });
};
const handleRegisterUser = async ({
  credentials,
  auth,
  navigate,
  setError,
}: HandleAuth) => {
  await createUserWithEmailAndPassword(
    auth,
    credentials.email,
    credentials.password
  )
    .then((userCredentials) => {
      console.log(userCredentials);
      navigate("/home");
    })
    .catch((error) => {
      setError(error.code);
    });
};
const handleSubmitWithGoogle = async ({
  e,
  auth,
  navigate,
  setError,
}: {
  e: MouseEvent;
  auth: Auth;
  navigate: NavigateFunction;
  setError: setError;
}) => {
  e.preventDefault();
  await signInWithPopup(auth, GoogleProvider)
    .then((result) => {
      const user = result.user;
      navigate("/home");
    })
    .catch((error) => {
      setError(error.code);
    });
};

const register = {
  message: "I have already account ",
  button: "Register",
  onClick: handleRegisterUser,
};
const signin = {
  message: "I don't have account ",
  button: "Sign In",
  onClick: handleSignInUser,
};
export {
  handleRegisterUser,
  handleSubmitWithGoogle,
  handleSignInUser,
  register,
  signin,
};
