import express from "express";
import { createFoodOrder } from "../controller/foodOrder/create-food-order";
import { getFoodOther } from "../controller/foodOrder/get-foodOther";
import { getFoodOtherDelete } from "../controller/foodOrder/delete-foodOther";
import { getFoodOtherUpdate } from "../controller/foodOrder/update-foodOther";

const foodOrderRouter = express.Router();

foodOrderRouter.post("/", createFoodOrder);

foodOrderRouter.put("/:userId", getFoodOtherUpdate);

foodOrderRouter.get("/:userId", getFoodOther);

foodOrderRouter.delete("/:userId", getFoodOtherDelete);

export default foodOrderRouter;
