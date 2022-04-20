import { TaskComponent } from "./styles";
import { Icon } from "./styles";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { props } from "./interfaces";
import { FormEvent, useContext, useState } from "react";
import { TaskCardContext } from "../taskCard/context/TaskCardContext";

const Task = ({ content, open, id, children }: props) => {
  const { dispatch } = useContext(TaskCardContext);

  const [contentState, setContentState] = useState(content);

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
      {children}
      <p
        contentEditable={open as boolean}
        suppressContentEditableWarning={true}
        spellCheck={false}
        onInput={({ target }: FormEvent<HTMLParagraphElement>) => {
          const { textContent } = target as HTMLParagraphElement;
          setContentState(textContent);
        }}
        onBlur={() => {
          dispatch({
            type: "EDIT_TASK_CONTENT",
            payload: contentState as string,
            taskId: id,
          });
        }}
      >
        {content}
      </p>
    </TaskComponent>
  );
};

export { Task };
