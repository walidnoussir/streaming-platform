import jwt from "jsonwebtoken";
import ENV from "../config/dotenv.js";

export const createJWT = (payload) => {
  const { JWT_SECRET, JWT_EXPIRES_IN } = ENV;

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  return token;
};

export const verifyJWT = (token) => {
  const decoded = jwt.verify(token, ENV.JWT_SECRET);
  return decoded;
};
