import { TaskCardComponent, Icon, WrapperTask } from "./styles";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Task } from "../task";
import { MouseEventHandler, useState } from "react";

const TaskCard = ({ id, title }: { id: string; title: string }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
    });
  const [open, setOpen] = useState(false);

  const handlerClick = (value: boolean) => {
    setOpen(value);
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <WrapperTask open={open}>
      <TaskCardComponent
        style={style}
        ref={setNodeRef}
        onDoubleClick={() => {
          !open && handlerClick(true);
        }}
        open={open}
      >
        <header>
          <h3
            contentEditable={open}
            suppressContentEditableWarning={true}
            spellCheck={false}
          >
            {title}
          </h3>

          {!open && (
            <Icon icon={faExpandArrowsAlt} {...attributes} {...listeners} />
          )}
        </header>
        <ul>
          {Array.from({ length: Number(id) }, (_task) => {
            return <Task open={open} text="Tarea por completar" />;
          })}
        </ul>
        {open && (
          <footer>
            <button
              type="button"
              onClick={() => {
                handlerClick(false);
              }}
            >
              Cerrar
            </button>
          </footer>
        )}
      </TaskCardComponent>
    </WrapperTask>
  );
};

export { TaskCard };
