import { TaskCard } from "../taskCard";
import { Task } from "../task";
import "./styles.css";
import Masonry from "react-masonry-css";

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
    "10",
    "11",
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

  const breakpointColumnsObj = {
    default: 4,
    1150: 3,
    930: 2,
    700: 1,
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <Masonry className="Masonry" breakpointCols={breakpointColumnsObj}>
          {items.map((numerito: string): JSX.Element => {
            return (
              <TaskCard
                key={numerito}
                id={numerito}
                title={`Title ${numerito}`}
              />
            );
          })}
        </Masonry>
      </SortableContext>
    </DndContext>
  );
};

export { ContainerTasks };
