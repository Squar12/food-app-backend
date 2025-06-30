import { model, Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String },
  password: { type: String },
  phoneNumber: { type: String },
  address: { type: String },

  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const User = model("User", userSchema);

export default User;
