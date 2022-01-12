import { Dispatch, SetStateAction } from "react";
import { CheckBoxComponent, Icon } from "./styles";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { updateTask } from "../task/utils/updateTask";
import { getDatabase } from "firebase/database";

interface props {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
  url: string;
}

const CheckBox = ({ isChecked, setIsChecked, url }: props): JSX.Element => {
  const db = getDatabase();
  const handleClick = (): void => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckBoxComponent
      onClick={() => {
        handleClick();
        updateTask({ db, data: !isChecked, url });
      }}
    >
      {isChecked && <Icon icon={faCheck} />}
    </CheckBoxComponent>
  );
};

export { CheckBox };
