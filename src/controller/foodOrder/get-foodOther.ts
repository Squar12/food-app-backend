import { Request, Response } from "express";

import FoodOrder from "../../model/food-order";

export const getFoodOther = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const foodOrder = await FoodOrder.findById(userId).populate({
      path: "foodOrderItems",
      populate: {
        path: "foodId",
      },
    });

    res.status(200).send({ success: true, foodOrder });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
