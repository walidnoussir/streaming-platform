import { StatusCodes } from "http-status-codes";
import Video from "../models/Video.js";
import { logger } from "../utils/logger.js";
import { verifyJWT } from "../utils/tokenUtils.js";
import Like from "../models/Like.js";

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

export const getAllVideos = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "No token provided" });
    }

    const decoded = verifyJWT(token);
    const userId = decoded.userId;

    const videos = await Video.find({ addedBy: userId });

    logger.info(`User ${userId} fetched their videos`);
    res.status(StatusCodes.OK).json(videos);
  } catch (error) {
    logger.error("Error fetching user videos:", error.message);
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Invalid or expired token" });
  }
};

export const like = async (req, res) => {
  const userId = req.user.userId;
  const id = req.params.id;

  try {
    const hasLiked = await Like.findOne({ user: userId, video: id });

    if (hasLiked) {
      await hasLiked.deleteOne();
    } else {
      await Like.create({ user: userId, video: id });
    }

    const totalLikes = await Like.countDocuments({ video: id });

    logger.info(`${hasLiked ? "like removed" : "video liked"}`);
    res.status(StatusCodes.OK).json({
      message: hasLiked ? "Like removed" : "Video liked",
      liked: !hasLiked,
      count: totalLikes,
    });
  } catch (err) {
    console.error("Like error:", err);
    logger.error("something went wrong");
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Something went wrong",
    });
  }
};

export const getLikes = async (req, res) => {
  const id = req.params.id;
  const userId = req.user?.userId;

  try {
    const count = await Like.countDocuments({ video: id });

    let liked = false;

    if (userId) {
      const userLike = await Like.findOne({ user: userId, video: id });
      liked = !!userLike;
    }

    res.status(StatusCodes.OK).json({ count, liked });
  } catch (error) {
    console.error("Error while getting likes:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong" });
  }
};

// export const dislike = async (req, res) => {
//   const userId = req.body.userId;
//   const videoId = req.params.videoId;

//   try {
//     const video = await Video.findById(videoId);
//     if (!video)
//       return res
//         .status(StatusCodes.NOT_FOUND)
//         .json({ message: "Video not found" });
//     logger.error(`video not found with ID: ${videoId}`);

//     if (video.likes.includes(userId)) {
//       video.likes = video.likes.filter((user) => user.toString() !== userId);
//     }

//     if (!video.dislikes.includes(userId)) {
//       video.dislikes.push(userId);
//     } else {
//       video.dislikes.pull(userId);
//     }

//     await video.save();
//     logger.info("Video disliked successfully");
//     res.status(200).json({ message: "Video disliked", video });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };
