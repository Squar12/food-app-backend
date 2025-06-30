import { Request, Response } from "express";
import User from "../../model/user";

export const createUser = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, address, isVerified } = req.body;

  try {
    const user = await new User({
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: address,
      isVerified: isVerified,
    }).save();
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "api error", error });
  }
};
