import { Database, ref, set, child, get } from "firebase/database";

const createInitialData = (db: Database, data: any, userId: string) => {
  get(child(ref(db), userId)).then((snapshot) => {
    !snapshot.exists() && set(ref(db, userId), data);
  });
};

export { createInitialData };
