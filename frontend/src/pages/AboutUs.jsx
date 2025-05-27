
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import photo from "../assets/members.jpg";
import aboutus from "../assets/register2.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamMembers = [
  {
    name: "Sourav Roy",
    role: "CEO & Founder",
    image: "Sourav.jpg",
    message: "Visionary leader driving digital transformation",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Sunabha Panda",
    role: "CTO",
    image: "charlie.jpg",
    message: "Tech innovator building tomorrow's solutions",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Azijul Munsi",
    role: "COO",
    image: "bob.jpg",
    message: "Operations expert ensuring seamless experiences",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "#"
    }
  },
];

const AboutUs = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 }
    }
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
       <div className="min-h-screen bg-white">
     
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        {/* Hero Section */}
        <motion.div
          className="text-center mb-28"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
          >
            About ShopEase
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed"
          >
            Revolutionizing e-commerce through innovation and customer-centric solutions
          </motion.p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-28 items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src={aboutus}
              alt="Mission"
              className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Creating a seamless bridge between local businesses and digital commerce, 
              empowering entrepreneurs to thrive in the modern marketplace.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[500, 100].map((number, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-cyan-400 shadow-lg flex flex-col items-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {number}+
                  </div>
                  <div className="text-gray-600 text-sm">
                    {index === 0 ? "Happy Clients" : "Active Partners"}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600 mb-16">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
                onHoverStart={() => setHoveredMember(index)}
                onHoverEnd={() => setHoveredMember(null)}
              >
                <div className="absolute inset-0  bg-gradient-to-br from-cyan-600/20 to-blue-700/20 rounded-3xl  " />
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-cyan-400/30 transition-all h-full">
                  <div className="relative  mb-6">
                    <motion.img
                      src={photo}
                      alt={member.name}
                      className="w-48  h-48 object-cover rounded-full mx-auto border-4 border-cyan-400/50 shadow-xl"
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    {hoveredMember === index && (
                      <motion.div
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-3 rounded-2xl text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                      >
                        <div className="relative">
                          <p className="text-white font-medium">{member.message}</p>
                          <div className="absolute -bottom-4 left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-600 to-blue-700 transform -translate-x-1/2 rotate-45" />
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-center text-black/60 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-center text-cyan-400 mb-6">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    {Object.entries(member.socials).map(([platform, link]) => {
                      const Icon = {
                        linkedin: FaLinkedin,
                        github: FaGithub,
                        twitter: FaTwitter,
                        email: FaEnvelope
                      }[platform];
                      
                      return (
                        <motion.a
                          key={platform}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black/70 hover:text-cyan-400 transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon className="w-6 h-6" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className=" bg-gradient-to-br from-cyan-600/20 to-blue-700/20 rounded-3xl p-12 text-center backdrop-blur-sm border border-cyan-400/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-8">
            Get In Touch
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <span className="text-black">support@shopease.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-black">(987) 654-3210</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

     
    </div>
  );
};

export default AboutUs;