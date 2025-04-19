import { StatusCodes } from "http-status-codes";
import Comment from "../models/Comment";

export const addComment = async (req, res) => {
  const comment = await Comment.create(req.body);

  res.status(StatusCodes.OK).json({ msg: "comment created", comment });
};
