import { StatusCodes } from "http-status-codes";
import Saved from "../models/Saved.js";
import { logger } from "../utils/logger.js";

export const saveVideo = async (req, res) => {
  req.body.addedBy = req.user.userId;
  try {
    const existingVideo = await Saved.findOne({ url: req.body.url });

    if (existingVideo) {
      await existingVideo.deleteOne();
      logger.info("Video removed from saved");
      return res.status(StatusCodes.OK).json({
        msg: "Video removed",
        saved: false,
      });
    }

    const savedVideo = await Saved.create(req.body);
    logger.info("Video saved successfully");
    res
      .status(StatusCodes.OK)
      .json({ msg: "video saved", saved: true, savedVideo });
  } catch (err) {
    logger.error("something went wrong during saving video");

    res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

export const getAllSavedVideos = async (req, res) => {
  try {
    const userId = req.user.userId;

    const savedVideos = await Saved.find({ addedBy: userId });

    logger.info(`User ${userId} fetched their savedVideos`);
    res.status(StatusCodes.OK).json(savedVideos);
  } catch (error) {
    logger.error("Error fetching user savedVideos:", error.message);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Server error while fetching saved videos" });
  }
};

export const removeSavedVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Saved.findByIdAndDelete(id);

    if (!video) {
      logger.warn(`Video not found with ID: ${id}`);
      throw new Error("video not found");
    }

    logger.info("saved video deleted successfully");
    res
      .status(StatusCodes.OK)
      .json({ msg: "saved video deleted successfully" });
  } catch (err) {
    logger.error("failed to delete the saved video");
    res.json({ msg: "failed to delete the saved video" });
  }
};
