import axios from "axios";
import customAxios from "./customAxios";

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

export const getHistoryVideos = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/videos/all-videos", {
      withCredentials: true,
    });

    const data = res.data;
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

export const getCurrUser = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/user/get-user", {
      withCredentials: true,
    });

    const data = res.data;
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

export const like = async (id) => {
  try {
    const res = await customAxios.post(`/videos/like-video/${id}`);

    const data = res.data;
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

export const getLikes = async (id) => {
  try {
    const res = await customAxios.get(`/videos/get-likes/${id}`);

    const data = res.data;
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

export const getSavedVideos = async () => {
  try {
    const res = await customAxios.get("/saved/all-saved-videos", {
      withCredentials: true,
    });

    return res.data;
  } catch (err) {
    console.error("Error fetching data:", err);
    return [];
  }
};
