import styled from "styled-components";

const HomePage = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-rows: 70px 1fr;
`;

const CardsContainer = styled.section`
  background-color: #1c1c1c;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  align-items: center;
  justify-items: center;
  padding-bottom: 60px;
`;

export { CardsContainer, HomePage };
