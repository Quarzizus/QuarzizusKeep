import { Database, ref, update } from "firebase/database";

const updateTaskCard = ({
  db,
  data,
  userId,
  taskCardId,
}: {
  db: Database;
  data: any;
  userId: string;
  taskCardId: string | undefined;
}) => {
  const updates = {
    [userId + "/taskCards/" + taskCardId]: data,
  };
  return update(ref(db), updates);
};

export { updateTaskCard };
