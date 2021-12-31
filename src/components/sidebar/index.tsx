import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Aside } from "./styles";

const Sidebar = () => {
  const { userId } = useContext(AppContext);
  return (
    <Aside>
      <h2>{userId}</h2>
    </Aside>
  );
};

export { Sidebar };
