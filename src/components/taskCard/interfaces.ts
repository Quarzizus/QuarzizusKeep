import { props as Task } from "../task/interfaces";

interface props {
  title: string;
  id: string;
  tasks: { [key: string]: Task };
  style?: any;
}

export type { props };
