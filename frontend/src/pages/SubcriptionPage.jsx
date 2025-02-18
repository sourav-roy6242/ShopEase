import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const SubscriptionPage = () => {
  const plans = [
    { duration: "1 Month", price: "₹999", highlight: false },
    { duration: "3 Months", price: "₹2499", highlight: false },
    { duration: "6 Months", price: "₹4999", highlight: true },
    { duration: "12 Months", price: "₹9999", highlight: false },
  ];

  return (
    <div>
        <Navbar  />
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-300 to-indigo-400 text-white p-12">
      <h1 className="text-6xl font-extrabold drop-shadow-lg tracking-wide text-white mb-16">
        Choose Your Subscription Plan
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 w-full max-w-7xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-[320px] h-[420px] flex flex-col items-center justify-center p-12 rounded-3xl shadow-2xl text-center transition-all transform duration-300 hover:scale-105 border-4 ${
              plan.highlight
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 border-indigo-400"
                : "bg-gray-800 border-gray-600"
            }`}
          >
            <h2 className="text-4xl font-bold mb-6">{plan.duration}</h2>
            <p className="text-5xl font-extrabold mb-8">{plan.price}</p>

            <button
              className={`px-8 py-4 rounded-full text-xl font-semibold tracking-wide transition-all ${
                plan.highlight
                  ? "bg-white text-indigo-700 hover:bg-gray-200"
                  : "bg-indigo-600 hover:bg-indigo-800"
              }`}
            >
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default SubscriptionPage;
