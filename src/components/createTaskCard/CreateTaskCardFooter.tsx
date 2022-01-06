import { getDatabase, ref, update } from "firebase/database";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
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
    const updates = {
      ["/" + userId + "/taskCards/" + taskCardId]: data,
    };
    return update(ref(db), updates);
  };

  return (
    <footer>
      <button
        onClick={() => {
          handleSubmit();
          handleOpen(false);
        }}
      >
        Cerrar
      </button>
    </footer>
  );
};

export { CreateTaskCardFooter };
