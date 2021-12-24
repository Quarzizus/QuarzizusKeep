import { useState } from "react";
import { CheckBoxComponent } from "./styles";

const CheckBox = (): JSX.Element => {
  const [checked, setChecked] = useState(false);
  const handleClick = (): void => {
    setChecked(!checked);
  };
  return (
    <CheckBoxComponent onClick={handleClick}>
      {checked && "X"}
    </CheckBoxComponent>
  );
};

export { CheckBox };
