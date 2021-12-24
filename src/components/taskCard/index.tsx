import { TaskCardComponent, Icon } from "./styles";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const TaskCard = () => {
  return (
    <TaskCardComponent>
      <h3
      // contentEditable="true"
      // suppressContentEditableWarning={true}
      // spellCheck="false"
      >
        Titulo
      </h3>
      <Icon icon={faEye} />
    </TaskCardComponent>
  );
};

export { TaskCard };
