import { child, getDatabase, push, ref, update } from "firebase/database";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Task } from "../task";
import { CreateTaskInTaskCard } from "./CreateTaskInTaskCard";
import { CreateTaskCardComponent } from "./styles";
import { props as TaskCardProps } from "../taskCard/interfaces";
import { props as TaskProps } from "../task/interfaces";

const CreateTaskCard = () => {
  const [open, setOpen] = useState(false);
  const { userId } = useContext(AppContext);
  const [data, setData] = useState({} as TaskCardProps);
  const createTaskInTaskCardRef = useRef<HTMLParagraphElement>(
    {} as HTMLParagraphElement
  );
  const db = getDatabase();
  const [taskCardId, setTaskCardId] = useState<any>(
    push(child(ref(db), userId)).key
  );

  const handleSubmit = () => {
    const updates = {
      ["/" + userId + "/taskCards/" + taskCardId]: data,
    };
    return update(ref(db), updates);
  };

  const handleOpen = (value: boolean) => {
    setOpen(value);
    setData({} as TaskCardProps);
    createTaskInTaskCardRef.current &&
      (createTaskInTaskCardRef.current.textContent = "");
  };

  useEffect(() => {
    open && createTaskInTaskCardRef.current?.focus();
    setTaskCardId(push(child(ref(db), userId)).key);
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
          {data.tasks &&
            Object.values(data.tasks).map(
              ({ id, content }: TaskProps): JSX.Element => {
                return <Task key={id} id={id} content={content} open={open} />;
              }
            )}
          <CreateTaskInTaskCard
            open={open}
            createTaskInTaskCardRef={createTaskInTaskCardRef}
            taskCardId={taskCardId}
            setData={setData}
          />
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
        </>
      )}
    </CreateTaskCardComponent>
  );
};

export { CreateTaskCard };
