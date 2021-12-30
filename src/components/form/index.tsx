import {
  FormComponent,
  Header,
  InputContainer,
  Input,
  ButtonLogin,
  LoginAlternatives,
} from "./styles";
import GoogleIcon from "../../images/google-icon.svg";
import { ChangeEvent, MouseEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

interface Credentials {
  email: string;
  password: string | number;
}

const Form = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const [viewPassword, setViewPassword] = useState(false);
  const typeInputPassword = viewPassword ? "text" : "password";
  const GoogleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, GoogleProvider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
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
      <ButtonLogin type="button">Log in</ButtonLogin>
      <LoginAlternatives>
        <p>Log in with</p>
        <button onClick={handleSubmit}>
          <img src={GoogleIcon} alt="google" />
        </button>
      </LoginAlternatives>
    </FormComponent>
  );
};

export { Form };
