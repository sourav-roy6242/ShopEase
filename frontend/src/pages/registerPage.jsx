import { useState } from "react";
import { motion } from "framer-motion";

const Register = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-[#0f172a] text-white">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500 opacity-50 blur-3xl rounded-full"
          animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", left: "15%" }}
        ></motion.div>

        <motion.div
          className="absolute w-96 h-96 bg-purple-600 opacity-50 blur-3xl rounded-full"
          animate={{ x: [0, -30, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "5%", right: "10%" }}
        ></motion.div>
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-5 bg-[#1e293b] shadow-lg">
        <div className="text-2xl font-bold text-white">ShopEase</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-lg hover:text-blue-400">
            Home
          </a>
          <a href="#" className="text-lg hover:text-blue-400">
            About Us
          </a>
          <a href="#" className="text-lg hover:text-blue-400">
            Login
          </a>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-2 right-8 bg-gray-800 p-5 rounded-lg z-50 md:hidden">
          <a href="#" className="block py-1 text-lg hover:text-blue-400">
            Home
          </a>
          <a href="#" className="block py-1 text-lg hover:text-blue-400">
            About Us
          </a>
          <a href="#" className="block py-1 text-lg hover:text-blue-400">
            Login
          </a>
        </div>
      )}

      {/* Registration Form */}
      <motion.div
        className="relative z-10 p-8 rounded-3xl shadow-xl bg-gray-900/80 backdrop-blur-lg w-full max-w-lg border border-gray-700"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-white">
          Register Your Shop
        </h2>
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Shop Name"
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Shop Owner Name"
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Shop Address"
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Owner Email"
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Owner Mobile Number"
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300">
            Register
          </button>
        </form>
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center p-4 bg-[#1e293b] text-gray-300">
        © 2025 ShopEase. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Register;
