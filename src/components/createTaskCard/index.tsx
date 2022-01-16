import { child, getDatabase, push, ref } from "firebase/database";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { CreateTaskInTaskCard } from "./molecules/CreateTaskInTaskCard";
import { CreateTaskCardComponent } from "./styles";
import { props as TaskCardProps } from "../taskCard/interfaces";
import { CreateTaskCardFooter } from "./molecules/CreateTaskCardFooter";
import { CreateTaskCardHeader } from "./molecules/CreateTaskCardHeader";
import { CreateTaskCardContent } from "./molecules/CreateTaskCardContent";
import { CreateTaskCardContext } from "./context/CreateTaskCardContext";

const CreateTaskCard = () => {
  const {
    state: { createTaskInTaskCardRef, open, taskCardId, tasks },
    dispatch,
  } = useContext(CreateTaskCardContext);
  // context
  // const [open, setOpen] = useState(false);
  // context
  const [title, setTitle] = useState("Title");
  // component
  // const { userId } = useContext(AppContext);
  // context
  // const [data, setData] = useState({} as TaskCardProps);
  // context
  // const createTaskInTaskCardRef = useRef<HTMLParagraphElement>(
  //   {} as HTMLParagraphElement
  // );
  // component
  const db = getDatabase();
  // context
  // const [taskCardId, setTaskCardId] = useState<any>(
  //   push(child(ref(db), userId)).key
  // );

  // const handleOpen = (value: boolean) => {
  //   // setOpen(value);
  //   setData({} as TaskCardProps);
  //   createTaskInTaskCardRef.current &&
  //     (createTaskInTaskCardRef.current.textContent = "");
  // };

  useEffect(() => {
    open && createTaskInTaskCardRef.current?.focus();
  }, [open]);

  return (
    <CreateTaskCardComponent>
      {!open ? (
        <h2
          onClick={() => {
            dispatch({
              type: "HANDLE_OPEN",
            });
          }}
        >
          Create one note...
        </h2>
      ) : (
        <>
          <CreateTaskCardHeader open={open} />
          <CreateTaskCardContent items={tasks} open={open} />
          <CreateTaskInTaskCard
            createTaskInTaskCardRef={createTaskInTaskCardRef}
            taskCardId={taskCardId as string}
          />
          <CreateTaskCardFooter taskCardId={taskCardId as string} />
        </>
      )}
    </CreateTaskCardComponent>
  );
};

export { CreateTaskCard };
