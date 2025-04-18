import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  FaMotorcycle,
  FaMoneyBillAlt,
  FaClock,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa"; // Icons for opportunities
import { GiCheckMark } from "react-icons/gi"; // Icons for terms and conditions

const DeliveryBoyHome = () => {
  const navigate = useNavigate();
  return (
  <div>
    <Navbar />

    <div className="min-h-screen mt-20 bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to Our <span className="text-blue-600">Delivery Team</span>
        </h1>
        <p className="text-xl text-gray-600">
          Join us and start earning today!
        </p>
      </header>

      {/* Opportunities Section */}
      <section className="bg-white p-8 rounded-2xl shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Opportunities Provided
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Opportunity 1 */}
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl text-center">
            <FaMotorcycle className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Flexible Hours
            </h3>
            <p className="text-gray-600">Work whenever it suits you.</p>
          </div>
          {/* Opportunity 2 */}
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl text-center">
            <FaMoneyBillAlt className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Weekly Payments
            </h3>
            <p className="text-gray-600">Get paid every week without delays.</p>
          </div>
          {/* Opportunity 3 */}
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl text-center">
            <FaClock className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Incentives
            </h3>
            <p className="text-gray-600">Earn extra for more deliveries.</p>
          </div>
          {/* Opportunity 4 */}
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl text-center">
            <FaHandshake className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Supportive Team
            </h3>
            <p className="text-gray-600">We’re here to help you succeed.</p>
          </div>
          {/* Opportunity 5 */}
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl text-center">
            <FaChartLine className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Growth Opportunities
            </h3>
            <p className="text-gray-600">Climb the ladder with us.</p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="bg-white p-8 rounded-2xl shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Terms and Conditions
        </h2>
        <div className="space-y-6">
          {/* Term 1 */}
          <div className="flex items-start space-x-4">
            <GiCheckMark className="text-2xl text-green-500 mt-1" />
            <p className="text-gray-700">
              You must have a valid ID and vehicle.
            </p>
          </div>
          {/* Term 2 */}
          <div className="flex items-start space-x-4">
            <GiCheckMark className="text-2xl text-green-500 mt-1" />
            <p className="text-gray-700">
              Deliveries must be completed on time.
            </p>
          </div>
          {/* Term 3 */}
          <div className="flex items-start space-x-4">
            <GiCheckMark className="text-2xl text-green-500 mt-1" />
            <p className="text-gray-700">
              You are responsible for your own safety and vehicle maintenance.
            </p>
          </div>
          {/* Term 4 */}
          <div className="flex items-start space-x-4">
            <GiCheckMark className="text-2xl text-green-500 mt-1" />
            <p className="text-gray-700">
              Any misconduct will result in termination.
            </p>
          </div>
        </div>
      </section>

      {/* Earnings Section */}
      <section className="bg-white p-8 rounded-2xl shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Earnings per Delivery
        </h2>
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-600 mb-4">₹50 - ₹100</p>
          <p className="text-gray-700">
            per delivery, depending on distance and order size.
          </p>
          <p className="text-gray-700 mt-2">
            Additional incentives for completing more than 20 deliveries in a
            week.
          </p>
        </div>
      </section>

      {/* Register Button */}
      <section className="text-center">
        <button
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          onClick={() => navigate("/deliveryregister")}
        >
          Register Now
        </button>
      </section>

      {/* Footer Section */}
      <footer className="mt-16 text-center text-gray-600">
        <p>Contact us: support@deliveryapp.com | +91 9876543210</p>
        <p>© 2024 Delivery App. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default DeliveryBoyHome;
