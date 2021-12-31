import { TaskCard } from "../taskCard";
import "./styles.css";
import { useState } from "react";
import { DroppableProvider } from "./DroppableProvider";
import { ContainerMasonry } from "./styles";
import { props as TaskCardProps } from "../taskCard/interfaces";

interface props {
  email: string;
  userId: string;
  taskCards: TaskCardProps[];
}

const ContainerTasks = ({ data }: { data: props }): JSX.Element => {
  const [items, setItems] = useState(data);

  const breakpointColumnsObj = {
    default: 4,
    1150: 3,
    930: 2,
    700: 1,
  };
  return (
    <>
      <DroppableProvider items={items.taskCards} setItems={setItems}>
        <ContainerMasonry className="WW" breakpointCols={breakpointColumnsObj}>
          {items.taskCards.map(
            ({ id, tasks, title }: TaskCardProps): JSX.Element => {
              return <TaskCard key={id} id={id} title={title} tasks={tasks} />;
            }
          )}
        </ContainerMasonry>
      </DroppableProvider>
    </>
  );
};

export { ContainerTasks };
