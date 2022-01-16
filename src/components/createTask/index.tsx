import { CreateTaskComponent, Icon } from "./styles";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import React, { RefObject, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { child, getDatabase, push, ref, update } from "firebase/database";

interface props {
  createTaskRef: RefObject<HTMLParagraphElement>;
  open: boolean;
  taskCardId: string | null;
}

const CreateTask = ({ createTaskRef, open, taskCardId }: props) => {
  const { userId, getTaskCard } = useContext(AppContext);
  const db = getDatabase();

  useEffect(() => {
    open && createTaskRef.current?.focus();
  }, [open]);

  const createNewTask = () => {
    if (!createTaskRef.current?.textContent?.length) return;

    const taskId = push(child(ref(db), "posts")).key;
    const postData = {
      id: taskId,
      content: createTaskRef.current?.textContent,
      checked: false,
    };
    const updates = {
      [userId + "/taskCards/" + taskCardId + "/tasks/" + taskId]: postData,
    };
    createTaskRef.current.textContent = "";
    // return update(ref(db), updates);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLParagraphElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      createNewTask();
      getTaskCard();
    }
  };

  const handleClick = () => {
    createNewTask();
    getTaskCard();
  };

  return (
    <CreateTaskComponent>
      <button onClick={handleClick}>
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
