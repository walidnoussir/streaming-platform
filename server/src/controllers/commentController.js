import { StatusCodes } from "http-status-codes";
import Comment from "../models/Comment.js";
import { logger } from "../utils/logger.js";

export const addComment = async (req, res) => {
  req.body.createdBy = req.user.userId;

  try {
    const comment = await Comment.create(req.body);
    logger.info(`Comment created successfully with ID: ${comment._id}`);

    res.status(StatusCodes.OK).json({ msg: "comment created", comment });
  } catch (err) {
    logger.error(`Error creating comment: ${err.message}`);
    throw new Error("Failed to create comment", err.message);
  }
};

export const addReply = async (req, res) => {
  req.body.createdBy = req.user.userId;

  try {
    const { text, parentCommentId } = req.body;

    const reply = await Comment.create({
      text,
    });

    logger.info(`Reply created with ID: ${reply._id}`);

    const parentComment = await Comment.findByIdAndUpdate(
      parentCommentId,
      { $push: { replies: reply._id } },
      { new: true }
    ).populate("replies");

    if (!parentComment) {
      logger.warn(`Parent comment not found: ${parentCommentId}`);
      return res.status(404).json({ msg: "Parent comment not found" });
    }

    logger.info(`Reply added to parent comment with ID: ${parentComment._id}`);

    res.status(201).json({
      msg: "Reply added successfully",
      parentComment,
    });
  } catch (err) {
    logger.error(`Error adding reply: ${err.message}`);
    res.status(500).json({ msg: "Error adding reply", error: err.message });
  }
};
