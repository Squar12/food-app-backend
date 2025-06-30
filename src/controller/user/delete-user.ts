import { Request, Response } from "express";
import User from "../../model/user";

export const getDelete = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndDelete(userId);

    res.status(200).send({ success: true, user });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
