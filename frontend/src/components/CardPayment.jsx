import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Navbar from "./Navbar"; // Ensure Navbar is correctly imported

const CardPayment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardholderName, setCardholderName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setMessage("Stripe is not loaded yet.");
      setLoading(false);
      return;
    }

    if (!cardholderName.trim()) {
      setMessage("Please enter the cardholder's name.");
      setLoading(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: cardholderName,
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Payment successful!");
      console.log(paymentMethod);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[90vh]">
        {/* Animated Floating Card with Green Hover */}
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border-2 border-black 
                        animate-float transition-all duration-500 ease-in-out hover:scale-105 
                        hover:shadow-green-500 hover:border-green-500">
          {/* Stylish Heading */}
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 animate-slide-in">
            💳 Secure Card Payment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Cardholder Name Input */}
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2">Cardholder Name</label>
              <input
                type="text"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
                           focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all 
                           duration-300 placeholder-gray-500 hover:border-green-500"
                required
              />
            </div>

            {/* Card Details Input */}
            <div className="p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-inner 
                            hover:shadow-lg transition-all duration-300 ease-in-out">
              <CardElement className="p-2" />
            </div>

            {/* Animated Pay Now Button */}
            <button
              type="submit"
              disabled={!stripe || loading}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg 
                        relative overflow-hidden group transition-all transform hover:scale-105 
                        hover:bg-green-600 hover:shadow-green-500 disabled:opacity-50 
                        disabled:cursor-not-allowed active:translate-y-1 active:shadow-none"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-green-500 
                               rounded-full group-hover:w-64 group-hover:h-64 
                               opacity-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
              {loading ? "Processing..." : "Pay Now"}
            </button>
          </form>

          {/* Animated Message Display */}
          {message && (
            <p className="mt-4 text-center text-red-500 font-medium animate-fade-in">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardPayment;

