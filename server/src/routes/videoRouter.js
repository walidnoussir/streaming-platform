import { Router } from "express";
import {
  addVideo,
  deleteVideo,
  getAllVideos,
  getLikes,
  like,
} from "../controllers/videoController.js";
import { validateVideo } from "../middlewares/validationMiddleware.js";

const router = Router();

router.post("/add-video", validateVideo, addVideo);
router.get("/all-videos", getAllVideos);
router.delete("/delete-video/:id", deleteVideo);
router.post("/like-video/:id", like);
router.get("/get-likes/:id", getLikes);
// router.patch("/like-video/:id", like);

export default router;
