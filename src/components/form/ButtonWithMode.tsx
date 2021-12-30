import { useState } from "react";
import { ButtonLogin } from "./styles";
import { Credentials } from "./interfaces";
import { getAuth } from "firebase/auth";
import { register, signin } from "./utils";

const ButtonWithMode = ({ credentials }: { credentials: Credentials }) => {
  const auth = getAuth();
  const [buttonMode, setButtonMode] = useState(true);
  const mode = buttonMode ? signin : register;

  return (
    <>
      <p onClick={() => setButtonMode(!buttonMode)}>{mode.message}</p>
      <ButtonLogin
        type="button"
        onClick={() => mode.onClick({ credentials, auth })}
      >
        {mode.button}
      </ButtonLogin>
    </>
  );
};

export { ButtonWithMode };
