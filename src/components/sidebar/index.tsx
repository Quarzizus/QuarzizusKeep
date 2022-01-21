import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Aside } from "./styles";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const {
    state: { userId, email },
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
      <h3>{email}</h3>
    </Aside>
  );
};

export { Sidebar };
