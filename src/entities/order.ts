import { model, Schema, Types } from "mongoose";

export const orderSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User", required: true },
    address: {
      _id: false,
      city: { type: String, required: true },
      country: { type: String, required: true },
      state: { type: String, required: true },
    },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: [
        "pending",
        "paid",
        "preparing",
        "delivering",
        "completed",
        "cancelled",
      ],
      default: "pending",
    },
  },
  { timestamps: true, collection: "order" }
);

export const Order = model("Order", orderSchema);
