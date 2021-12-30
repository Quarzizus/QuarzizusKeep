import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { MouseEvent } from "react";
import { Credentials } from "./interfaces";
const GoogleProvider = new GoogleAuthProvider();

const handleSignInUser = async ({
  credentials,
  auth,
}: {
  credentials: Credentials;
  auth: Auth;
}) => {
  const userCredentials = await signInWithEmailAndPassword(
    auth,
    credentials.email,
    credentials.password
  );
  console.log(userCredentials);
};

const handleRegisterUser = async ({
  credentials,
  auth,
}: {
  credentials: Credentials;
  auth: Auth;
}) => {
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    credentials.email,
    credentials.password
  );
  console.log(userCredentials);
};

const handleSubmitWithGoogle = async ({
  e,
  auth,
}: {
  e: MouseEvent;
  auth: Auth;
}) => {
  e.preventDefault();
  try {
    const result = await signInWithPopup(auth, GoogleProvider);
    const user = result.user;
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
