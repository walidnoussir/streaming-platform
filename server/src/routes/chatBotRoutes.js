import { Router } from "express";
import { chatWithAi } from "../controllers/chatBotController.js";

const router = Router();

router.post("/chat", chatWithAi);

export default router;
