import { ContainerTasks } from "../components/containerTasks";
import { Sidebar } from "../components/sidebar";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Sidebar />
      <ContainerTasks />
    </div>
  );
};

export { App };
