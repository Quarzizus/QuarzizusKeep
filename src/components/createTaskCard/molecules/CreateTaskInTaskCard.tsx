import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { child, getDatabase, push, ref } from "firebase/database";
import { Dispatch, RefObject, SetStateAction, useContext } from "react";
import { CreateTaskComponent, Icon } from "../../createTask/styles";
import { props as TaskCardProps } from "../../taskCard/interfaces";
import { CreateTaskCardContext } from "../context/CreateTaskCardContext";

interface props {
  createTaskInTaskCardRef: RefObject<HTMLParagraphElement>;
  taskCardId: string;
}

const CreateTaskInTaskCard = ({
  createTaskInTaskCardRef,
  taskCardId,
}: props) => {
  const db = getDatabase();
  const { dispatch } = useContext(CreateTaskCardContext);
  const handleClick = () => {
    if (!createTaskInTaskCardRef.current?.textContent?.length) return;
    const taskPost: any = push(child(ref(db), taskCardId)).key;
    const taskData = {
      [taskPost]: {
        content: createTaskInTaskCardRef.current?.textContent,
        id: taskPost,
        checked: false,
      },
    };
    dispatch({
      type: "ADD_TASK",
      payload: taskData,
    });
    createTaskInTaskCardRef.current.textContent = "";
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
        ref={createTaskInTaskCardRef}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleClick();
          }
        }}
      ></p>
    </CreateTaskComponent>
  );
};

export { CreateTaskInTaskCard };
