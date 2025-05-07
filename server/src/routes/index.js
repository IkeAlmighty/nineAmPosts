import dailyRoutes from "../models/daily.js";
import userRoutes from "../models/user.js";
import postRoutes from "../models/post.js";
import { Router } from "express";

const router = Router();

router.use("/daily", dailyRoutes);
router.use("/user", userRoutes);
router.use("/post", postRoutes);

export default router;
