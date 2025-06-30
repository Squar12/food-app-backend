import express from "express";
import { getFood } from "../controller/food/get-food";
import { createFood } from "../controller/food/create-food";
import { getDelete } from "../controller/food/delete-food";
import { getUpdate } from "../controller/food/update-food";

const foodRouter = express.Router();

foodRouter.post("/", createFood);
foodRouter.get("/:foodId", getFood);
foodRouter.put("/:foodId", getUpdate);
foodRouter.delete("/:foodId", getDelete);

export default foodRouter;
