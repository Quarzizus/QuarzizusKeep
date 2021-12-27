import { TaskCard } from "../taskCard";
import "./styles.css";
import { useState } from "react";
import { DroppableProvider } from "./DroppableProvider";
import { ContainerMasonry } from "./styles";

const ContainerTasks = (): JSX.Element => {
  const [items, setItems] = useState(["0", "1", "2", "3"]);

  const breakpointColumnsObj = {
    default: 4,
    1150: 3,
    930: 2,
    700: 1,
  };

  return (
    <DroppableProvider items={items} setItems={setItems}>
      <ContainerMasonry className="WW" breakpointCols={breakpointColumnsObj}>
        {items.map((element: string, i: number): JSX.Element => {
          return (
            <TaskCard key={element} id={element} title={`Title ${element}`} />
          );
        })}
      </ContainerMasonry>
    </DroppableProvider>
  );
};

export { ContainerTasks };
