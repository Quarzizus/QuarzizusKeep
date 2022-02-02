import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import { Credentials, FormContextProps } from "../interfaces";
import { createInitialData } from "../utils/createInitialData";
import { initialDataUser } from "../../../db";
import { setLocalStorage } from "../utils/setLocalStorage";

const FormContext = createContext({} as FormContextProps);
const { Provider } = FormContext;
interface FormProviderProps {
  children: JSX.Element | JSX.Element[];
}

const FormProvider = ({ children }: FormProviderProps) => {
  const { dispatch } = useContext(AppContext);

  const [error, setError] = useState<any>(null);
  const GoogleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignInUser = async ({
    credentials,
  }: {
    credentials: Credentials;
  }) => {
    await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
      .then((userCredentials) => {
        const user = userCredentials.user;
        setLocalStorage("userId", user.uid);
        dispatch({
          type: "SET_USERID",
          payload: user.uid,
        });
        setLocalStorage("email", user.email);
        dispatch({
          type: "SET_EMAIL",
          payload: user.email as string,
        });
        return navigate("/home");
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  const handleRegisterUser = async ({
    credentials,
  }: {
    credentials: Credentials;
  }) => {
    await createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
      .then((userCredentials) => {
        const user = userCredentials.user;
        setLocalStorage("userId", user.uid);
        dispatch({
          type: "SET_USERID",
          payload: user.uid,
        });
        setLocalStorage("email", user.email);
        dispatch({
          type: "SET_EMAIL",
          payload: user.email as string,
        });
        createInitialData(initialDataUser, user.uid);
        navigate("/home");
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  const handleSubmitWithGoogle = async ({ e }: { e: MouseEvent }) => {
    e.preventDefault();
    await signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        setLocalStorage("userId", user.uid);
        dispatch({
          type: "SET_USERID",
          payload: user.uid,
        });
        setLocalStorage("email", user.email);
        dispatch({
          type: "SET_EMAIL",
          payload: user.email as string,
        });
        dispatch({
          type: "SET_PHOTO",
          payload: user.photoURL as string,
        });
        createInitialData(initialDataUser, user.uid);
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
  const value = {
    register,
    signin,
    error,
    handleSubmitWithGoogle,
  };

  return <Provider value={value}>{children}</Provider>;
};

export { FormProvider, FormContext };
