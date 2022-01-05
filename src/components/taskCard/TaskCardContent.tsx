import { useRef } from "react";
import { CreateTask } from "../createTask";
import { Task } from "../task";
import { props as TaskProps } from "../task/interfaces";

interface props {
  items: TaskProps[];
  open: boolean;
  parentId: string;
}

const TaskCardContent = ({ items, open, parentId }: props) => {
  const createTaskRef = useRef<HTMLParagraphElement>(null);

  return (
    <ul>
      {!items.length && <h2>Loading</h2>}
      {items.length &&
        items.map(({ id, content }: TaskProps): JSX.Element => {
          return <Task key={id} id={id} content={content} open={open} />;
        })}
      {open && (
        <CreateTask
          createTaskRef={createTaskRef}
          open={open}
          parentId={parentId}
        />
      )}
    </ul>
  );
};

export { TaskCardContent };
