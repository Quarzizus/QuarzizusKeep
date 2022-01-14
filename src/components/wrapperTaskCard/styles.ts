import styled, { css } from "styled-components";

interface props {
  open: boolean | null;
}
const WrapperTaskCardComponent = styled.div<props>`
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

export { WrapperTaskCardComponent };
