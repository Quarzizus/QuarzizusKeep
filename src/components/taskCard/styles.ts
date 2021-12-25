import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const TaskCardComponent = styled.article`
  width: 100%;
  height: 100%;
  background-color: yellowgreen;
  border-radius: 10px;
  padding: 15px 20px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    height: 30px;
    display: flex;
    align-items: center;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: transparent;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export { TaskCardComponent, Icon };
