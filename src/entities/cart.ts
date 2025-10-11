import { model, Schema, Types } from "mongoose";

const cartSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User", required: true },
    totalPrice: { type: Number, required: true, min: 0, default: 0 },
  },
  { timestamps: true, collection: "cart" }
);

export const Cart = model("Cart", cartSchema);
