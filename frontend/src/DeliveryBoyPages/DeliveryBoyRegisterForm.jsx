import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBicycle,
  FaIdCard,
  FaFileAlt,
} from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";

const DeliveryBoyRegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    vehicleType: "",
    licenseNumber: "",
    panNumber: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Clear license number if vehicle type changes to cycle
    if (name === "vehicleType" && value === "cycle") {
      setFormData({ ...formData, [name]: value, licenseNumber: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    // Common validations
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.vehicleType)
      newErrors.vehicleType = "Vehicle Type is required";
    if (!formData.panNumber) {
      newErrors.panNumber = "PAN Card is required";
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber)) {
      newErrors.panNumber = "Invalid PAN format (e.g., ABCDE1234F)";
    }
    if (!formData.address) newErrors.address = "Address is required";

    // License validation based on vehicle type
    if (formData.vehicleType !== "cycle" && !formData.licenseNumber) {
      newErrors.licenseNumber = "License Number is required for motor vehicles";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Registration Successful!");
      console.log("Form Data:", formData);
    }
  };

  const isMotorVehicle =
    formData.vehicleType && formData.vehicleType !== "cycle";

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mt-20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 hover:shadow-3xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🚚 Delivery Boy Registration
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaUser className="inline-block mr-2 text-blue-600" />
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 border-2 ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1 animate-pulse">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaEnvelope className="inline-block mr-2 text-blue-600" />
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 border-2 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 animate-pulse">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaPhone className="inline-block mr-2 text-blue-600" />
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 border-2 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 animate-pulse">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Vehicle Type */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <GiSteeringWheel className="inline-block mr-2 text-blue-600" />
                Vehicle Type <span className="text-red-500">*</span>
              </label>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 border-2 ${
                  errors.vehicleType ? "border-red-500" : "border-gray-300"
                } rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
              >
                <option value="">Select Vehicle Type</option>
                <option value="bike">Bike</option>
                <option value="scooter">Scooter</option>
                <option value="cycle">Cycle</option>
              </select>
              {errors.vehicleType && (
                <p className="text-red-500 text-sm mt-1 animate-pulse">
                  {errors.vehicleType}
                </p>
              )}
            </div>

            {/* License Number */}
            <div className={`relative ${!isMotorVehicle ? "opacity-50" : ""}`}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaIdCard className="inline-block mr-2 text-blue-600" />
                License Number{" "}
                {isMotorVehicle && <span className="text-red-500">*</span>}
              </label>
              <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                disabled={!isMotorVehicle}
                className={`mt-1 block w-full px-4 py-3 border-2 ${
                  errors.licenseNumber ? "border-red-500" : "border-gray-300"
                } rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                  !isMotorVehicle ? "bg-gray-100 cursor-not-allowed" : ""
                }`}
                placeholder={
                  isMotorVehicle
                    ? "Enter license number"
                    : "Not required for cycle"
                }
              />
              {errors.licenseNumber && (
                <p className="text-red-500 text-sm mt-1 animate-pulse">
                  {errors.licenseNumber}
                </p>
              )}
            </div>

            {/* PAN Card */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaFileAlt className="inline-block mr-2 text-blue-600" />
                PAN Card Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 border-2 ${
                  errors.panNumber ? "border-red-500" : "border-gray-300"
                } rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                placeholder="Enter PAN number (e.g., ABCDE1234F)"
                maxLength="10"
              />
              {errors.panNumber && (
                <p className="text-red-500 text-sm mt-1 animate-pulse">
                  {errors.panNumber}
                </p>
              )}
            </div>

            {/* Address */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaBicycle className="inline-block mr-2 text-blue-600" />
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 border-2 ${
                  errors.address ? "border-red-500" : "border-gray-300"
                } rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                placeholder="Enter your full address"
                rows="3"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1 animate-pulse">
                  {errors.address}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-102 active:scale-95 shadow-lg hover:shadow-xl"
              >
                 Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="mt-16 text-center text-gray-600">
        <p>Contact us: support@deliveryapp.com | +91 9876543210</p>
        <p>© 2024 Delivery App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DeliveryBoyRegisterForm;
