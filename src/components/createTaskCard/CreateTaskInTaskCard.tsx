import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { child, getDatabase, push, ref } from "firebase/database";
import { Dispatch, RefObject, SetStateAction } from "react";
import { CreateTaskComponent, Icon } from "../createTask/styles";
import { props as TaskCardProps } from "../taskCard/interfaces";

interface props {
  open: boolean;
  createTaskInTaskCardRef: RefObject<HTMLParagraphElement>;
  setData: Dispatch<SetStateAction<any>>;
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
    const taskPost: any = push(child(ref(db), taskCardId)).key;
    setData((data: TaskCardProps) => {
      return {
        ...data,
        id: taskCardId,
        title: "Title",
        tasks: {
          ...data.tasks,
          [taskPost]: {
            content: createTaskInTaskCardRef.current?.textContent,
            id: taskPost,
            open: open,
          },
        },
      };
    });
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
      ></p>
    </CreateTaskComponent>
  );
};

export { CreateTaskInTaskCard };
