import { Request, Response } from "express";
import FoodOrder from "../../model/food-order";

export const getFoodOtherUpdate = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { status } = req.body;
  try {
    const foodOrder = await FoodOrder.findByIdAndUpdate(
      userId,
      {
        $set: {
          status,
        },
      },
      { new: true }
    );

    res.status(200).send({ success: true, foodOrder });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
