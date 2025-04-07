import { motion } from "framer-motion";
import { useState } from "react";
import photo from "../assets/members.jpg";
import aboutus from "../assets/register2.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const teamMembers = [
  {
    name: "Sourav Roy",
    role: "CEO & Founder",
    image: "Sourav.jpg",
    message: "Hello, I am Sourav, CEO of this company",
  },
  {
    name: "Sunabha Panda boss",
    role: "CTO",
    image: "charlie.jpg",
    message: "Warakkam, I am Sunabha, CTO of this company",
  },
  {
    name: "Azijul Munsi",
    role: "COO",
    image: "bob.jpg",
    message: "Aslam Wale Kum, I am Azijul, COO of this company",
  },
];

const AboutUs = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div>
      <Navbar />
    <motion.div
      className="min-h-screen  bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 text-white flex flex-col items-center p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-6xl bg-gray-700 mt-20 mb-20 shadow-2xl rounded-2xl p-12 text-center border border-gray-700"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-white mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          About ShopEase
        </motion.h1>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          Welcome to <span className="text-blue-400 font-bold">ShopEase</span>!
          We are committed to making online shopping seamless, secure, and
          enjoyable for everyone. Our goal is to provide top-notch services with
          a user-friendly experience.
        </p>

        <h2 className="text-4xl font-semibold text-blue-400 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          At ShopEase, our mission is to revolutionize e-commerce by blending
          innovation, efficiency, and customer satisfaction into a seamless
          shopping experience.
        </p>

        <h2 className="text-4xl font-semibold text-blue-400 mb-4">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-700 p-8 rounded-lg shadow-lg flex  flex-col items-center border border-gray-600 hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <motion.img
                src={photo}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 border-4 border-blue-400"
                whileHover={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
              <h3 className="text-2xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-blue-300 text-lg">{member.role}</p>
              {hoveredMember === index && (
                <motion.div
                  className="absolute -top-28 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-6 py-3 rounded-lg shadow-xl border border-gray-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="relative">
                    <p className="text-center font-semibold">
                      {member.message}
                    </p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rotate-45 border border-gray-300"></div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <h2 className="text-4xl font-semibold text-blue-400 mt-12 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-300 text-lg">
          Email: <span className="text-blue-300">support@shopease.com</span>
        </p>
        <p className="text-gray-300 text-lg">
          Phone: <span className="text-blue-300">(987) 654-3210</span>
        </p>
      </motion.div>
    </motion.div>
    
    </div>
  );
};

export default AboutUs;
