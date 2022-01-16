import styled from "styled-components";

const CreateTaskCardContainerComponent = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 25%;
  min-height: 120px;

  & .Icon-Droppable {
    display: none;
  }
  @media screen and (max-width: 700px) {
    padding: 0 10%;
  }
`;

export { CreateTaskCardContainerComponent };
