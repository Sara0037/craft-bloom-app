import express from "express";
import {
  createCustomerQuote,
  getCustomerQuotes
} from "../controllers/customerQuoteController.js";

const router = express.Router();

router.post("/", createCustomerQuote);
router.get("/", getCustomerQuotes);

export default router;