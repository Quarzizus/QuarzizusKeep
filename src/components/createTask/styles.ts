import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CreateTaskComponent = styled.article`
  display: flex;
  padding-left: 19px;
  p {
    margin: 0 0 10px 10px;
    word-break: break-all;
    overflow-wrap: break-word;
    width: 100%;
  }
  p:focus {
    outline: none;
    border-bottom: 1px solid white;
  }
  button {
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    height: 15px;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
`;

export { CreateTaskComponent, Icon };
