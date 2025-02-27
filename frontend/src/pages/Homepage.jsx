import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ShopImage from "../assets/woman.png"; // Importing the girl image
import Delivery from "../assets/delivery.png"; // Importing the delivery image
import imageone from "../assets/image1.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userData } = useContext(AppContext);

   const navigate = useNavigate();

  return (
    
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-[#e8f7ff]  text-black overflow-hidden">
      {/* Small Floating Blocks Background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array(40)
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
                duration: Math.random() * 10 + 5,
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
      <div className="absolute inset-0 overflow-hidden">
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-4 h-4 bg-red-400 rounded-sm"
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
      <div className="absolute inset-0 overflow-hidden">
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-4 h-4 bg-yellow-400  rounded-lg"
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

      <Navbar />
      {/* Welcome Section */}

      <div className="container mt-35 mx-auto text-center relative">
        <h1 className="text-4xl font-bold">
          Welcome to{" "}
          <span className="text-red-400 drop-shadow-lg">ShopEase</span>
        </h1>
        <p className="text-gray-800 drop-shadow-lg mt-4">
          The best place to grow your business and reach more customers.
          <br />
          Give your business a new height with ShopEase.
        </p>

        {/* Animated Delivery Boy */}
        <motion.div
          className="absolute top-0  right-70 bottom-5 flex items-center"
          initial={{ x: "100vw" }} // Start completely outside the screen
          animate={{ x: 0 }} // Moves from right to stop beside text
          transition={{ duration: 5, type: "spring", stiffness: 20 }}
        >
          {/* Speech Bubble */}
          <div className="bg-orange-200 shadow-lg text-black px-4 py-2 rounded-lg text-lg font-semibold absolute -top-12 -left-20">
            Hey {userData ? userData.name : "Developer"}!
          </div>

          {/* Delivery Boy Image */}
          <motion.img
            src={Delivery}
            alt="Delivery Boy"
            className="w-48 h-auto   drop-shadow-xl"
            animate={{ y: [0, -10, 0] }} // Adds the slight bounce
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <div className="relative   mt-7">
        {/* Background Image */}
        <img
          className="w-full h-auto drop-shadow-lg"
          src={imageone}
          alt="imageone"
        />

        {/* Text on Image (Left Side) */}

        <h1 className="absolute top-40 left-35 drop-shadow-lg text-white text-4xl font-bold p-4 rounded-lg">
          <motion.span
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Join the{" "}
            <span className="text-red-400 drop-shadow-lg">ShopEase</span>{" "}
            Revolution
          </motion.span>
        </h1>

        <motion.h3
          className="absolute top-60 left-40 drop-shadow-md text-yellow-400 text-2xl"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Are you ready to take your business to the next level?
        </motion.h3>

        <motion.h4
          className="absolute top-70 left-40 drop-shadow-md text-yellow-400 text-xl"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          Take our subscription plan and start growing your business.
        </motion.h4>

        <motion.button
          onClick={() => navigate("/subscription")}
          className="absolute top-90 left-40 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white drop-shadow-lg font-semibold rounded-lg"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          Subscribe Now →
        </motion.button>
      </div>

      {/* Main Content with Responsive Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 w-full px-6 md:px-16">
        {/* Floating Image */}
        <motion.img
          src={ShopImage}
          alt="Shop Showcase"
          className="absolute -left-60 ml-85 w-40 h-65 z-20 drop-shadow-xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Cards */}
        <motion.div
          className="relative mb-35 p-20 w-90 ml-40 bg-black/10 backdrop-blur-lg  shadow-xl rounded-3xl text-center"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <h2 className="text-2xl font-bold text-black">
            Your Business, Our Customers
          </h2>
          <p className="text-black-400 mt-4">
            Expand your reach and grow faster.
          </p>
          <button
          onClick={() => navigate("/workingdetails")}
           className="mt-20 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
            Read More
          </button>
        </motion.div>

        <motion.div
          className="p-20 mb-35 w-90 bg-black/10 ml-20 backdrop-blur-lg  shadow-xl rounded-3xl text-center"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          whileHover={{ scale: 1.1}}
        >
          <h2 className="text-2xl font-bold text-black">
            Make Your Business Online
          </h2>
          <p className="text-black-400 mt-4">
            Sell your products and reach more customers online.
          </p>
          <button 
          onClick={() => navigate("/shopregister")}
          className="mt-15 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg">
            Register Now
          </button>
        </motion.div>

        <motion.div
          className="p-20 mb-35 w-90 bg-black/10 backdrop-blur-lg shadow-xl rounded-3xl text-center"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ scale: 1.1}}
        >
          <h2 className="text-2xl font-bold text-black">See Subscription</h2>
          <p className="text-black-400 mt-4">
            Choose the best plan for your business.
          </p>
          <button 
          onClick={() => navigate("/subscription")}
          className="mt-30 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg">
            See More
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;




