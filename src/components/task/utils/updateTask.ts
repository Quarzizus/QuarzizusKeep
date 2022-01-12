import { Database, ref, update } from "firebase/database";

const updateTask = ({
  db,
  data,
  url,
}: {
  db: Database;
  data: any;
  url: string;
}) => {
  const updates = {
    [url]: data,
  };
  return update(ref(db), updates);
};

export { updateTask };
