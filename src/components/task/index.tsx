import { CheckBox } from "../checkbox";
import { TaskComponent } from "./styles";
import { Icon } from "./styles";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { props } from "./interfaces";

const Task = ({ content, open, id }: props) => {
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
      <Icon icon={faGripVertical} {...attributes} {...listeners} />
      <CheckBox />
      <p
        contentEditable={open}
        suppressContentEditableWarning={true}
        spellCheck={false}
      >
        {content}
      </p>
    </TaskComponent>
  );
};

export { Task };
