import styles from "./navigation.module.scss";
import { NavLink } from "react-router-dom";
import Text from "../../atoms/Text";
import { LINKS } from "../../utils/constants";

const Navigation = (props) => {
  const { seperator = "|" } = props;
  return (
    <nav>
      <ul>
        {LINKS.map((link, idx) => (
          <li key={idx} data-seperator={seperator}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Text>login</Text>
    </nav>
  );
};

export default Navigation;
