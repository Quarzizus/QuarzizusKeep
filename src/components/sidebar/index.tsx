import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Aside } from "./styles";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const {
    state: { userId },
  } = useContext(AppContext);
  const auth = getAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <Aside>
      <button onClick={handleLogout}>Log out</button>
      <h2>{userId}</h2>
    </Aside>
  );
};

export { Sidebar };
