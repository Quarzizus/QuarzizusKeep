import { ref, set, child, get, getDatabase } from "firebase/database";
import { UserData } from "../../../context/interfaces";
import { app } from "../../../firebase/config";

const createInitialData = (data: UserData, userId: string) => {
  const db = getDatabase(app);

  get(child(ref(db), userId)).then((snapshot) => {
    !snapshot.exists() && set(ref(db, userId), data);
  });
};

export { createInitialData };
