import React from "react";
import Register from "../assets/register.jpg";
import Navbar from "../components/Navbar";
import RegisterTwo from "../assets/register2.jpg";
import Footer from "../components/footer";
const Shopregister = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img
          src={RegisterTwo}
          alt="register"
          className="relative w-full h-screen flex items-center justify-end bg-cover bg-center  bg-no-repeat "
        />
      </div>
      <div
        className="relative w-full h-screen flex items-center justify-end bg-cover bg-center  bg-no-repeat px-16"
        style={{ backgroundImage: `url(${Register})` }} // ✅ Proper background image
      >
        {/* Overlay - Soft Transparency (Fixes Blackout Issue) */}
        <div className="absolute inset-0 bg-black/10 bg-opacity-20"></div>

        {/* Form Container */}
        <div className="relative z-10 mr-20 bg-black/15 bg-opacity-50 backdrop-blur-lg  p-10 rounded-2xl shadow-2xl  max-w-lg w-full">
          <h2 className="text-3xl drop-shadow-lg font-bold text-black text-center mb-6">
            Shop Registration
          </h2>

          {/* Form Fields */}
          <form className="space-y-4 bg-black/5 bg-opacity-30 p-6 rounded-lg shadow-lg">
            <div>
              <label className="block text-sm font-bold drop-shadow-lg text-black  mb-1">
                Owner Name
              </label>
              <input
                type="text"
                placeholder="Enter Owner Name"
                className="w-full p-3 rounded-lg bg-white/30 bg-opacity-20  text-black placeholder-gray-600 outline-none border border-gray-300 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block drop-shadow-lg text-black text-sm font-bold mb-1">
                Shop Name
              </label>
              <input
                type="text"
                placeholder="Enter Shop Name"
                className="w-full p-3 rounded-lg bg-white/30 bg-opacity-50 text-black placeholder-gray-600 outline-none border border-gray-300 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block drop-shadow-lg text-black text-sm font-bold mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full p-3 rounded-lg bg-white/30 bg-opacity-50 text-black placeholder-gray-600 outline-none border border-gray-300 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block drop-shadow-lg text-black font-bold text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-3 rounded-lg bg-white/30 bg-opacity-50 text-black placeholder-gray-600 outline-none border border-gray-300 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block drop-shadow-lg font-bold text-black text-sm mb-1">
                Shop Address
              </label>
              <input
                type="text"
                placeholder="Enter Shop Address"
                className="w-full p-3 rounded-lg bg-white/30 bg-opacity-50 text-black placeholder-gray-600 outline-none border border-gray-300 focus:border-blue-500"
              />
            </div>

            {/* Shop Category Dropdown */}
            <div>
              <label className="block text-black font-bold text-sm mb-1">
                Shop Category
              </label>
              <select className="w-full p-3 rounded-lg drop-shadow-lg bg-white/30 bg-opacity-50 text-black outline-none border border-gray-300 focus:border-blue-500">
                <option value="">Select Category</option>
                <option value="grocery">Grocery</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="restaurant">Restaurant</option>
              </select>
            </div>

            {/* Register Button */}
            <button className="w-full p-3 bg-blue-600/60 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition">
              Register Shop
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Shopregister;
