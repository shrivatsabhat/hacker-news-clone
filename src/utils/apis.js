import axios from "axios";
import { BASE_API_URL, LINKS } from "./constants";

export const getStorisOfType = async (type) =>
  await axios.get(`${BASE_API_URL}/${type}stories.json`);

export const getRange = async (stories, start = 0, end) =>
  stories.slice(start, end || stories.length);

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
    return { stories, storyIds };
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

export const getUnixTimeDiffrence = (unixTime) => {
  let currentUnixTime = new Date().getTime() / 1000;

  // get second difference between current time and time of story
  const timeDifference = currentUnixTime - unixTime;
  const timeInMinutes = timeDifference / 60;
  const timeInHours = timeInMinutes / 60;
  const timeInDays = timeInHours / 24;
  const timeInWeeks = timeInDays / 7;
  const timeInMonths = timeInWeeks / 4;
  const timeInYears = timeInMonths / 12;

  if (timeInYears > 1) {
    return `${Math.floor(timeInYears)} years ago`;
  } else if (timeInMonths > 1) {
    return `${Math.floor(timeInMonths)} months ago`;
  } else if (timeInWeeks > 1) {
    return `${Math.floor(timeInWeeks)} weeks ago`;
  } else if (timeInDays > 1) {
    return `${Math.floor(timeInDays)} days ago`;
  } else if (timeInHours > 1) {
    return `${Math.floor(timeInHours)} hours ago`;
  } else if (timeInMinutes > 1) {
    return `${Math.floor(timeInMinutes)} minutes ago`;
  } else {
    return `${Math.floor(timeDifference)} seconds ago`;
  }
};
