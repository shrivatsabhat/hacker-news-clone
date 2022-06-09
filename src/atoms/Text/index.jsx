import styles from "./text.module.scss";

export default function Text(props) {
  const { children, type, size } = props;
  if (type == "h3") return <h3 className={styles.text}>{children}</h3>;
  if (size == "small") return <p className={styles.textSmall}>{children}</p>;
  if (size == "medium") return <p className={styles.textMedium}>{children}</p>;
  return <p className={styles.text}>{children}</p>;
}
