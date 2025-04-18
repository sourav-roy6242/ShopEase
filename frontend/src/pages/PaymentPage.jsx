import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardPayment from "../components/CardPayment";

// Load your Stripe public key
const stripePromise = loadStripe("your-public-key-here");

const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-8">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-12 border-2 border-gray-200 transform transition-all hover:scale-105">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
            Choose Payment Method
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <button
              onClick={() => navigate("/card")}
              className="p-8 bg-indigo-500 text-white rounded-2xl transition duration-300 transform hover:scale-110 hover:bg-indigo-600"
            >
              Pay by Card
            </button>
            <button className="p-8 bg-purple-500 text-white rounded-2xl transition duration-300 transform hover:scale-110 hover:bg-purple-600">
              Pay by UPI
            </button>
            <button className="p-8 bg-teal-500 text-white rounded-2xl transition duration-300 transform hover:scale-110 hover:bg-teal-600">
              Pay by Bank Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
