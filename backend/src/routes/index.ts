import { Router } from "express";
import authRouter from "./auth.route";
import chatRouter from "./chat.route";
import userRouter from "./user.route";

const router = Router();
router.use("/auth", authRouter);
router.use("/chat", chatRouter);
router.use("/user", userRouter);
export default router;
