import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Aside, ProfileCard } from "./styles";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import PerfilDefault from "../../images/perfildefault.png";

const Sidebar = () => {
  const {
    state: { email },
  } = useContext(AppContext);
  const auth = getAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth);
    localStorage.clear();
    navigate("/");
  };
  const handleShowAside = () => {
    const aside = document.querySelector(".Aside");
    aside?.classList.toggle("Show_aside");
  };

  return (
    <Aside className="Aside">
      <header>
        <button className="Close" onClick={handleShowAside}>
          X
        </button>
      </header>
      <ProfileCard>
        <picture>
          <img src={PerfilDefault} alt="" />
        </picture>
        <h2>{email}</h2>
        <button onClick={handleLogout}>Log out</button>
      </ProfileCard>
    </Aside>
  );
};

export { Sidebar };
