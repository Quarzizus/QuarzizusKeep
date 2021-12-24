import { Task } from "../task";
import { TaskCardComponent } from "./styles";

const TaskCard = () => {
  return (
    <TaskCardComponent>
      <h3
        contentEditable="true"
        suppressContentEditableWarning={true}
        spellCheck="false"
      >
        Titulo
      </h3>
      <ul>
        <Task text="Tarea 1" />
        <Task text="Tarea 2" />
        <Task text="Tarea 3" />
        <Task text="Tarea 4" />
        <Task text="Tarea 5" />
      </ul>
    </TaskCardComponent>
  );
};

export { TaskCard };
