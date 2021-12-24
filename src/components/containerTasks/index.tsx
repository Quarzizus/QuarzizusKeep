import { TaskCard } from "../taskCard";
import { GridTasks } from "./styles";

const ContainerTasks = (): JSX.Element => {
  return (
    <GridTasks>
      <TaskCard />
    </GridTasks>
  );
};

export { ContainerTasks };
