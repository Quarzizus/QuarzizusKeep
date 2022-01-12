import { DraggableSyntheticListeners } from "@dnd-kit/core";
import { Icon } from "./styles";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useContext, useEffect, useState } from "react";
import { updateTaskCard } from "./utils/updateTaskCard";
import { getDatabase } from "firebase/database";
import { AppContext } from "../../context/AppContext";
import { props as TaskProps } from "../task/interfaces";

interface Atributes {
  role: string;
  tabIndex: number;
  "aria-pressed": boolean | undefined;
  "aria-roledescription": string;
  "aria-describedby": string;
}

interface props {
  open: boolean | null;
  title: string | null;
  listeners: DraggableSyntheticListeners;
  attributes: Atributes;
  taskCardId: string;
  tasks: TaskProps[];
}

const TaskCardHeader = ({
  open,
  title,
  attributes,
  listeners,
  taskCardId,
  tasks,
}: props) => {
  const [titleState, setTitleState] = useState(title);
  const db = getDatabase();
  const { userId } = useContext(AppContext);
  useEffect(() => {
    const data = {
      title: titleState,
      id: taskCardId,
      tasks: {},
    };

    open === false && updateTaskCard({ db, data, userId, taskCardId });
  }, [open]);

  return (
    <header>
      <h3
        contentEditable={open as boolean}
        suppressContentEditableWarning={true}
        spellCheck={false}
        onInput={({ target }: FormEvent<HTMLHeadElement>) => {
          const { textContent } = target as HTMLHeadElement;
          setTitleState(textContent);
        }}
      >
        {title}
      </h3>
      {!open && (
        <Icon icon={faExpandArrowsAlt} {...listeners} {...attributes} />
      )}
    </header>
  );
};

export { TaskCardHeader };
