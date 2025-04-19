import ENV from "../config/dotenv.js";
import { UnauthenticatedError } from "../middlewares/errorHandler.js";
import User from "../models/User.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);

  res.status(200).json({ msg: "user created", user });
};

export const login = async (req, res) => {
  const { password, email } = req.body;

  const user = await User.findOne({ email });

  const isValidUser = user && (await comparePassword(password, user.password));

  if (!isValidUser) throw new UnauthenticatedError("invalid credentials");

  const token = createJWT({ userId: user._id });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: ENV.NODE_ENV === "production",
  });

  res.status(200).json({ msg: "logged in" });
};
