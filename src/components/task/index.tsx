import { CheckBox } from "../checkbox";
import { TaskComponent } from "./styles";
import { Icon } from "./styles";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { props } from "./interfaces";
import { useState } from "react";

const Task = ({ content, open, id, taskRef }: props) => {
  const [isChecked, setIsChecked] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <TaskComponent ref={setNodeRef} style={style}>
      {open && <Icon icon={faGripVertical} {...attributes} {...listeners} />}
      <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
      <p
        contentEditable={open}
        suppressContentEditableWarning={true}
        spellCheck={false}
        ref={taskRef}
      >
        {content}
      </p>
    </TaskComponent>
  );
};

export { Task };
