import { Router } from "express";

import { passportAuthenticateJwt } from "../config/passport.config";
import {
  createChatController,
  getSingleChatController,
  getUserChatsController,
} from "../controllers/chat.controller";
import { getUsersController } from "../controllers/user.controller";

const userRouter = Router()
  .use(passportAuthenticateJwt)
  .get("/all", getUsersController);

export default userRouter;
