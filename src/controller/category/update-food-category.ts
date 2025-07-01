import { Request, Response } from "express";
import FoodCategory from "../../model/foodCategory";

export const getFoodCategoryUpdate = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const { categoryName } = req.body;
  try {
    const foodCategory = await FoodCategory.findByIdAndUpdate(
      categoryId,
      {
        categoryName: categoryName,
      },
      { new: true }
    );

    res.status(200).send({ success: true, foodCategory });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
