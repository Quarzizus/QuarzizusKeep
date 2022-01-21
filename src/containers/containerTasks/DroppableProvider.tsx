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

const DroppableProvider = ({ children, items, modifiers, setItems }: props) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const searchIndex = (id: string) => {
    const object = items.filter((item: any) => item.id === id);
    return items.indexOf(object[0]);
  };
  const handleDragEnd = (e: any) => {
    const { active, over } = e;
    if (active.id !== over.id) {
      const newIndex = searchIndex(active.id);
      const oldIndex = searchIndex(over.id);
      const newArray = arrayMove(items, newIndex, oldIndex);
      console.log(newArray);
      setItems(newArray);
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
