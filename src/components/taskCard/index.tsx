import { TaskCardComponent, Icon, WrapperTask } from "./styles";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Task } from "../task";
import { useState } from "react";
import { DroppableProvider } from "../containerTasks/DroppableProvider";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
const TaskCard = ({
  title,
  id,
  tasks,
}: {
  title: string;
  id: string;
  tasks: any;
}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(tasks);
  const { transform, transition, setNodeRef, attributes, listeners } =
    useSortable({
      id: id,
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const handlerClick = (value: boolean) => {
    setOpen(value);
  };

  return (
    <WrapperTask open={open} ref={setNodeRef} style={style}>
      <TaskCardComponent
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
            <Icon icon={faExpandArrowsAlt} {...listeners} {...attributes} />
          )}
        </header>
        <DroppableProvider
          items={items}
          setItems={setItems}
          modifiers={[restrictToVerticalAxis]}
        >
          <ul>
            {items.map(
              ({
                id,
                content,
              }: {
                id: string;
                content: string;
              }): JSX.Element => {
                return <Task key={id} id={id} text={content} open={open} />;
              }
            )}
          </ul>
        </DroppableProvider>
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
