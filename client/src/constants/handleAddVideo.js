import customAxios from "../utils/customAxios";

export const handleAddVideo = async (item) => {
  const { id, user, image, duration } = item;

  try {
    await customAxios.post("/videos/add-video", {
      url: id,
      videoOwner: user.name,
      image,
      duration,
    });
  } catch (err) {
    console.error(`Could not add this video ${err.message}`);
  }
};
