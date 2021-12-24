import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const TaskCardComponent = styled.article`
  background-color: yellowgreen;
  border-radius: 10px;
  padding: 15px 20px;
  color: #fff;
  margin: 20px 20px 10px 10px;
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
