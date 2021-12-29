import { NavLink } from "react-router-dom";
import { Form } from "../../components/form";
import { LoginContainer } from "./styles";
import LoginImage from "../../images/login.jpg";

const Login = () => {
  return (
    <LoginContainer>
      <Form />
      <picture>
        <img src={LoginImage} alt="bosque" />
      </picture>
    </LoginContainer>
  );
};

export { Login };
