import styled from "styled-components";

const colorMain = "#62c370";

const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: purple;
  justify-content: space-around;
  background-color: rgba(12, 18, 12);
  color: white;
  height: 100vh;
  width: 40%;
  min-width: 500px;
  p.underline {
    text-decoration: underline;
    cursor: pointer;
  }
  @media screen and (max-width: 516px) {
    min-width: 100%;
    height: 100vh;
    padding: 40px 10px;
  }
`;

const Header = styled.header`
  h1 {
    font-size: 60px;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.1rem;
    width: 70%;
  }
`;

const InputContainer = styled.article`
  width: 100%;
  height: 75px;
  border-left: 4px solid ${colorMain};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgba(255, 255, 255, 0.2);
  label {
    margin-left: 10px;
    font-size: 0.8rem;
    width: 100%;
  }
  div {
    display: flex;
    width: 100%;

    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    height: 40px;
    button {
      background-color: transparent;
      border: none;
      color: white;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  height: 50%;
  border: none;
  padding: 0 0 0 10px;
  font-size: 1.1rem;
  color: white;
  &.InputPassword {
    width: 100%;
    height: 100%;
    user-select: none;
  }
  &:focus {
    outline: none;
  }
`;

const ButtonLogin = styled.button`
  background-color: ${colorMain};
  width: 70%;
  height: 45px;
  border: none;
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

const LoginAlternatives = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  p {
    margin-right: 10px;
  }
  img {
    cursor: pointer;
  }
  button {
    border: none;
    background-color: transparent;
  }
`;

export {
  FormComponent,
  Header,
  InputContainer,
  Input,
  ButtonLogin,
  LoginAlternatives,
};
