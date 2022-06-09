import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Text from "../../atoms/Text";
import useDataFetcher from "../../hooks/useDataFetch";
import Story from "../../organism/Story";
import { getLinkPaths } from "../../utils/apis";
import styles from "./post.module.scss";

const Posts = (props) => {
  const param = useParams();
  const navigate = useNavigate();
  if (![...getLinkPaths].includes(param.type)) navigate("/");
  const { isLoading, stories } = useDataFetcher(param.type);
  console.log(param, props, isLoading, stories);
  return (
    <section>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {stories.map(({ data: story }, idx) => (
            <div className={styles.list}>
              <Text size="medium">{idx + 1}.</Text>
              <div className={styles.triangle} />
              <Story {...story} key={story.id} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Posts;
