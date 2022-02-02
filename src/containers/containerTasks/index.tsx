import { TaskCard } from "../../components/taskCard";
import { useContext, useEffect, useState } from "react";
import { DroppableProvider } from "./DroppableProvider";
import { ContainerMasonry } from "./styles";
import { props as TaskCardProps } from "../../components/taskCard/interfaces";
import { AppContext } from "../../context/AppContext";
import { TaskCardProvider } from "../../components/taskCard/context/TaskCardContext";

const ContainerTasks = (): JSX.Element => {
  const {
    state: { taskCards },
  } = useContext(AppContext);
  const breakpointColumnsObj = {
    default: 4,
    1150: 3,
    930: 2,
    700: 1,
  };
  const [items, setItems] = useState(() => Object.values(taskCards));
  useEffect(() => {
    setItems(Object.values(taskCards));
  }, [taskCards]);
  return (
    <>
      <DroppableProvider items={items} setItems={setItems}>
        <ContainerMasonry className="WW" breakpointCols={breakpointColumnsObj}>
          {items.map(({ id, tasks, title }: TaskCardProps) => {
            return (
              <TaskCardProvider
                key={id}
                taskCardId={id}
                title={title}
                tasks={tasks}
              >
                <TaskCard />
              </TaskCardProvider>
            );
          })}
        </ContainerMasonry>
      </DroppableProvider>
    </>
  );
};

export { ContainerTasks };
