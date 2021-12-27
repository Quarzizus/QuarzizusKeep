import { TaskCard } from "../taskCard";
import "./styles.css";
import { useState } from "react";
import { DroppableProvider } from "./DroppableProvider";
import { ContainerMasonry } from "./styles";
import { user } from "../../db";

const ContainerTasks = (): JSX.Element => {
  const [items, setItems] = useState(user.taskCards);

  const breakpointColumnsObj = {
    default: 4,
    1150: 3,
    930: 2,
    700: 1,
  };

  return (
    <DroppableProvider items={items} setItems={setItems}>
      <ContainerMasonry className="WW" breakpointCols={breakpointColumnsObj}>
        {items.map(
          ({
            id,
            tasks,
            title,
          }: {
            id: string;
            tasks: any;
            title: string;
          }): JSX.Element => {
            return <TaskCard key={id} id={id} title={title} tasks={tasks} />;
          }
        )}
      </ContainerMasonry>
    </DroppableProvider>
  );
};

export { ContainerTasks };
