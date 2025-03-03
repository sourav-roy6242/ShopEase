import React, { useState } from "react";
import { FaBox, FaMapMarkerAlt, FaCheckCircle, FaMoneyBillWave, FaClock, FaShieldAlt, FaMotorcycle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function DeliveryBoyHome() {
  const generateOrderId = () => Math.floor(100000 + Math.random() * 900000); // Unique 6-digit order ID

  const [orders, setOrders] = useState([
    { id: generateOrderId(), customer: "John Doe", address: "123 Main St", status: "Not Accepted", otp: "1234", enteredOtp: "" },
    { id: generateOrderId(), customer: "Jane Smith", address: "456 Elm St", status: "Not Accepted", otp: "5678", enteredOtp: "" },
  ]);

  const handleAccept = (id) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: "Pending" } : order));
  };

  const handlePickUp = (id) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: "Picked Up" } : order));
  };

  const handleDeliver = (id) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: "Delivered" } : order));
  };

  const handleOtpChange = (id, value) => {
    setOrders(orders.map(order => order.id === id ? { ...order, enteredOtp: value } : order));
  };

  return (
    <div>
      <Navbar />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 mt-20">
      {/* Header Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center mb-6 w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-800">Delivery Dashboard</h1>
        <p className="text-lg text-gray-600 mt-2">Manage your orders efficiently and maximize your earnings!</p>
      </div>

      {/* Orders Section */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Active Orders</h2>
        {orders.map((order) => (
          <div key={order.id} className="p-4 mb-3 bg-gray-50 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FaBox className="text-blue-500" /> Order #{order.id}
              </h3>
              <p className="text-gray-600 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" /> {order.address}
              </p>
              <p className="text-sm text-gray-500">Customer: {order.customer}</p>
            </div>
            <div className="mt-2 md:mt-0">
              <p className={`text-sm font-medium ${order.status === "Picked Up" ? "text-yellow-600" : order.status === "Delivered" ? "text-green-600" : "text-red-600"}`}>
                {order.status}
              </p>
              {order.status === "Not Accepted" && (
                <button 
                  onClick={() => handleAccept(order.id)}
                  className="mt-2 w-full md:w-auto bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-all">
                  Accept Order
                </button>
              )}
              {order.status === "Pending" && (
                <button 
                  onClick={() => handlePickUp(order.id)}
                  className="mt-2 w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all">
                  Picked Up
                </button>
              )}
              {order.status === "Picked Up" && (
                <div className="mt-2">
                  <input 
                    type="text" 
                    placeholder="Enter OTP"
                    value={order.enteredOtp}
                    onChange={(e) => handleOtpChange(order.id, e.target.value)}
                    className="px-3 py-2 border rounded-md text-gray-700"
                  />
                  <button 
                    onClick={() => handleDeliver(order.id)}
                    disabled={order.enteredOtp !== order.otp}
                    className={`mt-2 w-full md:w-auto px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${order.enteredOtp === order.otp ? "bg-green-500 text-white hover:bg-green-700" : "bg-gray-400 text-gray-600 cursor-not-allowed"}`}>
                    <FaCheckCircle /> Mark as Delivered
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-2 gap-6 mt-8 w-full max-w-4xl">
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4">
          <FaMoneyBillWave className="text-green-500 text-4xl" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">High Earnings</h2>
            <p className="text-gray-600 text-md">Earn competitive payouts with weekly deposits.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4">
          <FaClock className="text-blue-500 text-4xl" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Flexible Hours</h2>
            <p className="text-gray-600 text-md">Work at your own convenience with no fixed shifts.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4">
          <FaMotorcycle className="text-red-500 text-4xl" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Exclusive Incentives</h2>
            <p className="text-gray-600 text-md">Get extra bonuses for peak hour deliveries.</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4">
          <FaShieldAlt className="text-yellow-500 text-4xl" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Safety & Support</h2>
            <p className="text-gray-600 text-md">We ensure your safety with insurance coverage.</p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
