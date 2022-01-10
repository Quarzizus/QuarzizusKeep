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
  padding: 15px;
  height: 100%;
  width: 100%;
  display: flex;
  overflow-x: hidden;
  overflow-y: scroll;
  grid-column: 1/-1;
  grid-row: 2/3;
`;

export { ContainerTasksComponent, ContainerMasonry };
