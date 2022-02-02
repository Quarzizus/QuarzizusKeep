import styled from "styled-components";

const HeaderComponent = styled.header`
  grid-column: 1/-1;
  grid-row: 1/2;
  width: 100%;
  background-color: #202124;
  display: flex;
  align-items: center;
  padding: 0 30px;
  color: white;
  display: flex;
  justify-content: space-between;
  .Header_logo {
    display: flex;
    align-items: center;
    picture {
      img {
        height: 50px;
        width: 50px;
      }
    }
    h1 {
      margin-left: 3px;
    }
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    img {
      width: 30px;
      height: 30px;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  @media screen and (min-width: 570px) {
    & button {
      display: none;
    }
  }
`;
export { HeaderComponent };
