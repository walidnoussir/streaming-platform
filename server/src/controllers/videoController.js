import { StatusCodes } from "http-status-codes";
import Video from "../models/Video.js";
import { logger } from "../utils/logger.js";

export const addVideo = async (req, res) => {
  req.body.addedBy = req.user.userId;
  try {
    const existingVideo = await Video.findOne({ url: req.body.url });

    if (existingVideo) {
      await Video.findByIdAndDelete(existingVideo._id);
      logger.info(`Existing video deleted with ID: ${existingVideo._id}`);
      res.status(200).json({ msg: "Existing video deleted", existingVideo });
    }

    const video = await Video.create(req.body);
    logger.info(`Video created successfully with ID: ${video._id}`);
    res.status(201).json({
      msg: "Video added successfully",
      video,
    });
  } catch (err) {
    logger.error(`Error creating video: ${err.message}`);
    throw new Error("error", err);
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;

  const video = await Video.findByIdAndDelete(id);

  if (!video) {
    logger.warn(`Video not found with ID: ${id}`);
    throw new Error("video not found");
  }

  logger.info(`Video deleted successfully with ID: ${id}`);
  res.status(200).json({ msg: "Video deleted successfully" });
};

export const like = async (req, res) => {
  const userId = req.body.userId;
  const videoId = req.params.id;
  console.log(videoId);

  try {
    const video = await Video.findById(videoId);
    if (!video)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Video not found" });
    logger.error(`video not found with ID: ${videoId}`);

    if (video.dislikes.includes(userId)) {
      // video.dislikes = video.dislikes.filter(
      //   (user) => user.toString() !== userId
      // );
      Video.findByIdAndUpdate(
        { _id: videoId },
        { $pull: { dislikes: userId } },
        { new: true }
      );
    }

    if (!video.likes.includes(userId)) {
      video.likes.push(userId);
    } else {
      video.likes.pull(userId);
    }

    await video.save();
    logger.info("Video liked successfully");
    res.status(200).json({ message: "Video liked", video });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const dislike = async (req, res) => {
  const userId = req.body.userId;
  const videoId = req.params.videoId;

  try {
    const video = await Video.findById(videoId);
    if (!video)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Video not found" });
    logger.error(`video not found with ID: ${videoId}`);

    if (video.likes.includes(userId)) {
      video.likes = video.likes.filter((user) => user.toString() !== userId);
    }

    if (!video.dislikes.includes(userId)) {
      video.dislikes.push(userId);
    } else {
      video.dislikes.pull(userId);
    }

    await video.save();
    logger.info("Video disliked successfully");
    res.status(200).json({ message: "Video disliked", video });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
