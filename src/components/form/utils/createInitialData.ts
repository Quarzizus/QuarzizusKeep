import { Database, ref, set } from "firebase/database";
import { props as TaskCardsProps } from "../../taskCard/interfaces";

interface initialData {
  userId: string;
  email: string;
  taskCards: TaskCardsProps[];
}

const createInitialData = (db: Database, data: initialData, userId: string) => {
  set(ref(db, userId), data);
};

export { createInitialData };
