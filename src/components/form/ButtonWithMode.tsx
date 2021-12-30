import { useState } from "react";
import { ButtonLogin } from "./styles";
import { Credentials } from "./interfaces";
import { getAuth } from "firebase/auth";
import { register, signin } from "./utils";
import { useNavigate } from "react-router-dom";

const ButtonWithMode = ({ credentials }: { credentials: Credentials }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [buttonMode, setButtonMode] = useState(true);
  const mode = buttonMode ? signin : register;

  return (
    <>
      <p className="underline" onClick={() => setButtonMode(!buttonMode)}>
        {mode.message}
      </p>
      <ButtonLogin
        type="button"
        onClick={() => {
          mode.onClick({ credentials, auth, navigate });
        }}
      >
        {mode.button}
      </ButtonLogin>
    </>
  );
};

export { ButtonWithMode };
