import { Task } from "../../task";
import { props as TaskProps } from "../../task/interfaces";

interface props {
  items: { [key: string]: TaskProps };
  open: boolean;
}

const CreateTaskCardContent = ({ items, open }: props) => {
  return (
    <>
      {items &&
        Object.values(items).map(
          ({ id, content, checked }: TaskProps): JSX.Element => {
            return (
              <Task
                key={id}
                id={id}
                content={content}
                open={open}
                checked={checked}
              />
            );
          }
        )}
    </>
  );
};

export { CreateTaskCardContent };
