import { StatusCodes } from "http-status-codes";
import ENV from "../config/dotenv.js";
import { UnauthenticatedError } from "../middlewares/errorHandler.js";
import User from "../models/User.js";
import { logger } from "../utils/logger.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);

  res.status(StatusCodes.OK).json({ msg: "user created", user });
};

export const login = async (req, res) => {
  try {
    const { password, email } = req.body;

    logger.info(`🔐 Login attempt for email: ${email}`);

    const user = await User.findOne({ email });

    const isValidUser =
      user && (await comparePassword(password, user.password));

    if (!isValidUser) {
      logger.warn(`❌ Login failed for email: ${email}`);
      throw new UnauthenticatedError("Invalid credentials");
    }

    const token = createJWT({ userId: user._id });
    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: ENV.NODE_ENV === "production",
    });

    logger.info(`✅ User logged in successfully: ${user.email}`);
  } catch (err) {
    logger.error(`❌ Login error: ${err.message}`);
    res.status(401).json({ msg: err.message || "Login failed" });
  }
  res.status(StatusCodes.OK).json({ msg: "Logged in successfully" });
};

export const logout = (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};
