import { model, Schema } from "mongoose";

enum FoodOrderStatusEnum {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
}

const foodOrderItemSchema = new Schema({
  foodId: { type: Schema.Types.ObjectId, ref: "Food", required: true },
  quantity: { type: Number, required: true },
});

const foodOrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  totalPrice: { type: Number, required: true },
  foodOrderItems: { type: [foodOrderItemSchema], required: true },
  status: {
    type: String,
    default: FoodOrderStatusEnum.PENDING,
    enum: Object.values(FoodOrderStatusEnum),
  },

  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const FoodOrder = model("FoodOrder", foodOrderSchema);

export default FoodOrder;
