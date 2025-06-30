import { Request, Response } from "express";
import Food from "../../model/food";

export const createFood = async (req: Request, res: Response) => {
  const { foodName, image, price, ingredients, category } = req.body;

  try {
    const food = await new Food({
      foodName: foodName,
      image: image,
      price: price,
      ingredients: ingredients,
      category: category,
    }).save();
    res.status(200).send({ success: true, food });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
