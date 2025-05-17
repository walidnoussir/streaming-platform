import customAxios from "../utils/customAxios";

export const handleSaveVideo = async (item) => {
  const { id, user, image, duration } = item;

  try {
    await customAxios.post("/saved/save-video", {
      url: id,
      videoOwner: user.name,
      image,
      duration,
    });
  } catch (err) {
    console.error(`Could not save this video ${err.message}`);
  }
};
