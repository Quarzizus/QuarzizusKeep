import styled from "styled-components";

const TaskComponent = styled.li`
  margin-top: 3px;
  height: 40px;
  display: flex;
  align-items: center;
  &:focus {
    outline: 1px solid white;
  }
`;

export { TaskComponent };
