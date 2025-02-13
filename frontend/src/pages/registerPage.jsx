import { useState } from "react";
import { motion } from "framer-motion";

const Register = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-[#0f172a] text-white">
      {/* 3D Animated Background */}
     
      <div className="absolute inset-0 overflow-hidden">
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-5 h-5 bg-blue-500/50 shadow-lg rounded-sm"
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 60 - 30, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 8 + 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            ></motion.div>
          ))}
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-5 bg-[#1e293b] shadow-lg z-50">
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

      {/* Mobile Menu (Fix: Added z-50 to ensure visibility) */}
      {menuOpen && (
        <div className="absolute top-16 right-5 bg-gray-800 p-5 rounded-lg shadow-lg md:hidden z-50">
          <a href="#" className="block py-2 text-lg hover:text-blue-400">
            Home
          </a>
          <a href="#" className="block py-2 text-lg hover:text-blue-400">
            About Us
          </a>
          <a href="#" className="block py-2 text-lg hover:text-blue-400">
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
