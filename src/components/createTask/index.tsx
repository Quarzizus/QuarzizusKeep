import { CreateTaskComponent, Icon } from "./styles";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { RefObject, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { child, getDatabase, push, ref, update } from "firebase/database";

interface props {
  createTaskRef: RefObject<HTMLParagraphElement>;
  open: boolean;
  parentId: string | null;
}

const CreateTask = ({ createTaskRef, open, parentId }: props) => {
  const { userId, getTaskCard } = useContext(AppContext);
  const db = getDatabase();
  useEffect(() => {
    open && createTaskRef.current?.focus();
  }, [open]);

  const createNewTask = () => {
    if (!createTaskRef.current?.textContent?.length) return;

    const postKey = push(child(ref(db), "posts")).key;
    const postData = {
      id: postKey,
      content: createTaskRef.current?.textContent,
      checked: false,
    };
    const updates = {
      [userId + "/taskCards/" + parentId + "/tasks/" + postKey]: postData,
    };
    createTaskRef.current.textContent = "";
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
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            createNewTask();
            getTaskCard();
          }
        }}
      ></p>
    </CreateTaskComponent>
  );
};

export { CreateTask };
