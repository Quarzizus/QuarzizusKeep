import { TaskCardComponent, Icon } from "./styles";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Task } from "../task";

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
      onClick={() => console.log("holi")}
    >
      <header>
        <h3
        // contentEditable="true"
        // suppressContentEditableWarning={true}
        // spellCheck="false"
        >
          {title}
        </h3>
        <Icon icon={faExpandArrowsAlt} {...attributes} {...listeners} />
      </header>
      <ul>
        {Array.from({ length: Number(id) }, (_task) => {
          return <Task text="Tarea por completar" />;
        })}
      </ul>
    </TaskCardComponent>
  );
};

export { TaskCard };
