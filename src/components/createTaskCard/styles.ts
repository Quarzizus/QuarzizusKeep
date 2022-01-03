import { TaskCardComponent } from "../taskCard/styles";
import styled from "styled-components";

const CreateTaskCardComponent = styled.section`
  margin: 20px 0;
  min-height: 50px;
  width: 500px;
  background-color: black;
  grid-row: 1/-2;
  cursor: pointer;
  border-radius: 10px;
  padding: 15px 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.5);
  &:hover {
    border: 1px solid rgba(255, 255, 255, 1);
  }
  h2 {
    font-weight: 400;
    font-size: 1.1rem;
    caret-color: white;
    margin-bottom: 12px;
  }
  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;

    button {
      width: 80px;
      height: 30px;
      background-color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;

export { CreateTaskCardComponent };
