import { TaskCard } from "../taskCard";
import "./styles.css";
import { useContext } from "react";
import { DroppableProvider } from "./DroppableProvider";
import { ContainerMasonry } from "./styles";
import { props as TaskCardProps } from "../taskCard/interfaces";
import { AppContext } from "../../context/AppContext";

const ContainerTasks = (): JSX.Element => {
  const { userData, setUserData } = useContext(AppContext);
  const breakpointColumnsObj = {
    default: 4,
    1150: 3,
    930: 2,
    700: 1,
  };
  return (
    <>
      <DroppableProvider items={userData.taskCards} setItems={setUserData}>
        <ContainerMasonry className="WW" breakpointCols={breakpointColumnsObj}>
          {userData.taskCards.map(
            ({ id, tasks, title }: TaskCardProps): JSX.Element => {
              return (
                <TaskCard
                  key={id}
                  id={id}
                  title={title}
                  tasks={Object.values(tasks)}
                />
              );
            }
          )}
        </ContainerMasonry>
      </DroppableProvider>
    </>
  );
};

export { ContainerTasks };
