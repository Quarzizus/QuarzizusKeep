import { Dispatch, SetStateAction } from "react";
import { CheckBoxComponent, Icon } from "./styles";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface props {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

const CheckBox = ({ isChecked, setIsChecked }: props): JSX.Element => {
  const handleClick = (): void => {
    setIsChecked(!isChecked);
  };
  return (
    <CheckBoxComponent onClick={handleClick}>
      {isChecked && <Icon icon={faCheck} />}
    </CheckBoxComponent>
  );
};

export { CheckBox };
