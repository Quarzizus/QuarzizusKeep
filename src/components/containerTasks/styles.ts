import styled from "styled-components";
import Masonry from "react-masonry-css";

const ContainerTasksComponent = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-auto-rows: 70px;
  height: minmax(100vh, auto);
  gap: 20px;
`;

const ContainerMasonry = styled(Masonry)`
  background-color: rgba(12, 18, 12);
  padding: 15px;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export { ContainerTasksComponent, ContainerMasonry };
