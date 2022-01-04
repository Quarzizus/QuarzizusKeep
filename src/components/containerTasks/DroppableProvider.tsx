import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  Modifiers,
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
import { SetStateAction, useState } from "react";

interface props {
  children?: JSX.Element | JSX.Element[];
  items: any;
  // setItems: React.Dispatch<SetStateAction<any>>;
  modifiers?: Modifiers;
}

const DroppableProvider = ({ children, items, modifiers }: props) => {
  const [itemsD, setItemsD] = useState(items);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const handleDragEnd = (e: any) => {
    const { active, over } = e;
    if (active.id !== over.id) {
      console.log(itemsD);
      setItemsD((itemsD: any[]) => {
        const oldIndex = itemsD[active.id].id;
        const newIndex = itemsD[over.id].id;
        return arrayMove(itemsD, oldIndex, newIndex);
      });
    }
  };
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={modifiers}
    >
      <SortableContext items={itemsD} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
};

export { DroppableProvider };
