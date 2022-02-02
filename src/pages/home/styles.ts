import styled from "styled-components";

const HomePage = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(300px, 25%) 1fr;
  grid-template-rows: 70px 1fr;
  @media screen and (max-width: 570px) {
    grid-template-columns: 1fr;
  }
`;

const CardsContainer = styled.section`
  grid-column: 2/3;
  background-color: #1c1c1c;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  align-items: center;
  justify-items: center;
  padding-bottom: 60px;
  @media screen and (max-width: 570px) {
    grid-column: 1/-1;
    grid-row: 2/-1;
  }
`;

export { CardsContainer, HomePage };
