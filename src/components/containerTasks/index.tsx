import { TaskCard } from "../taskCard";
import { Task } from "../task";
import { ContainerTasksComponent } from "./styles";

const ContainerTasks = (): JSX.Element => {
  return (
    <ContainerTasksComponent>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </ContainerTasksComponent>
  );
};

export { ContainerTasks };
