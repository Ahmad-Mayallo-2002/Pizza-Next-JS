import { model, Schema, Types } from "mongoose";

const orderItemSchema = new Schema(
  {
    orderId: { type: Types.ObjectId, ref: "Order", required: true },
    pizzaId: { type: Types.ObjectId, ref: "Pizza", required: true },
    amount: { type: Number, required: true, min: 1 },
    subTotal: { type: Number, required: true },
  },
  { timestamps: true, collections: "orderItems" }
);

export const OrderItem = model("OrderItem", orderItemSchema);
