import { Router } from "express";
import authRouter from "./auth.route";
import chatRouter from "./chat.route";

const router = Router();
router.use("/auth", authRouter);
router.use("/chat", chatRouter);
// chat
// user
export default router;
