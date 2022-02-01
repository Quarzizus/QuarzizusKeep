import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

interface props {
  open: boolean | null;
}

const TaskCardComponent = styled.article<props>`
  background-color: #104547;
  transition: all 0s linear;
  cursor: pointer;
  border-radius: 10px;
  padding: 15px 20px;
  color: rgb(217, 217, 217);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.5s ease all;
  border: 2px solid transparent;
  width: 100%;
  ${({ open }) =>
    open
      ? css`
          width: 580px;
        `
      : css`
          margin: 20px 10px;
          max-height: 400px;
          overflow: hidden;
          &:hover {
            border: 2px solid rgba(255, 255, 255, 0.5);
          }
        `}

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: 30px;
    display: flex;
    align-items: center;
    width: 100%;
  }
  h3:focus {
    outline: 1px solid white;
  }
  ul {
    list-style: none;
    margin-top: 10px;
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

const Icon = styled(FontAwesomeIcon)`
  color: transparent;
  cursor: move;
  font-size: 25px;
  &:hover {
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

export { TaskCardComponent, Icon };
