import { TaskCard } from "../taskCard";
import { Task } from "../task";
import { ContainerTasksComponent } from "./styles";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";

const ContainerTasks = (): JSX.Element => {
  const [items, setItems] = useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(e: any) {
    const { active, over } = e;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <ContainerTasksComponent>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((numerito: string): JSX.Element => {
            return <TaskCard key={numerito} id={numerito} title={numerito} />;
          })}
        </SortableContext>
      </ContainerTasksComponent>
    </DndContext>
  );
};

export { ContainerTasks };
