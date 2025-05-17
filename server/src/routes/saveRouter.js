import { Router } from "express";
import { validateVideo } from "../middlewares/validationMiddleware.js";
import {
  getAllSavedVideos,
  removeSavedVideo,
  saveVideo,
} from "../controllers/saveController.js";

const router = Router();

router.post("/save-video", validateVideo, saveVideo);
router.delete("/delete-video/:id", removeSavedVideo);
router.get("/all-saved-videos", getAllSavedVideos);

export default router;
