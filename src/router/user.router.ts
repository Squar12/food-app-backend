import express from "express";
import { getUser } from "../controller/user/get-user";
import { createUser } from "../controller/user/create-user";
import { getUpdate } from "../controller/user/udpate.user";
import { getDelete } from "../controller/user/delete-user";

const userRouter = express.Router();
userRouter.post("/", createUser);
userRouter.get("/:userId", getUser);
userRouter.put("/:userId", getUpdate);
userRouter.delete("/:userId", getDelete);

export default userRouter;
