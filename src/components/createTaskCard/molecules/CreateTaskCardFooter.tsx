import { getDatabase, ref, update } from "firebase/database";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { CreateTaskCardContext } from "../context/CreateTaskCardContext";

interface props {
  taskCardId: string;
}

const CreateTaskCardFooter = ({ taskCardId }: props) => {
  const db = getDatabase();
  const { userId } = useContext(AppContext);

  const {
    state: { tasks, title },
    dispatch,
  } = useContext(CreateTaskCardContext);

  const handleSubmit = () => {
    const updates = {
      ["/" + userId + "/taskCards/" + taskCardId + "/id/"]: taskCardId,
      ["/" + userId + "/taskCards/" + taskCardId + "/title/"]: title,
      ["/" + userId + "/taskCards/" + taskCardId + "/tasks/"]: tasks,
    };
    update(ref(db), updates);

    dispatch({
      type: "HANDLE_OPEN",
    });
    dispatch({
      type: "PRINT_DATA",
    });
    dispatch({
      type: "RESTART_DATA",
    });
  };

  return (
    <footer>
      <button onClick={handleSubmit}>Cerrar</button>
    </footer>
  );
};

export { CreateTaskCardFooter };
