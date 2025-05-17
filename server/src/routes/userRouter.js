import { Router } from "express";
import { getCurrentUser, updateUser } from "../controllers/userController.js";

const router = Router();

router.get("/get-user", getCurrentUser);
router.patch("/update-user/:id", updateUser);

export default router;
