
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import Navbar from "../components/Navbar";

const products = [
  { id: 1, name: "Smart Watch", image: "https://via.placeholder.com/60", price: 150, qty: 1 },
  { id: 2, name: "Bluetooth Earbuds", image: "https://via.placeholder.com/60", price: 90, qty: 2 },
];

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "", email: "", address: "", city: "", zip: "", country: "", payment: "card",
  });
  const navigate = useNavigate();  // Initialize the navigate hook

  const total = products.reduce((acc, p) => acc + p.price * p.qty, 0);
  const next = () => setStep((s) => Math.min(3, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const submitOrder = (e) => {
    e.preventDefault();
    alert("🎉 Order Confirmed!");
    navigate("/buyerhome");  // Redirecting to the Buyer Home Page
  };

  return (
    

    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-12 px-4">
      <Navbar />
      <div className="max-w-6xl mt-50 mx-auto grid lg:grid-cols-3 gap-8 items-start">
        {/* Left - Main Form */}
        <form
          onSubmit={submitOrder}
          className="lg:col-span-2 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 space-y-8 border border-gray-200"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-cyan-400">Checkout</h2>
            <p className="text-sm text-gray-500">Step {step} of 3</p>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-4"
              >
                {["name", "email", "address", "city", "zip", "country"].map((field) => (
                  <div key={field}>
                    <label className="block text-gray-700 capitalize mb-1">{field}</label>
                    <input
                      type="text"
                      name={field}
                      value={data[field]}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                      placeholder={`Enter your ${field}`}
                    />
                  </div>
                ))}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Payment Method</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: "Credit/Debit Card", value: "card" },
                    { label: "Cash On Delivery", value: "cod" },
                  ].map((method) => (
                    <label
                      key={method.value}
                      className={`p-5 border rounded-xl cursor-pointer transition ${
                        data.payment === method.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.value}
                        onChange={handleChange}
                        checked={data.payment === method.value}
                        className="mr-2"
                      />
                      {method.label}
                    </label>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-800">Review Your Order</h3>
                {products.map((p) => (
                  <div key={p.id} className="flex justify-between items-center border-b pb-2">
                    <div className="flex items-center gap-4">
                      <img src={p.image} className="w-12 h-12 rounded-md" alt={p.name} />
                      <div>
                        <p className="font-medium">{p.name}</p>
                        <p className="text-sm text-gray-500">
                          {p.qty} × ${p.price}
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold text-gray-800">${p.qty * p.price}</p>
                  </div>
                ))}
                <div className="text-sm text-gray-600 space-y-1 mt-4">
                  <p><strong>Name:</strong> {data.name}</p>
                  <p><strong>Address:</strong> {data.address}, {data.city}, {data.zip}, {data.country}</p>
                  <p><strong>Email:</strong> {data.email}</p>
                  <p><strong>Payment:</strong> {data.payment === "card" ? "Card" : "Cash on Delivery"}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Buttons */}
          <div className="flex justify-between pt-6">
            {step > 1 ? (
              <button type="button" onClick={back} className="px-6 py-2 border border-gray-400 rounded-xl hover:bg-gray-100 transition">
                Back
              </button>
            ) : <div />}
            {step < 3 ? (
              <button type="button" onClick={next} className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition">
                Next
              </button>
            ) : (
              <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-500 transition">
                Confirm Order
              </button>
            )}
          </div>
        </form>

        {/* Right - Order Summary */}
        <div className="sticky top-12 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-cyan-500">Order Summary</h3>
          <div className="space-y-4">
            {products.map((p) => (
              <div key={p.id} className="flex justify-between items-center">
                <div className="text-sm">
                  <p className="font-medium">{p.name}</p>
                  <p className="text-gray-500 text-xs">{p.qty} × ${p.price}</p>
                </div>
                <p className="font-semibold text-gray-800">${p.qty * p.price}</p>
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-semibold text-lg text-gray-800">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}





