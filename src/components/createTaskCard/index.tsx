import { child, getDatabase, push, ref } from "firebase/database";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { CreateTask } from "../createTask";
import { CreateTaskCardComponent } from "./styles";

const CreateTaskCard = () => {
  const [open, setOpen] = useState(false);
  const { userId } = useContext(AppContext);
  const createTaskRef = useRef<HTMLParagraphElement>(null);
  const db = getDatabase();
  const taskCardId = push(child(ref(db), userId)).key;

  const handleOpen = (value: boolean) => {
    setOpen(value);
  };

  useEffect(() => {
    open && createTaskRef.current?.focus();
  }, [open]);
  return (
    <CreateTaskCardComponent>
      {!open ? (
        <h2 onClick={() => handleOpen(true)}>Create one note...</h2>
      ) : (
        <>
          <header>
            <h2
              contentEditable={open}
              suppressContentEditableWarning={true}
              spellCheck={false}
              className="OpenH2"
            >
              Title
            </h2>
          </header>
          <CreateTask
            open={open}
            parentId={taskCardId}
            createTaskRef={createTaskRef}
          />
          <footer>
            <button onClick={() => handleOpen(false)}>Cerrar</button>
          </footer>
        </>
      )}
    </CreateTaskCardComponent>
  );
};

export { CreateTaskCard };
