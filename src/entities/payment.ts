import { model, Schema, Types } from "mongoose";

const paymentSchema = new Schema(
  {
    orderId: {
      type: Types.ObjectId,
      ref: "Order",
      required: true,
    },
    stripePaymentId: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "succeeded", "failed"],
      default: "pending",
    },
    amount: { type: Number, required: true },
  },
  { timestamps: true, collection: "payment" }
);

export const Payment = model("Payment", paymentSchema);
