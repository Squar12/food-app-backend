import express from "express";
import { createFoodCategory } from "../controller/category/create-food-category";
import { deleteCategory } from "../controller/category/delete-category";
import { getCategories } from "../controller/category/get-categories";
import { getFoodCategoryUpdate } from "../controller/category/update-food-category";

const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/createCategory", createFoodCategory);

foodCategoryRouter.put("/:categoryId", getFoodCategoryUpdate);

foodCategoryRouter.get("/", getCategories);

foodCategoryRouter.delete("deleteCategory/:categoryId", deleteCategory);

export default foodCategoryRouter;
