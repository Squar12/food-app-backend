import { Request, Response } from "express";
import User from "../../model/user";

export const getUpdate = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { email, password, phoneNumber, address, isVerified } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      {
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        address: address,
        isVerified: isVerified,
      },
      { new: true }
    );

    res.status(200).send({ success: true, user });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
