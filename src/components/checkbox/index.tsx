import { useState } from "react";
import { CheckBoxComponent, Icon } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const CheckBox = (): JSX.Element => {
  const [checked, setChecked] = useState(false);
  const handleClick = (): void => {
    setChecked(!checked);
  };
  return (
    <CheckBoxComponent onClick={handleClick}>
      {checked && <Icon icon={faCheck} />}
    </CheckBoxComponent>
  );
};

export { CheckBox };
