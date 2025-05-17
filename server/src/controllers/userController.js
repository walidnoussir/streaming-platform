import { StatusCodes } from "http-status-codes";
import { verifyJWT } from "../utils/tokenUtils.js";
import User from "../models/User.js";
import { logger } from "../utils/logger.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";

export const getCurrentUser = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "No token provided" });
    }

    const decoded = verifyJWT(token);
    const userId = decoded.userId;

    const user = await User.findById(userId);

    logger.info("User found");
    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    logger.error("User not found");
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Invalid or expired token" });
  }
};

export const updateUser = async (req, res) => {
  const { username, email, password, newPassword } = req.body;

  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      logger.error("User not found");
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "User not found" });
    }

    const isPasswordCorrect = await comparePassword(password, user.password);
    if (!isPasswordCorrect) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Current password is incorrect" });
    }

    user.username = username || user.username;
    user.email = email || user.email;

    if (newPassword) {
      const hashed = await hashPassword(newPassword);
      user.password = hashed;
    }

    const updatedUser = await user.save();

    logger.info(`User with id ${req.params.id} updated successfully`);
    res.status(StatusCodes.OK).json({
      msg: "User updated successfully",
      updatedUser,
    });
  } catch (err) {
    logger.error("Error updating user", err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to update user" });
  }
};
