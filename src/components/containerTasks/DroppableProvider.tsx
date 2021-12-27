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
import { SetStateAction } from "react";

interface props {
  children?: JSX.Element | JSX.Element[];
  items: any;
  setItems: React.Dispatch<SetStateAction<any>>;
  modifiers?: Modifiers;
}

const DroppableProvider = ({ children, items, setItems, modifiers }: props) => {
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
        const oldIndex = items[active.id].id;
        const newIndex = items[over.id].id;
        return arrayMove(items, oldIndex, newIndex);
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
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
};

export { DroppableProvider };
