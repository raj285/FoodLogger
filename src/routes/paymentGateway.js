const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const cors = require("cors");

const paymentRouter = express.Router();

// Razorpay instance with keys
const razorpayInstance = new Razorpay({
  key_id: "rzp_test_FteNjl7FAYNCWg", // Your Razorpay Key ID
  key_secret: "JClALmhdi519vPbnpyXekCft", // Your Razorpay Key Secret
});
 
// Enable CORS
paymentRouter.use(cors());

// Create Order API0.0
paymentRouter.post("/create-order", async (req, res) => {
  const options = {
    amount: req.body.amount * 100, // Convert to smallest unit (paise)
    currency: "INR",
    receipt: "goswaminishant9670@gmail.com",
  };

  try {
    const order = await razorpayInstance.orders.create(options);
    res.json({
      amount: options.amount,
      id: order.id,
    });
  } catch (error) {
    res.status(500).send({ error: "Error creating order", details: error });
  }
});

// Verify Payment API
paymentRouter.post("/verify-payment", async (req, res) => {
  const { order_id, payment_id, razorpay_signature, amount } = req.body;

  // Create the expected signature using the HMAC algorithm
  const hmac = crypto
    .createHmac("sha256", "JClALmhdi519vPbnpyXekCft")
    .update(order_id + "|" + payment_id)
    .digest("hex");

  // Compare the signatures
  if (hmac === razorpay_signature) {
    // Payment verification success
    res.json({ status: "Payment successful" });
  } else {
    // Payment verification failed
    res.status(400).json({ status: "Payment verification failed" });
  }
});

module.exports = paymentRouter;
