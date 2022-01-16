import { Dispatch, SetStateAction, useState } from "react";
import { CheckBoxComponent, Icon } from "./styles";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { getDatabase } from "firebase/database";
import { handleUpdate } from "../../utils/handleUpdate";

interface props {
  cb: (value: boolean | undefined) => void;
  isChecked: boolean | undefined;
}

const CheckBox = ({ cb, isChecked }: props): JSX.Element => {
  const db = getDatabase();
  const [checked, setChecked] = useState(isChecked);
  const handleClick = (): void => {
    setChecked(!checked);
    console.log(checked);
    cb(!checked);
    // handleUpdate({ db, data: !isChecked, url });
  };

  return (
    <CheckBoxComponent onClick={handleClick}>
      {checked && <Icon icon={faCheck} />}
    </CheckBoxComponent>
  );
};

export { CheckBox };
