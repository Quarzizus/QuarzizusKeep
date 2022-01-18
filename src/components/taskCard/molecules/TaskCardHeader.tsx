import { DraggableSyntheticListeners } from "@dnd-kit/core";
import { Icon } from "../styles";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useContext, useState } from "react";
import { TaskCardContext } from "../context/TaskCardContext";

interface Atributes {
  role: string;
  tabIndex: number;
  "aria-pressed": boolean | undefined;
  "aria-roledescription": string;
  "aria-describedby": string;
}

interface props {
  title: string | null;
  listeners: DraggableSyntheticListeners;
  attributes: Atributes;
  open: boolean | null;
}

const TaskCardHeader = ({ title, attributes, listeners, open }: props) => {
  const { dispatch } = useContext(TaskCardContext);
  const [titleState, setTitleState] = useState(title);

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
        onBlur={() =>
          dispatch({
            type: "SET_TITLE",
            payload: titleState as string,
          })
        }
      >
        {title}
      </h3>
      {!open && (
        <Icon
          icon={faExpandArrowsAlt}
          {...listeners}
          {...attributes}
          className="Icon-Droppable"
        />
      )}
    </header>
  );
};

export { TaskCardHeader };
