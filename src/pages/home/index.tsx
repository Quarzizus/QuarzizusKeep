// import { Sidebar } from "../../components/sidebar";
import { Spinner } from "../../components/spinner";
import { ContainerTasks } from "../../components/containerTasks";
import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect, useState } from "react";
import { props as TaskCardProps } from "../../components/taskCard/interfaces";
import { user } from "../../db/index";
interface UserData {
  email: string;
  userId: string;
  taskCards: TaskCardProps[];
}

const Home = () => {
  const [userData, setUserData] = useState<UserData>(user);
  const [loading, setLoading] = useState(true);
  const db = getDatabase();
  const dbRef = ref(db);

  const getTaskCard = async () => {
    try {
      const res = await get(child(dbRef, "123456789"));
      const data = await res.val();
      setUserData(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getTaskCard();
  }, []);

  return (
    <>
      {/* <Sidebar /> */}
      {loading && <Spinner />}
      {userData.taskCards.length && !loading && (
        <ContainerTasks data={userData} loading={loading} />
      )}
    </>
  );
};

export default Home;
