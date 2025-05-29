
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBicycle,
  FaIdCard,
  FaFileAlt,
  FaLock,
  FaCheckCircle,
  FaMapMarkerAlt
} from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaMoneyBillWave , FaClock, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


const DeliveryBoyRegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    vehicletype: "",
    licenseNumber: "",
    panNumber: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [activeStep, setActiveStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "vehicletype" && value === "cycle") {
      setFormData({ ...formData, [name]: value, licenseNumber: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateStep = () => {
    const newErrors = {};
    
    if (activeStep === 1) {
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
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }
    }
    
    if (activeStep === 2) {
      if (!formData.vehicletype) newErrors.vehicletype = "Vehicle Type is required";
      if (formData.vehicletype !== "cycle" && !formData.licenseNumber) {
        newErrors.licenseNumber = "License Number is required";
      }
      if (!formData.panNumber) {
        newErrors.panNumber = "PAN Card is required";
      } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber)) {
        newErrors.panNumber = "Invalid PAN format (e.g., ABCDE1234F)";
      }
      if (!formData.address) newErrors.address = "Address is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;
    
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/deliverydash');
      
      toast.success("Registration successful! Welcome to our delivery team!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        vehicletype: "",
        licenseNumber: "",
        panNumber: "",
        address: "",
      });
      setActiveStep(1);
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isMotorVehicle = formData.vehicletype && formData.vehicletype !== "cycle";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-indigo-100 rounded-full mb-6">
            <MdOutlineDeliveryDining className="text-4xl text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Join Our Delivery Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Become a delivery partner and earn competitive pay with flexible hours
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Registration Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full lg:w-2/3">
            {/* Progress Bar */}
            <div className="mb-10">
              <div className="flex justify-between relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
                <div 
                  className={`absolute top-1/2 h-1 bg-indigo-600 -translate-y-1/2 z-10 transition-all duration-500 ${
                    activeStep === 1 ? "w-1/2" : "w-full"
                  }`}
                ></div>
                
                {[1, 2].map((step) => (
                  <div key={step} className="relative z-20">
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        activeStep >= step 
                          ? "bg-indigo-600 text-white" 
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <span className="text-lg font-bold">{step}</span>
                    </div>
                    <div className="mt-2 text-sm font-medium text-gray-600">
                      {step === 1 ? "Account Info" : "Vehicle & Address"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {activeStep === 1 && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <div className="flex items-center gap-2">
                          <FaUser className="text-indigo-600" />
                          <span>Full Name <span className="text-red-500">*</span></span>
                        </div>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 border-2 ${
                          errors.fullName ? "border-red-500" : "border-gray-200"
                        } rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <div className="flex items-center gap-2">
                          <FaEnvelope className="text-indigo-600" />
                          <span>Email <span className="text-red-500">*</span></span>
                        </div>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 border-2 ${
                          errors.email ? "border-red-500" : "border-gray-200"
                        } rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <div className="flex items-center gap-2">
                          <FaPhone className="text-indigo-600" />
                          <span>Phone <span className="text-red-500">*</span></span>
                        </div>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 border-2 ${
                          errors.phone ? "border-red-500" : "border-gray-200"
                        } rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Password */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <div className="flex items-center gap-2">
                          <FaLock className="text-indigo-600" />
                          <span>Password <span className="text-red-500">*</span></span>
                        </div>
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 border-2 ${
                          errors.password ? "border-red-500" : "border-gray-200"
                        } rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                        placeholder="Create a password"
                      />
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.password}
                        </p>
                      )}
                      <div className="text-xs text-gray-500 mt-2">
                        Must be at least 6 characters
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                      Next Step <span className="text-lg">→</span>
                    </button>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Vehicle Type */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <div className="flex items-center gap-2">
                          <GiSteeringWheel className="text-indigo-600" />
                          <span>Vehicle Type <span className="text-red-500">*</span></span>
                        </div>
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { value: "bike", label: "Bike" },
                          { value: "scooter", label: "Scooter" },
                          { value: "cycle", label: "Cycle" }
                        ].map((vehicle) => (
                          <div 
                            key={vehicle.value}
                            className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                              formData.vehicletype === vehicle.value 
                                ? "border-indigo-600 bg-indigo-50" 
                                : "border-gray-200 hover:border-indigo-300"
                            }`}
                            onClick={() => handleChange({ 
                              target: { 
                                name: "vehicletype", 
                                value: vehicle.value 
                              }
                            })}
                          >
                            <div className="text-center">
                              <div className="flex justify-center mb-2">
                                <div className="bg-indigo-100 p-3 rounded-full">
                                  <GiSteeringWheel className="text-xl text-indigo-600" />
                                </div>
                              </div>
                              <span className="font-medium">{vehicle.label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      {errors.vehicletype && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.vehicletype}
                        </p>
                      )}
                    </div>

                    {/* License Number */}
                    <div className={`relative ${!isMotorVehicle ? "opacity-70" : ""}`}>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <div className="flex items-center gap-2">
                          <FaIdCard className="text-indigo-600" />
                          <span>License Number {isMotorVehicle && <span className="text-red-500">*</span>}</span>
                        </div>
                      </label>
                      <input
                        type="text"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleChange}
                        disabled={!isMotorVehicle}
                        className={`w-full px-5 py-4 border-2 ${
                          errors.licenseNumber ? "border-red-500" : "border-gray-200"
                        } rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all ${
                          !isMotorVehicle ? "bg-gray-100 cursor-not-allowed" : ""
                        }`}
                        placeholder={
                          isMotorVehicle
                            ? "Enter license number"
                            : "Not required for cycle"
                        }
                      />
                      {errors.licenseNumber && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.licenseNumber}
                        </p>
                      )}
                    </div>

                    {/* PAN Card */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <div className="flex items-center gap-2">
                          <FaFileAlt className="text-indigo-600" />
                          <span>PAN Card Number <span className="text-red-500">*</span></span>
                        </div>
                      </label>
                      <input
                        type="text"
                        name="panNumber"
                        value={formData.panNumber}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 border-2 ${
                          errors.panNumber ? "border-red-500" : "border-gray-200"
                        } rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                        placeholder="Enter PAN number (e.g., ABCDE1234F)"
                        maxLength="10"
                      />
                      {errors.panNumber && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.panNumber}
                        </p>
                      )}
                    </div>

                    {/* Address */}
                    <div className="relative md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-indigo-600" />
                          <span>Address <span className="text-red-500">*</span></span>
                        </div>
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 border-2 ${
                          errors.address ? "border-red-500" : "border-gray-200"
                        } rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                        placeholder="Enter your full address"
                        rows="3"
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.address}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow hover:shadow-lg flex items-center gap-2"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <FaCheckCircle className="text-lg" /> Complete Registration

                        </>
                        
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Benefits Panel */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl shadow-xl p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">Why Join Us?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                    <FaMoneyBillWave className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Competitive Earnings</h3>
                    <p className="text-indigo-100 mt-1">Earn up to ₹800 per day with bonuses and incentives</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Flexible Schedule</h3>
                    <p className="text-indigo-100 mt-1">Work when you want - no fixed hours or shifts</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                    <FaBicycle className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Vehicle Support</h3>
                    <p className="text-indigo-100 mt-1">Get assistance with vehicle maintenance and insurance</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                    <FaShieldAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Safety First</h3>
                    <p className="text-indigo-100 mt-1">24/7 support and safety measures for all partners</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-indigo-400">
                <h3 className="font-bold text-lg mb-3">Earnings Potential</h3>
                <div className="bg-white bg-opacity-10 rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-indigo-200">Weekly Average</span>
                    <span className="font-bold">₹8,000 - ₹12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-200">Top Partners</span>
                    <span className="font-bold">₹15,000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center">
            <div className="bg-indigo-100 text-indigo-600 rounded-xl p-4 mr-4">
              <FaUser className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold">15,000+</h3>
              <p className="text-gray-600">Delivery Partners</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center">
            <div className="bg-indigo-100 text-indigo-600 rounded-xl p-4 mr-4">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold">50+ Cities</h3>
              <p className="text-gray-600">Across India</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center">
            <div className="bg-indigo-100 text-indigo-600 rounded-xl p-4 mr-4">
              <FaCheckCircle className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold">98%</h3>
              <p className="text-gray-600">Partner Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 py-8 bg-gradient-to-r from-gray-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center justify-center mb-4 md:mb-0">
              <MdOutlineDeliveryDining className="text-3xl mr-3 text-indigo-400" />
              <h3 className="text-xl font-bold">SwiftDrop Delivery</h3>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-indigo-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-indigo-300 transition-colors">Help Center</a>
            </div>
          </div>
          <p className="text-gray-400">
            © 2023 SwiftDrop Delivery. All rights reserved. | Contact: support@swiftdrop.com | +91 9876543210
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DeliveryBoyRegisterForm;