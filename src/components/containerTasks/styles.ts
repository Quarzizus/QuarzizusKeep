import styled from "styled-components";
import Masonry from "react-masonry-css";

const ContainerTasksComponent = styled.section`
  background-color: #202124;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-auto-rows: 70px;
  height: minmax(100vh, auto);
  gap: 20px;
  padding: 15px;
  position: static;
`;

const ContainerMasonry = styled(Masonry)`
  width: 75%;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export { ContainerTasksComponent, ContainerMasonry };
