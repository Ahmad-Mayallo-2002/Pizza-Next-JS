import { model, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    category: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true, collection: "category" }
);

export const Category = model("Category", categorySchema);
