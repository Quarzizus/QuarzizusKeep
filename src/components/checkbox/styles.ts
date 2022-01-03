import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CheckBoxComponent = styled.div`
  width: 15px;
  height: 15px;
  border: 1.8px solid #fff;
  margin-right: 10px;
  margin-top: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 10px;
`;
export { CheckBoxComponent, Icon };
