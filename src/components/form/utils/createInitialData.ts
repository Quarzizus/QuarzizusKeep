import { Database, ref, set, child, get } from "firebase/database";
import { UserData } from "../../../context/interfaces";

const createInitialData = (db: Database, data: UserData, userId: string) => {
  get(child(ref(db), userId)).then((snapshot) => {
    !snapshot.exists() && set(ref(db, userId), data);
  });
};

export { createInitialData };
