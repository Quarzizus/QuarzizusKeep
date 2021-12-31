import { MouseEvent } from "react";
import GoogleIcon from "../../../images/google-icon.svg";

interface props {
  handle: ({ e }: { e: any }) => Promise<void>;
  icon?: string;
}

const LoginAlternative = ({ handle, icon }: props) => {
  return (
    <>
      <p>Log in with</p>
      <button onClick={(e: MouseEvent) => handle({ e })}>
        <img src={GoogleIcon} alt="google" />
      </button>
    </>
  );
};

export { LoginAlternative };
