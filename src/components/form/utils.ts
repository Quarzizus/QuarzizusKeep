import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { MouseEvent } from "react";
import { NavigateFunction } from "react-router-dom";
import { Credentials } from "./interfaces";

const GoogleProvider = new GoogleAuthProvider();

const handleSignInUser = async ({
  credentials,
  auth,
  navigate,
}: {
  credentials: Credentials;
  auth: Auth;
  navigate: NavigateFunction;
}) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    console.log(userCredentials);
    navigate("/home");
  } catch (error) {
    console.log(error);
  }
};
const handleRegisterUser = async ({
  credentials,
  auth,
  navigate,
}: {
  credentials: Credentials;
  auth: Auth;
  navigate: NavigateFunction;
}) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    console.log(userCredentials);
    navigate("/home");
  } catch (error) {
    console.log(error);
  }
};
const handleSubmitWithGoogle = async ({
  e,
  auth,
  navigate,
}: {
  e: MouseEvent;
  auth: Auth;
  navigate: NavigateFunction;
}) => {
  e.preventDefault();
  try {
    const result = await signInWithPopup(auth, GoogleProvider);
    const user = result.user;
    navigate("/home");
  } catch (error) {
    console.log(error);
  }
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
