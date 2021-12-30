import {
  FormComponent,
  Header,
  InputContainer,
  Input,
  LoginAlternatives,
} from "./styles";
import { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Credentials } from "./interfaces";
import { handleSubmitWithGoogle } from "./utils/handles";
import { ButtonWithMode } from "./hocs/ButtonWithMode";
import { LoginAlternative } from "./hocs/LoginAlternative";
import { FirebaseError } from "firebase/app";

const Form = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<any>(null);
  const [viewPassword, setViewPassword] = useState(false);
  const typeInputPassword = viewPassword ? "text" : "password";

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
      <ButtonWithMode credentials={credentials} setError={setError} />
      <div>
        <p>{error}</p>
      </div>
      <LoginAlternatives>
        <LoginAlternative handle={handleSubmitWithGoogle} setError={setError} />
      </LoginAlternatives>
    </FormComponent>
  );
};

export { Form };
