import mongoose from "mongoose";

const materialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    unit: {
      type: String,
      required: true,
      trim: true
    },
    costPerUnit: {
      type: Number,
      required: true,
      min: 0
    },
    supplier: {
      type: String,
      trim: true
    },
    inStock: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const Material = mongoose.model("Material", materialSchema);

export default Material;