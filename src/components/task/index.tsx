import { useState } from "react";
import { CheckBox } from "../checkbox";
import { TaskComponent } from "./styles";
import { Icon } from "./styles";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";

interface props {
  text: string;
  open: boolean;
}

const Task = ({ text, open }: props) => {
  return (
    <TaskComponent>
      <Icon icon={faGripVertical} />
      <CheckBox />
      <p
        contentEditable={open}
        suppressContentEditableWarning={true}
        spellCheck={false}
      >
        {text}
      </p>
    </TaskComponent>
  );
};

export { Task };
