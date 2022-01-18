import { props as Task } from "../task/interfaces";

interface props {
  title: string;
  id: string;
  tasks: { [key: string]: Task };
  style?: any;
}

interface TaskCardDataProperties {
  title: string;
  taskCardId: string;
  tasks: { [key: string]: Task };
}

export type { props, TaskCardDataProperties };
