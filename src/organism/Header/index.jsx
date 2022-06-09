import Brand from "../../atoms/Brand";
import Navigation from "../Navigation";
import styles from "./header.module.scss";

const Header = (props) => {
  return (
    <header>
      <Brand />
      <Navigation />
    </header>
  );
};

export default Header;
