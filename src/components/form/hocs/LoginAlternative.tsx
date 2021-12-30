import { MouseEvent } from "react";
import GoogleIcon from "../../../images/google-icon.svg";
import { Auth, getAuth } from "firebase/auth";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { setError } from "../interfaces";

interface props {
  handle: ({
    e,
    auth,
    navigate,
  }: {
    e: MouseEvent;
    auth: Auth;
    navigate: NavigateFunction;
    setError: setError;
  }) => Promise<void | string>;
  icon?: string;
  setError: setError;
}

const LoginAlternative = ({ handle, icon, setError }: props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  return (
    <>
      <p>Log in with</p>
      <button onClick={(e) => handle({ e, auth, navigate, setError })}>
        <img src={GoogleIcon} alt="google" />
      </button>
    </>
  );
};

export { LoginAlternative };
