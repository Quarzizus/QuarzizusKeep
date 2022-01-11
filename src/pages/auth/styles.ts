import styled from "styled-components";

const LoginContainer = styled.section`
  background-color: #62c370;
  display: flex;
  align-items: center;
  width: 100%;
  picture {
    width: 60%;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 516px) {
    height: 100vh;
    picture {
      display: none;
    }
  }
`;

export { LoginContainer };
