import { useEffect, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { CSS } from "@dnd-kit/utilities";
import { DroppableProvider } from "../containerTasks/DroppableProvider";
import { props } from "./interfaces";
import { TaskCardFooter } from "./TaskCardFooter";
import { TaskCardHeader } from "./TaskCardHeader";
import { TaskCardContent } from "./TaskCardContent";
import { TaskCardComponent } from "./styles";
import { props as TaskProps } from "../task/interfaces";
import { WrapperTaskCard } from "../wrapperTaskCard";

const TaskCard = ({ title, id, tasks }: props) => {
  const [open, setOpen] = useState<null | boolean>(null);
  const [items, setItems] = useState<TaskProps[]>(Object.values(tasks));
  const { transform, transition, setNodeRef, attributes, listeners } =
    useSortable({
      id: id,
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const handleClick = (value: boolean) => {
    setOpen(value);
  };

  useEffect(() => {
    setItems(() => Object.values(tasks));
  }, [tasks]);

  return (
    <WrapperTaskCard open={open} setNodeRef={setNodeRef} style={style}>
      <TaskCardComponent
        onDoubleClick={() => {
          !open && handleClick(true);
        }}
        open={open}
      >
        <TaskCardHeader
          taskCardId={id}
          attributes={{ ...attributes }}
          listeners={{ ...listeners }}
          open={open}
          title={title}
          tasks={items}
        />
        <DroppableProvider
          items={items}
          modifiers={[restrictToVerticalAxis]}
          setItems={setItems}
        >
          {items && (
            <TaskCardContent items={items} open={open} taskCardId={id} />
          )}
        </DroppableProvider>
        {open && <TaskCardFooter handleClick={handleClick} />}
      </TaskCardComponent>
    </WrapperTaskCard>
  );
};

export { TaskCard };
