import { TaskCardComponent, Icon } from "./styles";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TaskCard = ({ id, title }: { id: string; title: string }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <TaskCardComponent
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <h3

      // contentEditable="true"
      // suppressContentEditableWarning={true}
      // spellCheck="false"
      >
        {title}
      </h3>
      <Icon icon={faEye} />
    </TaskCardComponent>
  );
};

export { TaskCard };
