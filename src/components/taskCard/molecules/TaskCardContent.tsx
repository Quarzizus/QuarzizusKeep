import { getDatabase } from "firebase/database";
import { useContext, useRef } from "react";
import { AppContext } from "../../../context/AppContext";
import { handleUpdate } from "../../../utils/handleUpdate";
import { CheckBox } from "../../checkbox";
import { CreateTask } from "../../createTask";
import { Task } from "../../task";
import { props as TaskProps } from "../../task/interfaces";

interface props {
  items: { [key: string]: TaskProps };
  open: boolean | null;
  taskCardId: string;
}

const TaskCardContent = ({ items, open, taskCardId }: props) => {
  const {
    state: { userId },
  } = useContext(AppContext);
  const db = getDatabase();
  const createTaskRef = useRef<HTMLParagraphElement>(null);
  return (
    <ul>
      {!Object.values(items).length && null}
      {Object.values(items).length > 0 &&
        Object.values(items).map(
          ({ id, content, checked }: TaskProps): JSX.Element => {
            const urlPostChecked =
              userId +
              "/taskCards/" +
              taskCardId +
              "/tasks/" +
              id +
              "/checked/";
            return (
              <Task
                key={id}
                id={id}
                content={content}
                open={open}
                taskCardId={taskCardId}
              >
                <CheckBox
                  isChecked={checked}
                  cb={(value: boolean | undefined) =>
                    handleUpdate({ db, data: value, url: urlPostChecked })
                  }
                />
              </Task>
            );
          }
        )}
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
