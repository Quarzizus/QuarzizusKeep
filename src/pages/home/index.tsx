import { Sidebar } from "../../components/sidebar";
import { Spinner } from "../../components/spinner";
import { ContainerTasks } from "../../components/containerTasks";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { CreateTaskCard } from "../../components/createTaskCard";
import { HomePage } from "./styles";
import { TaskCard } from "../../components/taskCard";
import { CreateTaskCardContainer } from "../../containers/CreateTaskCardContainer";

const Home = () => {
  const { userId, loading, error, taskCards, getTaskCard } =
    useContext(AppContext);
  useEffect(() => {
    getTaskCard();
  }, []);
  return (
    <>
      <Sidebar />
      <HomePage>
        <CreateTaskCardContainer />
        {/* {error !== null && <h2>Error Mijo</h2>} */}
        {!userId && <h2>No hay userID</h2>}
        {loading && <Spinner />}
        {userId && !loading && <ContainerTasks />}
      </HomePage>
    </>
  );
};

export default Home;
