import { useRef } from "react";
import { CreateTask } from "../createTask";
import { Task } from "../task";
import { props as TaskProps } from "../task/interfaces";

interface props {
  items: TaskProps[];
  open: boolean | null;
  taskCardId: string;
}

const TaskCardContent = ({ items, open, taskCardId }: props) => {
  const createTaskRef = useRef<HTMLParagraphElement>(null);
  return (
    <ul>
      {!items.length && null}
      {items.length > 0 &&
        items.map(({ id, content, checked }: TaskProps): JSX.Element => {
          return (
            <Task
              key={id}
              id={id}
              content={content}
              open={open}
              taskCardId={taskCardId}
              checked={checked}
            />
          );
        })}
      {open && (
        <CreateTask
          createTaskRef={createTaskRef}
          open={open}
          taskCardId={taskCardId}
        />
      )}
    </ul>
  );
};

export { TaskCardContent };
