import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { FaUserAlt, FaStore, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTag } from "react-icons/fa";

const Shopregister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ownerName: "",
    shopName: "",
    phoneNumber: "",
    email: "",
    shopAddress: "",
    category: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would make the API call here
      // const response = await axios.post("http://localhost:4000/api/shops/register", formData);
      
      // Simulate successful registration
      console.log("Shop registration successful:", formData);
      navigate("/confirmshopdetails", { state: formData });
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred during registration.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Left Side - Illustration and Text */}
        <div className="md:w-1/2 flex flex-col items-center justify-center mb-10 md:mb-0 md:pr-10">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
              Grow Your Business <br />With <span className="text-blue-600">LocalShop</span>
            </h1>
            <p className="text-gray-600 mb-8 text-center md:text-left">
              Register your shop to reach thousands of local customers. Increase your visibility and sales with our powerful marketplace platform.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-md flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-3">
                  <FaUserAlt className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Easy Setup</h3>
                  <p className="text-sm text-gray-600">Get started in minutes</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-md flex items-center">
                <div className="bg-indigo-100 p-3 rounded-lg mr-3">
                  <FaStore className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Reach More</h3>
                  <p className="text-sm text-gray-600">Access local customers</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-md flex items-center">
                <div className="bg-green-100 p-3 rounded-lg mr-3">
                  <FaTag className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Free Listing</h3>
                  <p className="text-sm text-gray-600">No registration fees</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-md flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg mr-3">
                  <FaMapMarkerAlt className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Local Focus</h3>
                  <p className="text-sm text-gray-600">Target your community</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Why Register?</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Get discovered by local customers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Manage your shop profile online</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Receive orders directly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Promote special offers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Right Side - Registration Form */}
        <div className="md:w-1/2 mt-12 max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white text-center">
              <h2 className="text-2xl font-bold">Shop Registration</h2>
              <p className="opacity-90">Join our marketplace in just a few steps</p>
            </div>
            
            <div className="p-6 sm:p-8">
              {error && (
                <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200">
                  {error}
                </div>
              )}
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Owner Name
                  </label>
                  <div className={`relative rounded-lg border ${focusedField === "ownerName" ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-300"}`}>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUserAlt className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
                      onFocus={() => handleFocus("ownerName")}
                      onBlur={handleBlur}
                      placeholder="Enter Owner Name"
                      className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-700 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Shop Name
                  </label>
                  <div className={`relative rounded-lg border ${focusedField === "shopName" ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-300"}`}>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaStore className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="shopName"
                      value={formData.shopName}
                      onChange={handleChange}
                      onFocus={() => handleFocus("shopName")}
                      onBlur={handleBlur}
                      placeholder="Enter Shop Name"
                      className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-700 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className={`relative rounded-lg border ${focusedField === "phoneNumber" ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-300"}`}>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      onFocus={() => handleFocus("phoneNumber")}
                      onBlur={handleBlur}
                      placeholder="Enter Phone Number"
                      className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-700 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className={`relative rounded-lg border ${focusedField === "email" ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-300"}`}>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      placeholder="Enter Email Address"
                      className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-700 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Shop Address
                  </label>
                  <div className={`relative rounded-lg border ${focusedField === "shopAddress" ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-300"}`}>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaMapMarkerAlt className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="shopAddress"
                      value={formData.shopAddress}
                      onChange={handleChange}
                      onFocus={() => handleFocus("shopAddress")}
                      onBlur={handleBlur}
                      placeholder="Enter Shop Address"
                      className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-700 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Shop Category
                  </label>
                  <div className={`relative rounded-lg border ${focusedField === "category" ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-300"}`}>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaTag className="text-gray-400" />
                    </div>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      onFocus={() => handleFocus("category")}
                      onBlur={handleBlur}
                      className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-700 bg-white focus:outline-none appearance-none"
                      required
                    >
                      <option value="" disabled>Select Category</option>
                      <option value="grocery">Grocery Store</option>
                      <option value="electronics">Electronics</option>
                      <option value="fashion">Fashion & Apparel</option>
                      <option value="restaurant">Restaurant & Food</option>
                      <option value="pharmacy">Pharmacy</option>
                      <option value="beauty">Beauty & Salon</option>
                      <option value="books">Books & Stationery</option>
                      <option value="hardware">Hardware & Tools</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-xl font-medium text-white shadow-lg transition-all duration-300 ${
                      isSubmitting 
                        ? "bg-blue-400 cursor-not-allowed" 
                        : "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      "Register Shop"
                    )}
                  </button>
                </div>
              </form>
              
              <div className="mt-6 text-center text-sm text-gray-600">
                <p>By registering, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shopregister;