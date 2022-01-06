import { props as TaskCardProps } from "../components/taskCard/interfaces";

interface UserData {
  email: string;
  userId: string;
  taskCards: TaskCardProps;
}

export type { UserData };
