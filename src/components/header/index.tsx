import { HeaderComponent } from "./styles";
import Logo from "../../images/favicon.png";
import Menu from "../../images/menu.png";

const Header = (): JSX.Element => {
  const handleShowAside = () => {
    const aside = document.querySelector(".Aside");
    aside?.classList.toggle("Show_aside");
  };

  return (
    <HeaderComponent>
      <div className="Header_logo">
        <picture>
          <img src={Logo} alt="quarzizus keep" />
        </picture>
        <h1>Quarzizus Keep</h1>
      </div>
      <button onClick={handleShowAside}>
        <img src={Menu} alt="menu" />
      </button>
    </HeaderComponent>
  );
};

export { Header };
