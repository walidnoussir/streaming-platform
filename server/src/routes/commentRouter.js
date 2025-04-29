import { Router } from "express";
import { addComment, addReply } from "../controllers/commentController.js";
import { validateComment } from "../middlewares/validationMiddleware.js";

const router = Router();

router.post("/add-comment", validateComment, addComment);
router.post("/add-reply", addReply);

export default router;
