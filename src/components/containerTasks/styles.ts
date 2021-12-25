import styled from "styled-components";

const ContainerTasksComponent = styled.section`
  background-color: #202124;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-auto-rows: 70px;
  width: 70%;
  height: minmax(100vh, auto);
  gap: 20px;
  padding: 15px;
`;
export { ContainerTasksComponent };
