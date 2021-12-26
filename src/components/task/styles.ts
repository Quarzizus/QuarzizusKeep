import styled from "styled-components";

const TaskComponent = styled.li`
  height: 40px;
  display: flex;
  align-items: center;

  p {
    width: 100%;
  }
  & p:focus {
    outline: none;
    border-bottom: 1px solid white;
    font-weight: bold;
    caret-color: black;
  }
`;

export { TaskComponent };
