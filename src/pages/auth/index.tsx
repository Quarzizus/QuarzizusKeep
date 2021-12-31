import { NavLink } from "react-router-dom";
import { Form } from "../../components/form";
import { LoginContainer } from "./styles";
import LoginImage from "../../images/login.jpg";
import { FormProvider } from "../../components/form/context/FormContext";

const Login = () => {
  return (
    <LoginContainer>
      <FormProvider>
        <Form />
      </FormProvider>
      <picture>
        <img src={LoginImage} alt="bosque" />
      </picture>
    </LoginContainer>
  );
};

export { Login };
