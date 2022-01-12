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

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 4px;
  }

  &::-webkit-scrollbar-button:increment,
  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f1f2f3;
    border-radius: 20px;
    /* border: 2px solid #; */
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  @media screen and (max-width: 700px) {
    width: 80%;
    padding: 15px 10px 15px 0;
    /* background-color: red; */
  }
`;

export { ContainerTasksComponent, ContainerMasonry };
