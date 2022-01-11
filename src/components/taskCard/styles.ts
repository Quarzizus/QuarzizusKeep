import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

interface props {
  open: boolean | null;
}
const WrapperTask = styled.div<props>`
  ${({ open }) =>
    open &&
    css`
      width: 100vw;
      background-color: #0007;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
    `}
  @media screen and (max-width: 600px) {
    padding: 0 0px;
    margin: 0 0 0 -20px;
    width: 100%;
  }
`;

const TaskCardComponent = styled.article<props>`
  background-color: #020202;
  cursor: pointer;
  border-radius: 10px;
  padding: 15px 20px;
  color: rgb(217, 217, 217);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.5s ease all;
  border: 2px solid rgba(98, 195, 112, 0.5);
  ${({ open }) =>
    open
      ? css`
          width: 580px;
        `
      : css`
          margin: 20px 10px 10px 20px;
          max-height: 250px;
          overflow: hidden;
          &:hover {
            border: 2px solid rgba(98, 195, 112);
          }
        `}

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
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

  @media screen and (max-width: 600px) {
    width: 100%;
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

export { TaskCardComponent, Icon, WrapperTask };
