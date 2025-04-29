import axios from "axios";

const API_KEY = "933w2p6YPvCayn4QJvnBo5BNIvpVRn0Y24WRfUKOFhL1TIFKjc636jfd";

export const getPopularVideos = async () => {
  try {
    const res = await axios.get("https://api.pexels.com/videos/popular", {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getVideosBySearch = async (query) => {
  try {
    const res = await axios.get("https://api.pexels.com/videos/search", {
      headers: {
        Authorization: API_KEY,
      },

      params: {
        query: query,
        per_page: 10,
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
