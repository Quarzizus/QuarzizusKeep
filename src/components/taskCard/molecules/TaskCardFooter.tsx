import { getDatabase, ref, update } from "firebase/database";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { TaskCardContext } from "../context/TaskCardContext";

const TaskCardFooter = () => {
  const db = getDatabase();
  const {
    state: { userId },
  } = useContext(AppContext);

  const {
    state: { taskCardId, title, tasks },
    dispatch,
  } = useContext(TaskCardContext);

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

  };

  return (
    <footer>
      <button type="button" onClick={handleSubmit}>
        Cerrar
      </button>
    </footer>
  );
};

export { TaskCardFooter };
