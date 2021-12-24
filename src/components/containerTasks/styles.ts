import styled from "styled-components";

const GridTasks = styled.section`
  width: 100%;
  /* background-color: blue; */
  height: minmax(100vh, auto);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-left: 20px;
  margin-top: 20px;
`;

export { GridTasks };
