import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0  left-0 w-full flex items-center justify-between p-5 bg-[#516c98] drop-shadow-lg z-50">
      <div className="text-2xl font-bold text-white">
        <span className="text-red-400 ml-20 font-bold drop-shadow-lg">ShopEase</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10 ">
        <a href="#" className="text-white hover:text-blue-400">
          Home
        </a>
        <a href="#" className="text-white hover:text-blue-400">
          About Us
        </a>
        <a href="#" className="text-white hover:text-blue-400">
          Contact Us
        </a>
        <a href="#" className="text-white mr-20 hover:text-blue-400">
          Login
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#1e293b] p-5 flex flex-col space-y-4 text-center z-50 md:hidden">
          <a href="#" className="text-lg text-white hover:text-blue-400">
            Home
          </a>
          <a href="#" className="text-lg text-white hover:text-blue-400">
            About Us
          </a>
          <a href="#" className="text-lg text-white hover:text-blue-400">
            Contact Us
          </a>
          <a href="#" className="text-lg text-white hover:text-blue-400">
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
