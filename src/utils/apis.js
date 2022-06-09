import axios from "axios";
import { BASE_API_URL, LINKS } from "./constants";

export const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
    return stories;
  } catch (error) {
    console.log("Error while getting list of stories.");
  }
};

export const getLinkPaths = LINKS.map((link) => link.path.split("/")[1]);

export const getDomainFromUrl = (url) => {
  if (!url) return;
  try {
    const domain = url.split("//")[1].split("/")[0];
    return `(${domain})`;
  } catch (error) {
    console.log("Error while getting domain from url.");
  }
  return `(${url})`;
};

export const getTimeFormated = (time) => {
  const timeDifference = new Date().getHours() - new Date(time).getHours();
  const getStoryTime =
    timeDifference < 1
      ? Math.abs(new Date().getMinutes() - new Date(time).getMinutes()) +
        " minutes ago"
      : Math.abs(timeDifference) + " hours ago";
  return getStoryTime;
};
