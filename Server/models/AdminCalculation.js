import mongoose from "mongoose";

const adminCalculationSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    materialCost: {
      type: Number,
      required: true,
      min: 0
    },
    laborHours: {
      type: Number,
      required: true,
      min: 0
    },
    hourlyRate: {
      type: Number,
      required: true,
      min: 0
    },
    packagingCost: {
      type: Number,
      required: true,
      min: 0
    },
    extraCosts: {
      type: Number,
      default: 0,
      min: 0
    },
    profitMargin: {
      type: Number,
      required: true,
      min: 0
    },
    finalSuggestedPrice: {
      type: Number,
      required: true,
      min: 0
    },
    notes: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

const AdminCalculation = mongoose.model("AdminCalculation", adminCalculationSchema);

export default AdminCalculation;