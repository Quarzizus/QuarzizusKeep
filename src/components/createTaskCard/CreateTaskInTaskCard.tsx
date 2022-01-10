import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { child, getDatabase, push, ref } from "firebase/database";
import { Dispatch, RefObject, SetStateAction } from "react";
import { CreateTaskComponent, Icon } from "../createTask/styles";
import { props as TaskCardProps } from "../taskCard/interfaces";

interface props {
  open: boolean;
  createTaskInTaskCardRef: RefObject<HTMLParagraphElement>;
  setData: Dispatch<SetStateAction<TaskCardProps>>;
  taskCardId: any;
}

const CreateTaskInTaskCard = ({
  createTaskInTaskCardRef,
  taskCardId,
  setData,
  open,
}: props) => {
  const db = getDatabase();

  const handleClick = () => {
    if (!createTaskInTaskCardRef.current?.textContent?.length) return;
    const taskPost: any = push(child(ref(db), taskCardId)).key;
    const taskData = {
      content: createTaskInTaskCardRef.current?.textContent,
      id: taskPost,
      open: open,
    };
    setData((data: TaskCardProps) => {
      return {
        ...data,
        id: taskCardId,
        title: "Title",
        tasks: {
          ...data.tasks,
          [taskPost]: taskData,
        },
      };
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
