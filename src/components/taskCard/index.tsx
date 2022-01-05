import { TaskCardComponent, Icon, WrapperTask } from "./styles";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Task } from "../task";
import { useContext, useEffect, useRef, useState } from "react";
import { DroppableProvider } from "../containerTasks/DroppableProvider";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { props } from "./interfaces";
import { props as TaskProps } from "../task/interfaces";
import { CreateTask } from "../createTask";
import { AppContext } from "../../context/AppContext";

const TaskCard = ({ title, id, tasks }: props) => {
  const { userData } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([] as TaskProps[]);
  const createTaskRef = useRef<HTMLParagraphElement>(null);
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

  useEffect(() => {
    setItems(tasks);
  }, [userData]);

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
          modifiers={[restrictToVerticalAxis]}
          setItems={setItems}
        >
          <ul>
            {!items.length && <h2>Loading</h2>}
            {items.length &&
              items.map(({ id, content }: TaskProps): JSX.Element => {
                return <Task key={id} id={id} content={content} open={open} />;
              })}
            {open && (
              <CreateTask
                createTaskRef={createTaskRef}
                open={open}
                parentId={id}
              />
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
