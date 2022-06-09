import styles from "./story.module.scss";
import Text from "../../atoms/Text";
import { getDomainFromUrl, getTimeFormated } from "../../utils/apis";
import Link from "../../molecules/Link";

const Story = (props) => {
  const { by = "", score = "", time = 0, title = "", url = "" } = props;
  return (
    <div className={styles.story}>
      <div className={styles.title}>
        <Link href={url} target="_blank" rel="noreferrer">
          {title}
        </Link>
        <Link size="small" href={url} target="_blank" rel="noreferrer">
          {getDomainFromUrl(url)}
        </Link>
      </div>
      <div className={styles.meta}>
        <Text size="small">
          {score} point by {by} {getTimeFormated(time)}
        </Text>
      </div>
    </div>
  );
};

export default Story;
