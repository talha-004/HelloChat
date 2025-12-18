import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncyHanddler.middleware";
import { HTTPSTATUS } from "../config/http.config";
import { sendMessageSchema } from "../validators/message.validator";
import { sendMessageService } from "../services/message.service";

export const sendMessageController = asyncHandler(
  async (req: Request, res: Response) => {
    const body = sendMessageSchema.parse(req.body);
    const userId = req.user?._id;
    const result = await sendMessageService(userId, body);

    return res.status(HTTPSTATUS.OK).json({
      message: "Message Sent Successfully",
      ...result,
    });
  }
);
