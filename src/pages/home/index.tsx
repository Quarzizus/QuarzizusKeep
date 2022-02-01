import { Sidebar } from "../../components/sidebar";
import { Spinner } from "../../components/spinner";
import { ContainerTasks } from "../../containers/containerTasks";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { CardsContainer, HomePage } from "./styles";
import { CreateTaskCardContainer } from "../../containers/CreateTaskCardContainer";
import { Header } from "../../components/header";

const Home = () => {
  const {
    state: { userId, loading, error, taskCards },
    getTaskCard,
  } = useContext(AppContext);
  useEffect(() => {
    getTaskCard();
  }, []);
  return (
    <HomePage>
      <Header />
      <Sidebar />
      <CardsContainer>
        <CreateTaskCardContainer />
        {/* {error !== null && <h2>Error Mijo</h2>} */}
        {!userId && <h2>No hay userID</h2>}
        {userId && loading && <Spinner />}
        {userId && !loading && <ContainerTasks />}
      </CardsContainer>
    </HomePage>
  );
};

export default Home;
