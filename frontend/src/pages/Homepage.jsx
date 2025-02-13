import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ShopImage from "../assets/woman.png"; // Importing the girl image

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-[#0f172a] text-white overflow-hidden">
      {/* Small Floating Blocks Background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-4 h-4 bg-blue-500/50 rounded-sm"
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 50 - 25, 0],
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

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#1e293b] p-5 flex flex-col space-y-4 text-center z-50 md:hidden">
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
      )}
      <div className="container mt-0 mx-auto">
        <h1 className="text-4xl font-bold text-center ">Welcome to ShopEase</h1>
        <p className="text-center text-gray-400 mt-4">
          The best place to grow your business and reach more customers.<br></br>
           give
          your business a new height with ShopEase. We provide the best platform
          to sell your products online.
        </p>
      </div>

      {/* Main Content with Responsive Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 w-full px-6 md:px-16">
        {/* First Card with Image */}
        {/* <div className="relative flex items-center justify-center md:justify-start"> */}
        {/* Image Positioned to Hold the Card */}
        <img
          src={ShopImage}
          alt="Shop Showcase"
          className="absolute -left-60 ml-85 w-40 h-65 z-20"
        />

        {/* Card 1 */}
        <motion.div
          className="relative p-20 w-90  ml-40  bg-gray-900/80 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-3xl text-center transform transition-all duration-300"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          whileHover={{ scale: 1.1, rotate: 3 }}
        >
          <h2 className="text-2xl font-bold">Your Business, Our Customers</h2>
          <p className="text-gray-300 mt-4">
            Expand your reach and grow faster.
          </p>
          <button className="mt-20 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
            Read More
          </button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="p-20 w-90  bg-gray-900/80 ml-20 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-3xl text-center transform transition-all duration-300"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          whileHover={{ scale: 1.1, rotate: -3 }}
        >
          <h2 className="text-2xl font-bold">Make Your Business Online</h2>
          <p className="text-gray-300 mt-4">
            Sell your products and reach more customers online.
          </p>
          <button className="mt-15 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300">
            Learn More
          </button>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="p-20 w-90  bg-gray-900/80 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-3xl text-center transform transition-all duration-300"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ scale: 1.1, rotate: 3 }}
        >
          <h2 className="text-2xl font-bold">See Subscription</h2>
          <p className="text-gray-300 mt-4">
            Choose the best plan for your business.
          </p>
          <button className="mt-30 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300">
            See More
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center p-4 bg-[#1e293b] text-gray-300">
        © 2025 ShopEase. All Rights Reserved.
      </footer>
    </div>
  );
};

export default HomePage;
