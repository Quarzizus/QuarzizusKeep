import { CreateTaskComponent, Icon } from "./styles";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { RefObject, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { child, getDatabase, push, ref, update } from "firebase/database";

interface props {
  createTaskRef: RefObject<HTMLParagraphElement>;
  open: boolean;
  parentId: string;
}

const CreateTask = ({ createTaskRef, open, parentId }: props) => {
  const { userId, getTaskCard } = useContext(AppContext);
  const db = getDatabase();
  useEffect(() => {
    open && createTaskRef.current?.focus();
  }, [open]);

  const createNewTask = () => {
    const postKey = push(child(ref(db), "posts")).key;
    const postData = {
      id: postKey,
      content: createTaskRef.current?.textContent,
      checked: false,
    };
    const updates = {
      [userId + "/taskCards/" + parentId + "/tasks/" + postKey]: postData,
    };
    return update(ref(db), updates);
  };

  return (
    <CreateTaskComponent>
      <button
        onClick={() => {
          createNewTask();
          getTaskCard();
        }}
      >
        <Icon icon={faPlusSquare} />
      </button>
      <p
        contentEditable={true}
        suppressContentEditableWarning={true}
        spellCheck={false}
        ref={createTaskRef}
      >
        Aquí estoy
      </p>
    </CreateTaskComponent>
  );
};

export { CreateTask };
