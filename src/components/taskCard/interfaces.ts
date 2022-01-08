import { props as Task } from "../task/interfaces";

interface props {
  title: string;
  id: string;
  tasks: { [key: string]: Task };
}

export type { props };
