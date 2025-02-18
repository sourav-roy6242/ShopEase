// import React from "react";
import { motion } from "framer-motion";
import photo from '../assets/members.jpg'
import aboutus from '../assets/register2.jpg'

const teamMembers = [
  { name: "Sourav Roy", role: "CEO & Founder", image: "Sourav.jpg" },
  { name: "Azijul Munsi", role: "CTO", image: "bob.jpg" },
  { name: "Sunabha Panda", role: "COO", image: "charlie.jpg" }
];

const AboutUs = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gray-100 flex flex-col items-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      
    >
      <motion.div 
        className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          About ShopEase
        </motion.h1>
        <p className="text-gray-600 mb-6">
          Welcome to ShopEase! We are committed to making online shopping
          seamless, secure, and enjoyable for everyone. Our goal is to provide
          top-notch services with a user-friendly experience.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          At ShopEase, our mission is to revolutionize e-commerce by blending
          innovation, efficiency, and customer satisfaction into a seamless
          shopping experience.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.img 
                src={photo} 
                alt={member.name} 
                className="w-24 h-24 rounded-full mb-3"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">Contact Us</h2>
        <p className="text-gray-600">Email: support@shopease.com</p>
        <p className="text-gray-600">Phone: (987) 654-3210</p>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
