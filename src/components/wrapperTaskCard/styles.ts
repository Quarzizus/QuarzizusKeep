import styled, { css } from "styled-components";

interface props {
  open: boolean | null;
}
const WrapperTaskCardComponent = styled.div<props>`
  transition: all 0s linear;
  ${({ open }) =>
    open
      ? css`
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0;
          left: 0;
        `
      : css`
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
  @media screen and (max-width: 600px) {
    padding: 0 0px;
    width: 100%;
  }
`;

export { WrapperTaskCardComponent };
