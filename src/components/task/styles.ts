import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskComponent = styled.li`
  min-height: 40px;
  display: flex;
  align-items: start;
  width: 100%;
  p {
    width: 90%;
    overflow-wrap: break-word;
    word-break: break-all;
  }
  & p:focus {
    outline: none;
    border-bottom: 1px solid white;
    font-weight: bold;
    caret-color: white;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  margin-top: 1px;
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
