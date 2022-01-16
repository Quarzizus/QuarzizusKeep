import { CreateTaskCard } from "../../components/createTaskCard";
import { CreateTaskCardProvider } from "../../components/createTaskCard/context/CreateTaskCardContext";
import { CreateTaskCardContainerComponent } from "./styles";

const CreateTaskCardContainer = () => {
  return (
    <CreateTaskCardContainerComponent>
      <CreateTaskCardProvider>
        <CreateTaskCard />
      </CreateTaskCardProvider>
    </CreateTaskCardContainerComponent>
  );
};

export { CreateTaskCardContainer };
