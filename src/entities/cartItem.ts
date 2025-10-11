import { model, Schema, Types } from "mongoose";

const cartItemSchema = new Schema({
  cartId: { type: Types.ObjectId, ref: "Cart", required: true },
  pizzaId: { type: Types.ObjectId, ref: "Pizza", required: true },
  amount: { type: Number, required: true, min: 1 },
  subTotal: { type: Number, required: true },
});

export const CartItem = model("CartItem", cartItemSchema);
