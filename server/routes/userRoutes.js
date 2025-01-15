import express from "express";
import { clerkWebhooks } from "../controllers/userController.js";

const userRouter = express.Router();
//using this router we will create a new endpoint

userRouter.post("/webhooks", clerkWebhooks);  // route

export default userRouter;  // router