import React from "react";
import Navbar from "../components/Navbar";

const PaymentPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-8">
        {/* Payment Options Card */}
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-12 border-2 border-gray-200 transform transition-all hover:scale-105">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
            Choose Payment Method
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pay by Card */}
            <button className="p-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl text-xl font-semibold text-white hover:from-indigo-600 hover:to-indigo-700 transition-all transform hover:scale-105">
              Pay by Card
            </button>

            {/* Pay by UPI */}
            <button className="p-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl text-xl font-semibold text-white hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105">
              Pay by UPI
            </button>

            {/* Pay by Bank Account */}
            <button className="p-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl text-xl font-semibold text-white hover:from-teal-600 hover:to-teal-700 transition-all transform hover:scale-105">
              Pay by Bank Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
