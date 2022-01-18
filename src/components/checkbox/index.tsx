import { useState } from "react";
import { CheckBoxComponent, Icon } from "./styles";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface props {
  cb: (value: boolean | undefined) => void;
  isChecked: boolean | undefined;
}

const CheckBox = ({ cb, isChecked }: props): JSX.Element => {
  const [checked, setChecked] = useState(isChecked);
  const handleClick = (): void => {
    setChecked(!checked);
    cb(!checked);
  };

  return (
    <CheckBoxComponent onClick={handleClick}>
      {checked && <Icon icon={faCheck} />}
    </CheckBoxComponent>
  );
};

export { CheckBox };
