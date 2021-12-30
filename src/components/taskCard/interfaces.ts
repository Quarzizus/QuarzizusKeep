import { props as Task } from "../task/interfaces";

interface props {
  title: string;
  id: string;
  tasks: Task[];
}

export type { props };
