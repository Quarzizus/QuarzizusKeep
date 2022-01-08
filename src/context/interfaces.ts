import { props as TaskCardProps } from "../components/taskCard/interfaces";

interface UserData {
  email: string;
  userId: string;
  taskCards: { [key: string]: TaskCardProps };
}

type TaskCardPropsExtend = TaskCardProps | TaskCardProps[] | unknown[];

export type { TaskCardPropsExtend, UserData };
