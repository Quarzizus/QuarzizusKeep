import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const TaskCardComponent = styled.article`
  background-color: yellowgreen;
  border-radius: 10px;
  padding: 15px 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 10px 10px 20px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    height: 30px;
    display: flex;
    align-items: center;
  }
  ul {
    list-style: none;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: transparent;
  cursor: pointer;
  &:hover {
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

export { TaskCardComponent, Icon };
