import { Router } from "express";
import { addComment } from "../controllers/commentController.js";

const router = Router();

router.post("/add-comment", addComment);
