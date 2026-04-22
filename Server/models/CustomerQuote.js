import mongoose from "mongoose";

const customerQuoteSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true
    },
    customerEmail: {
      type: String,
      required: true,
      trim: true
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    size: {
      type: String,
      required: true,
      enum: ["small", "medium", "large"]
    },
    colorTheme: {
      type: String,
      required: true,
      trim: true
    },
    customMessage: {
      type: String,
      trim: true
    },
    rushOrder: {
      type: Boolean,
      default: false
    },
    estimatedPrice: {
      type: Number,
      required: true,
      min: 0
    },
    status: {
      type: String,
      enum: ["pending", "reviewed", "approved", "rejected"],
      default: "pending"
    }
  },
  { timestamps: true }
);

const CustomerQuote = mongoose.model("CustomerQuote", customerQuoteSchema);

export default CustomerQuote;