import { CheckBox } from "../checkbox";
import { TaskComponent } from "./styles";
import { Icon } from "./styles";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface props {
  text: string;
  open: boolean;
  id: string;
}

const Task = ({ text, open, id }: props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <TaskComponent
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
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
