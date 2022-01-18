import { CreateTaskComponent, Icon } from "./styles";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import React, { RefObject, useContext, useEffect } from "react";
import { child, getDatabase, push, ref } from "firebase/database";
import { TaskCardContext } from "../taskCard/context/TaskCardContext";

interface props {
  createTaskRef: RefObject<HTMLParagraphElement>;
  open: boolean;
  taskCardId: string | null;
}

const CreateTask = ({ createTaskRef, open, taskCardId }: props) => {
  const { dispatch } = useContext(TaskCardContext);
  const db = getDatabase();

  useEffect(() => {
    open && createTaskRef.current?.focus();
  }, [open]);

  const createNewTask = () => {
    if (!createTaskRef.current?.textContent?.length) return;

    const taskId: any = push(child(ref(db), taskCardId as string)).key;
    const taskData = {
      [taskId]: {
        content: createTaskRef.current?.textContent,
        id: taskId,
        checked: false,
      },
    };
    dispatch({
      type: "ADD_TASK",
      payload: taskData,
    });

    createTaskRef.current.textContent = "";
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLParagraphElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      createNewTask();
    }
  };

  return (
    <CreateTaskComponent>
      <button onClick={createNewTask}>
        <Icon icon={faPlusSquare} />
      </button>
      <p
        contentEditable={true}
        suppressContentEditableWarning={true}
        spellCheck={false}
        ref={createTaskRef}
        onKeyPress={handleKeyPress}
      ></p>
    </CreateTaskComponent>
  );
};

export { CreateTask };
