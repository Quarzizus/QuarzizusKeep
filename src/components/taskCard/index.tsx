import { TaskCardComponent, Icon, WrapperTask } from "./styles";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Task } from "../task";
import { useState } from "react";
import { DroppableProvider } from "../containerTasks/DroppableProvider";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

const TaskCard = ({ title, id }: { title: string; id: string }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(["1", "2", "3"]);
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

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const handleDragEnd = (e: any) => {
    const { active, over } = e;
    if (active.id !== over.id) {
      setItems((items: any[]) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
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
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis]}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <ul>
              {items.map((task: string, i: number): JSX.Element => {
                return (
                  <Task
                    key={task}
                    open={open}
                    id={task}
                    text={`Tarea por completar ${task}`}
                  />
                );
              })}
            </ul>
          </SortableContext>
        </DndContext>
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
