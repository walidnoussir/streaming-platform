import express from "express";
import * as dotenv from "dotenv";
import authRouter from "./src/routes/authRouter.js";
import cookieParser from "cookie-parser";
import errorHandlerMiddleware from "./src/middlewares/errorHandler.js";
import commentRouter from "./src/routes/commentRouter.js";
import { limiter } from "./src/utils/rateLimiter.js";
import { requestLogger } from "./src/utils/logger.js";
import videoRouter from "./src/routes/videoRouter.js";
import { authenticateUser } from "./src/middlewares/authMiddleware.js";
import userRouter from "./src/routes/userRouter.js";
import cors from "cors";
import saveRouter from "./src/routes/saveRouter.js";

export const app = express();
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(limiter);
app.use(requestLogger);

app.use("/api/comments", authenticateUser, commentRouter);
app.use("/api/videos", authenticateUser, videoRouter);
app.use("/api/saved", authenticateUser, saveRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", authenticateUser, userRouter);

app.use(errorHandlerMiddleware);
