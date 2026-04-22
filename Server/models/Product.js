import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      trim: true
    },
    baseMaterialCost: {
      type: Number,
      required: true,
      min: 0
    },
    estimatedHours: {
      type: Number,
      required: true,
      min: 0
    },
    difficultyLevel: {
      type: String,
      required: true,
      enum: ["low", "medium", "high"]
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;