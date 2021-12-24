import styled from "styled-components";

const TaskCardComponent = styled.article`
  background-color: yellowgreen;
  border-radius: 10px;
  padding: 10px;
  h3 {
    height: 30px;
    display: flex;
    align-items: center;
  }
  h3:focus,
  ul {
    list-style: none;
    margin-top: 10px;
  }
`;

export { TaskCardComponent };
