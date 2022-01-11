import { Database, ref, update } from "firebase/database";

const updateTask = ({
  db,
  data,
  userId,
  taskCardId,
  id,
}: {
  db: Database;
  data: any;
  userId: string;
  taskCardId: string | undefined;
  id: string;
}) => {
  const updates = {
    [userId + "/taskCards/" + taskCardId + "/tasks/" + id]: data,
  };

  return update(ref(db), updates);
};

export { updateTask };
