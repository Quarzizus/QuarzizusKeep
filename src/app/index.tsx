import { ContainerTasks } from "../components/containerTasks";
import { Sidebar } from "../components/sidebar";
import { TaskCard } from "../components/taskCard";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Sidebar />
      <ContainerTasks />
    </div>
  );
};

export { App };
