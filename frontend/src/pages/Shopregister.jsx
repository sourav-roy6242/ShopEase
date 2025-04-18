import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Register from "../assets/register.jpg";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

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

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

 
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:4000/api/shops/register",
  //       formData
  //     );
  //     console.log(response.data);
  //     navigate("/confirm-shop-details", { state: formData });
  //     console.log("Sending shop data to backend:", shopData);
  //   } catch (error) {
  //     console.error("Error:", error.response?.data);
  //     setError(error.response?.data?.message || "An error occurred.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // ✅ Get values from formData correctly
    const shopData = {
      shopName: formData.shopName,
      ownerName: formData.ownerName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      shopAddress: formData.shopAddress,
      category: formData.category,
    };
  
    console.log("Sending shop data to backend:", shopData);
  
    try {
      const response = await fetch("http://localhost:4000/api/shops/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shopData),
      });
  
      const data = await response.json();
      console.log("Response from backend:", data);
  
      if (!response.ok) {
        console.error("Registration failed:", data);
        alert(`Error: ${data.message}`);
        return;
      }
  
      if (data.shop && data.shop._id) {
        localStorage.setItem("shopId", data.shop._id);
        console.log("Stored shopId in localStorage:", data.shop._id);
      } else {
        console.error("shopId is missing in response:", data);
      }
  
      navigate("/confirm-shop-details", { state: formData });
    } catch (error) {
      console.error("Error registering shop:", error);
    }
  };
  
  
  return (
    <div>
      
      
      <div
        className="relative w-full h-screen flex items-center justify-end bg-cover bg-center bg-no-repeat px-16"
        style={{ backgroundImage: `url(${Register})` }}
      >
        <Navbar />
       
        <div className="absolute inset-0 bg-black/10 bg-opacity-20"></div>

        <div className="relative z-10 mr-20 bg-black/15 bg-opacity-50 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-lg w-full">
          <h2 className="text-3xl drop-shadow-lg font-bold text-black text-center mb-6">
            Shop Registration
          </h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form
            className="space-y-4 bg-black/5 bg-opacity-30 p-6 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-bold text-black mb-1">
                Owner Name
              </label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="Enter Owner Name"
                className="w-full p-3 rounded-lg bg-white/30 text-black placeholder-gray-600 outline-none border border-gray-300 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-1">
                Shop Name
              </label>
              <input
                type="text"
                name="shopName"
                value={formData.shopName}
                onChange={handleChange}
                placeholder="Enter Shop Name"
                className="w-full p-3 rounded-lg bg-white/30 text-black placeholder-gray-600 outline-none border border-gray-300 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="w-full p-3 rounded-lg bg-white/30 text-black placeholder-gray-600 outline-none border border-gray-300 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full p-3 rounded-lg bg-white/30 text-black placeholder-gray-600 outline-none border border-gray-300 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-1">
                Shop Address
              </label>
              <input
                type="text"
                name="shopAddress"
                value={formData.shopAddress}
                onChange={handleChange}
                placeholder="Enter Shop Address"
                className="w-full p-3 rounded-lg bg-white/30 text-black placeholder-gray-600 outline-none border border-gray-300 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-1">
                Shop Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/30 text-black outline-none border border-gray-300 focus:border-blue-500"
              >
                <option value="">Select Category</option>
                <option value="grocery">Grocery</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="restaurant">Restaurant</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition"
            >
              Register Shop
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shopregister;


