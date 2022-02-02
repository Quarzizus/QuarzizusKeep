import styled from "styled-components";

const SpinnerComponent = styled.svg`
  & {
    grid-row: 2/3;
    width: 150px;
    height: 150px;
    animation: rotate 2s linear infinite;
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    circle {
      width: 100%;
      height: 100%;
      fill: none;
      stroke-width: 10;
      stroke-linecap: round;
      stroke-dasharray: 440;
      stroke-dashoffset: 440;
      stroke: #62c370;
      transform: translate(5px, 5px);
      animation: animate 4s linear infinite;
    }
    @keyframes animate {
      0%,
      100% {
        stroke-dashoffset: 440;
      }
      50% {
        stroke-dashoffset: 0;
      }
      50.1% {
        stroke-dashoffset: 880;
      }
    }
  }
`;

export { SpinnerComponent };
