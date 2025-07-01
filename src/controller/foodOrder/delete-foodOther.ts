import { Request, Response } from "express";
import FoodOrder from "../../model/food-order";

export const getFoodOtherDelete = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const foodOrder = await FoodOrder.findByIdAndDelete(userId);

    res.status(200).send({ success: true, foodOrder });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
