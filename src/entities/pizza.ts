import { model, Schema, Types } from "mongoose";

const pizzaSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, default: 1, min: 1 },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0, min: 0 },
    categoryId: {
      type: Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true, collection: "pizza" }
);

export const Pizza = model("Pizza", pizzaSchema);
