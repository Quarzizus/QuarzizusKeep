import styled from "styled-components";

const HeaderComponent = styled.header`
  grid-column: 1/-1;
  grid-row: 1/2;
  width: 100%;
  background-color: #202124;
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: white;
  picture {
    img {
      width: 50px;
    }
  }
  h1 {
    margin-left: 3px;
  }
`;
export { HeaderComponent };
