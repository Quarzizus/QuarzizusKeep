import { TaskCard } from "../taskCard";
import "./styles.css";
import { useState } from "react";
import { DroppableProvider } from "./DroppableProvider";
import { ContainerMasonry } from "./styles";

const ContainerTasks = (): JSX.Element => {
  const [items, setItems] = useState([
    "000",
    "1000",
    "2000",
    "30",
    "40",
    "5000",
    "600000",
    "7000",
    "800",
    "9",
    "10",
    "110",
  ]);

  const breakpointColumnsObj = {
    default: 4,
    1150: 3,
    930: 2,
    700: 1,
  };

  return (
    <DroppableProvider items={items} setItems={setItems}>
      <ContainerMasonry className="WW" breakpointCols={breakpointColumnsObj}>
        {items.map((numerito: string, i: number): JSX.Element => {
          return (
            <TaskCard
              key={numerito}
              id={numerito}
              title={`Title ${numerito}`}
            />
          );
        })}
      </ContainerMasonry>
    </DroppableProvider>
  );
};

export { ContainerTasks };
