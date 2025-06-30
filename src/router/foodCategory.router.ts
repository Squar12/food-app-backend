import express from "express";
import { createFoodCategory } from "../controller/category/create-food-category";
import { deleteCategory } from "../controller/category/delete-category";
import { getCategories } from "../controller/category/get-categories";

const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/createCategory", createFoodCategory);

foodCategoryRouter.get("/", getCategories);

foodCategoryRouter.delete("deleteCategory/:categoryId", deleteCategory);

export default foodCategoryRouter;
