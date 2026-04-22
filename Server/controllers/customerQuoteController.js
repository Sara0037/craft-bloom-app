import CustomerQuote from "../models/CustomerQuote.js";

// CREATE a new quote
export const createCustomerQuote = async (req, res) => {
  try {
    const newQuote = new CustomerQuote(req.body);
    const savedQuote = await newQuote.save();

    res.status(201).json(savedQuote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET all quotes
export const getCustomerQuotes = async (req, res) => {
  try {
    const quotes = await CustomerQuote.find().populate("productId");
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};