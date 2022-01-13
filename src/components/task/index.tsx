import { CheckBox } from "../checkbox";
import { TaskComponent } from "./styles";
import { Icon } from "./styles";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { props } from "./interfaces";
import { FormEvent, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { getDatabase } from "firebase/database";
import { handleUpdate } from "../../utils/handleUpdate";

const Task = ({ content, open, id, taskRef, taskCardId, checked }: props) => {
  const { userId } = useContext(AppContext);
  const [isChecked, setIsChecked] = useState(checked);
  const [contentState, setContentState] = useState(content);
  const db = getDatabase();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  useEffect(() => {
    const url =
      userId + "/taskCards/" + taskCardId + "/tasks/" + id + "/content/";

    open === false && handleUpdate({ db, data: contentState, url });
  }, [open]);

  return (
    <TaskComponent ref={setNodeRef} style={style}>
      {open && <Icon icon={faGripVertical} {...attributes} {...listeners} />}
      <CheckBox
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        url={userId + "/taskCards/" + taskCardId + "/tasks/" + id + "/checked/"}
      />
      <p
        contentEditable={open as boolean}
        suppressContentEditableWarning={true}
        spellCheck={false}
        ref={taskRef}
        onInput={({ target }: FormEvent<HTMLParagraphElement>) => {
          const { textContent } = target as HTMLParagraphElement;
          setContentState(textContent);
        }}
      >
        {content}
      </p>
    </TaskComponent>
  );
};

export { Task };
