import { Task } from "../task";
import { props as TaskProps } from "../task/interfaces";
import { props as TaskCardProps } from "../taskCard/interfaces";

interface props {
  items: TaskCardProps;
  open: boolean;
}

const CreateTaskCardContent = ({ items, open }: props) => {
  return (
    <>
      {items.tasks &&
        Object.values(items.tasks).map(
          ({ id, content }: TaskProps): JSX.Element => {
            return <Task key={id} id={id} content={content} open={open} />;
          }
        )}
    </>
  );
};

export { CreateTaskCardContent };
