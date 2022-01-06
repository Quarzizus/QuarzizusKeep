import { child, getDatabase, push, ref } from "firebase/database";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { CreateTaskInTaskCard } from "./CreateTaskInTaskCard";
import { CreateTaskCardComponent } from "./styles";
import { props as TaskCardProps } from "../taskCard/interfaces";
import { CreateTaskCardFooter } from "./CreateTaskCardFooter";
import { CreateTaskCardHeader } from "./CreateTaskCardHeader";
import { CreateTaskCardContent } from "./CreateTaskCardContent";

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
          <CreateTaskCardHeader open={open} />
          <CreateTaskCardContent items={data} open={open} />
          <CreateTaskInTaskCard
            open={open}
            createTaskInTaskCardRef={createTaskInTaskCardRef}
            taskCardId={taskCardId}
            setData={setData}
          />
          <CreateTaskCardFooter
            handleOpen={handleOpen}
            data={data}
            taskCardId={taskCardId}
          />
        </>
      )}
    </CreateTaskCardComponent>
  );
};

export { CreateTaskCard };
