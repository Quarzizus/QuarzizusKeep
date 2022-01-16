import { useContext } from "react";
import { CheckBox } from "../../checkbox";
import { Task } from "../../task";
import { props as TaskProps } from "../../task/interfaces";
import { CreateTaskCardContext } from "../context/CreateTaskCardContext";

interface props {
  items: { [key: string]: TaskProps };
  open: boolean;
}

const CreateTaskCardContent = ({ items, open }: props) => {
  const { dispatch } = useContext(CreateTaskCardContext);
  return (
    <>
      {items &&
        Object.values(items).map(
          ({ id, content, checked }: TaskProps): JSX.Element => {
            return (
              <Task key={id} id={id} content={content} open={open}>
                <CheckBox
                  cb={(value: boolean | undefined) =>
                    dispatch({
                      type: "EDIT_CHECKBOX",
                      payload: value,
                      taskId: id,
                    })
                  }
                  isChecked={checked}
                />
              </Task>
            );
          }
        )}
    </>
  );
};

export { CreateTaskCardContent };
