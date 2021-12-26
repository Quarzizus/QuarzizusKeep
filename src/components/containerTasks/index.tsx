import { TaskCard } from "../taskCard";
import { Task } from "../task";
import "./styles.css";
import Masonry from "react-masonry-css";
import { useState } from "react";
import { DroppableProvider } from "./DroppableProvider";

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

  const breakpointColumnsObj = {
    default: 4,
    1150: 3,
    930: 2,
    700: 1,
  };

  return (
    <DroppableProvider items={items} setItems={setItems}>
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
    </DroppableProvider>
  );
};

export { ContainerTasks };
