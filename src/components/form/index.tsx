import {
  FormComponent,
  Header,
  InputContainer,
  Input,
  ButtonLogin,
  LoginAlternatives,
} from "./styles";
import GoogleIcon from "../../images/google-icon.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const typeInputPassword = viewPassword ? "text" : "password";
  return (
    <FormComponent>
      <Header>
        <h1>Quarzizus Keep</h1>
        <p>
          Más vale la pálida tinta que todo el conocimiento del universo en la
          mano
        </p>
      </Header>
      <InputContainer>
        <label htmlFor="">Email</label>
        <Input type="email" placeholder="example@email.ext" />
      </InputContainer>
      <InputContainer>
        <label htmlFor="">Password</label>
        <div>
          <Input type={typeInputPassword} className="InputPassword" />
          <button
            type="button"
            onClick={() => {
              setViewPassword(!viewPassword);
            }}
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
      </InputContainer>
      <ButtonLogin type="button">Log in</ButtonLogin>
      <LoginAlternatives>
        <p>Log in with</p>
        <img src={GoogleIcon} alt="google" />
      </LoginAlternatives>
    </FormComponent>
  );
};

export { Form };
