import React from "react";
import axios from "axios";

const Payment = () => {
  const handlePayment = async () => {
    try {
      // ✅ **Step 1: Create an order**
      const { data } = await axios.post(
        "http://localhost:8080/payment/create-order",
        {
          amount: 500, // ₹500
        } 
      );

      // ✅ **Step 2: Open Razorpay Modal**
      const options = {
        key: "rzp_test_FteNjl7FAYNCWg",
        amount: data.amount,
        currency: "INR",
        name: "Food Logger",
        description: "Organic Product Purchase",
        order_id: data.orderId,
        handler: async function (response) {
          // ✅ **Step 3: Verify Payment**
          try {
            const verifyRes = await axios.post(
              "http://localhost:8080/payment/verify-payment",
              {
                order_id: response.razorpay_order_id,
                payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }
            );

            alert(verifyRes.data.status);
          } catch (error) {
            console.error("Payment verification failed:", error);
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: "Nishant Goswami",
          email: "nishant@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#4CAF50",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment initialization failed:", error);
      alert("Payment initialization failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Buy Organic Products
        </h2>
        <button
          onClick={handlePayment}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Pay ₹500
        </button>
      </div>
    </div>
  );
};

export default Payment;
