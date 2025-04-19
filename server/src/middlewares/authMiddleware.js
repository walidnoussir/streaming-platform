import { verifyJWT } from "../utils/tokenUtils.js";
import { UnauthenticatedError } from "./errorHandler.js";

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthenticatedError("authentication invalid");
  }

  try {
    const { userId } = verifyJWT(token);

    req.user = { userId };
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid");
  }
};
