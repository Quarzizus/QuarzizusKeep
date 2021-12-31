import { useContext, useState } from "react";
import { ButtonLogin } from "../styles";
import { Credentials } from "../interfaces";
import { FormContext } from "../context/FormContext";

interface props {
  credentials: Credentials;
}

const ButtonWithMode = ({ credentials }: props) => {
  const { signin, register } = useContext(FormContext);
  const [buttonMode, setButtonMode] = useState(true);
  const mode = buttonMode ? signin : register;

  return (
    <>
      <p className="underline" onClick={() => setButtonMode(!buttonMode)}>
        {mode.message}
      </p>
      <ButtonLogin type="button" onClick={() => mode.onClick({ credentials })}>
        {mode.button}
      </ButtonLogin>
    </>
  );
};

export { ButtonWithMode };
