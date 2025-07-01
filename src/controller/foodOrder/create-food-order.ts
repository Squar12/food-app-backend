import { Request, Response } from "express";
import FoodOrder from "../../model/food-order";

export const createFoodOrder = async (req: Request, res: Response) => {
  const { user, totalPrice, foodOrderItems } = req.body;

  try {
    const foodOther = await new FoodOrder({
      user: user,
      totalPrice: totalPrice,
      foodOrderItems: foodOrderItems,
    }).save();

    res.status(200).json({ success: true, foodOther });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "api error", error });
  }
};
