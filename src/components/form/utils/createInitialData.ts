import { Database, ref, set, child, get } from "firebase/database";
import { props as TaskCardsProps } from "../../taskCard/interfaces";

interface initialData {
  userId: string;
  email: string;
  taskCards: TaskCardsProps[];
}

const createInitialData = (db: Database, data: initialData, userId: string) => {
  get(child(ref(db), userId)).then((snapshot) => {
    !snapshot.exists() && set(ref(db, userId), data);
  });
};

export { createInitialData };
