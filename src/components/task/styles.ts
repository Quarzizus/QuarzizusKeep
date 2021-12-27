import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: transparent;
  &:hover {
    color: white;
    cursor: move;
  }
  &:focus {
    outline: none;
  }
`;

export { TaskComponent, Icon };
