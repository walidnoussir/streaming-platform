import { Router } from "express";
import { addVideo, deleteVideo, like } from "../controllers/videoController.js";
import { validateVideo } from "../middlewares/validationMiddleware.js";

const router = Router();

router.post("/add-video", validateVideo, addVideo);
router.delete("/delete-video/:id", deleteVideo);
router.post("/like-video/:id", like);

export default router;
