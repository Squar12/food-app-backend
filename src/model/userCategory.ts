import { model, Schema } from "mongoose";

const userCategorySchema = new Schema({
  categoryName: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const UserCategory = model("UserCategory", userCategorySchema);

export default UserCategory;
