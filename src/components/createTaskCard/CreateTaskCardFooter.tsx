import { getDatabase } from "firebase/database";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { handleUpdate } from "../../utils/handleUpdate";
import { props as TaskCardProps } from "../taskCard/interfaces";

interface props {
  taskCardId: string;
  data: TaskCardProps;
  handleOpen: (value: boolean) => void;
}

const CreateTaskCardFooter = ({ taskCardId, data, handleOpen }: props) => {
  const db = getDatabase();
  const { userId } = useContext(AppContext);

  const handleSubmit = () => {
    const url = "/" + userId + "/taskCards/" + taskCardId;
    handleUpdate({ db, data, url });
    handleOpen(false);
  };

  return (
    <footer>
      <button onClick={handleSubmit}>Cerrar</button>
    </footer>
  );
};

export { CreateTaskCardFooter };
