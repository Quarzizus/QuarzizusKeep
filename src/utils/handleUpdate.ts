import { Database, ref, update } from "firebase/database";

const handleUpdate = ({
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
  // return update(ref(db), updates);
};

export { handleUpdate };
