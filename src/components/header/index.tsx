import { HeaderComponent } from "./styles";
import Logo from "../../images/favicon.png";

const Header = (): JSX.Element => {
  return (
    <HeaderComponent>
      <picture>
        <img src={Logo} alt="quarzizus keep" />
      </picture>
      <h1>Quarzizus Keep</h1>
    </HeaderComponent>
  );
};

export { Header };
