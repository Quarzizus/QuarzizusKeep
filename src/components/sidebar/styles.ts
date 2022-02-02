import styled from "styled-components";

const Aside = styled.aside`
  height: 100vh;
  width: 100%;
  grid-column: 1/2;
  background-color: #1c1c1c;
  color: white;
  display: grid;
  place-items: center;
  grid-template-rows: 50px 1fr;
  flex-direction: column;
  transition: 1s transform ease;

  header {
    display: none;
    grid-row: 1/2;
    height: 100%;
    button.Close {
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 570px) {
    position: absolute;
    transform: translateX(-100vw);
    &.Show_aside {
      transform: translateX(0vw);
      header {
        width: 100%;
        display: flex;
        justify-content: end;
        button.Close {
          display: block;
          background-color: transparent;
          width: 50px;
        }
      }
    }
  }
`;

const ProfileCard = styled.div`
  grid-row: 2/-1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  picture {
    img {
      width: 200px;
      border-radius: 50%;
    }
  }
  h2 {
    margin-bottom: 10px;
  }
  button {
    width: 100px;
    height: 40px;
    border: none;
    background-color: #62c370;
    color: white;
    font-size: 1rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }
`;

export { Aside, ProfileCard };
