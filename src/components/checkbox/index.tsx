import { Dispatch, SetStateAction } from "react";
import { CheckBoxComponent, Icon } from "./styles";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { getDatabase } from "firebase/database";
import { handleUpdate } from "../../utils/handleUpdate";

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
        handleUpdate({ db, data: !isChecked, url });
      }}
    >
      {isChecked && <Icon icon={faCheck} />}
    </CheckBoxComponent>
  );
};

export { CheckBox };
