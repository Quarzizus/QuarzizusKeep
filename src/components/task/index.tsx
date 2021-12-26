import { useState } from "react";
import { CheckBox } from "../checkbox";
import { TaskComponent } from "./styles";

interface props {
  text: string;
  open: boolean;
}

const Task = ({ text, open }: props) => {
  return (
    <TaskComponent>
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
