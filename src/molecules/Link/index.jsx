import styles from "./link.module.scss";
import Text from "../../atoms/Text";

export default function Link(props) {
  const { children, type, href, target, rel, size } = props;
  return (
    <a
      href={href}
      className={styles.link}
      target={target}
      rel={rel}
      data-type={size}
    >
      <Text type={type} size={size}>
        {children}
      </Text>
    </a>
  );
}
