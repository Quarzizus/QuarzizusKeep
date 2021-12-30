import {
  FormComponent,
  Header,
  InputContainer,
  Input,
  LoginAlternatives,
} from "./styles";
import GoogleIcon from "../../images/google-icon.svg";
import { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Credentials } from "./interfaces";
import { handleSubmitWithGoogle } from "./utils";
import { ButtonWithMode } from "./ButtonWithMode";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const [viewPassword, setViewPassword] = useState(false);
  const typeInputPassword = viewPassword ? "text" : "password";
  const auth = getAuth();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
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
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          placeholder="example@email.ext"
          onChange={handleChange}
          name="email"
          id="email"
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Password</label>
        <div>
          <Input
            type={typeInputPassword}
            className="InputPassword"
            onChange={handleChange}
            name="password"
            id="password"
          />
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
      <ButtonWithMode credentials={credentials} />
      <LoginAlternatives>
        <p>Log in with</p>
        <button
          onClick={async (e) => {
            try {
              await handleSubmitWithGoogle({ e, auth, navigate });
              navigate("/home");
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <img src={GoogleIcon} alt="google" />
        </button>
      </LoginAlternatives>
    </FormComponent>
  );
};

export { Form };
