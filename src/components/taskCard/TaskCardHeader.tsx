import { DraggableSyntheticListeners } from "@dnd-kit/core";
import { Icon } from "./styles";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";

interface Atributes {
  role: string;
  tabIndex: number;
  "aria-pressed": boolean | undefined;
  "aria-roledescription": string;
  "aria-describedby": string;
}

interface props {
  open: boolean | null;
  title: string;
  listeners: DraggableSyntheticListeners;
  attributes: Atributes;
}

const TaskCardHeader = ({ open, title, attributes, listeners }: props) => {
  return (
    <header>
      <h3
        contentEditable={open as boolean}
        suppressContentEditableWarning={true}
        spellCheck={false}
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
