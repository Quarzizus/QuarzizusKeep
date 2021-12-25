import { CheckBox } from "../checkbox";
import { TaskComponent } from "./styles";

const Task = ({ text }: { text: string }) => {
  return (
    <TaskComponent
    // contentEditable="true"
    // suppressContentEditableWarning={true}
    // spellCheck="false"
    >
      {/* <CheckBox /> */}
      {text}
    </TaskComponent>
  );
};

export { Task };
