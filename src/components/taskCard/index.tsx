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
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
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

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (e: any) => {
    const { active, over } = e;
    if (active.id !== over.id) {
      if (!over) return;
      if (active.id === over.id) return;

      setItems((items: any[]) => {
        const oldIndex = items[active.id].id;
        const newIndex = items[over.id].id;
        console.log(oldIndex, newIndex);
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
          <SortableContext items={items}>
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
