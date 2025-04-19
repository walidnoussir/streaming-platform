import express from "express";
import * as dotenv from "dotenv";
import authRouter from "./src/routes/authRouter.js";
import { authenticateUser } from "./src/middlewares/authMiddleware.js";
import cookieParser from "cookie-parser";

export const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authenticateUser, authRouter);
