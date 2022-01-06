import { TaskCard } from "../taskCard";
import "./styles.css";
import { useContext } from "react";
import { DroppableProvider } from "./DroppableProvider";
import { ContainerMasonry } from "./styles";
import { props as TaskCardProps } from "../taskCard/interfaces";
import { AppContext } from "../../context/AppContext";

const ContainerTasks = (): JSX.Element => {
  const { taskCards, setTaskCards } = useContext(AppContext);
  const breakpointColumnsObj = {
    default: 4,
    1150: 3,
    930: 2,
    700: 1,
  };
  return (
    <>
      <DroppableProvider items={taskCards} setItems={setTaskCards}>
        <ContainerMasonry className="WW" breakpointCols={breakpointColumnsObj}>
          {taskCards.map(({ id, tasks, title }: TaskCardProps) => {
            return <TaskCard key={id} id={id} title={title} tasks={tasks} />;
          })}
        </ContainerMasonry>
      </DroppableProvider>
    </>
  );
};

export { ContainerTasks };
