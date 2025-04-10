// import { motion } from "framer-motion";
// import { useState } from "react";
// import photo from "../assets/members.jpg";
// import aboutus from "../assets/register2.jpg";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// const teamMembers = [
//   {
//     name: "Sourav Roy",
//     role: "CEO & Founder",
//     image: "Sourav.jpg",
//     message: "Hello, I am Sourav, CEO of this company",
//   },
//   {
//     name: "Sunabha Panda",
//     role: "CTO",
//     image: "charlie.jpg",
//     message: "Warakkam, I am Sunabha, CTO of this company",
//   },
//   {
//     name: "Azijul Munsi",
//     role: "COO",
//     image: "bob.jpg",
//     message: "Aslam Wale Kum, I am Azijul, COO of this company",
//   },
// ];

// const AboutUs = () => {
//   const [hoveredMember, setHoveredMember] = useState(null);

//   return (
//     <div>
     
//     <motion.div
//       className="min-h-screen  bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 text-white flex flex-col items-center p-10"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <motion.div
//         className="max-w-6xl bg-gray-700 mt-20 mb-20 shadow-2xl rounded-2xl p-12 text-center border border-gray-700"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         <motion.h1
//           className="text-5xl font-extrabold text-white mb-8"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//         >
//           About ShopEase
//         </motion.h1>
//         <p className="text-gray-300 mb-8 text-lg leading-relaxed">
//           Welcome to <span className="text-blue-400 font-bold">ShopEase</span>!
//           We are committed to making online shopping seamless, secure, and
//           enjoyable for everyone. Our goal is to provide top-notch services with
//           a user-friendly experience.
//         </p>

//         <h2 className="text-4xl font-semibold text-blue-400 mb-4">
//           Our Mission
//         </h2>
//         <p className="text-gray-300 mb-8 text-lg leading-relaxed">
//           At ShopEase, our mission is to revolutionize e-commerce by blending
//           innovation, efficiency, and customer satisfaction into a seamless
//           shopping experience.
//         </p>

//         <h2 className="text-4xl font-semibold text-blue-400 mb-4">
//           Meet the Team
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               className="relative bg-gray-700 p-8 rounded-lg shadow-lg flex  flex-col items-center border border-gray-600 hover:shadow-2xl transition"
//               whileHover={{ scale: 1.05 }}
//               onMouseEnter={() => setHoveredMember(index)}
//               onMouseLeave={() => setHoveredMember(null)}
//             >
//               <motion.img
//                 src={photo}
//                 alt={member.name}
//                 className="w-32 h-32 rounded-full mb-4 border-4 border-blue-400"
//                 whileHover={{ rotate: [0, 5, -5, 0] }}
//                 transition={{
//                   duration: 0.5,
//                   repeat: Infinity,
//                   repeatType: "mirror",
//                 }}
//               />
//               <h3 className="text-2xl font-semibold text-white">
//                 {member.name}
//               </h3>
//               <p className="text-blue-300 text-lg">{member.role}</p>
//               {hoveredMember === index && (
//                 <motion.div
//                   className="absolute -top-28 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-6 py-3 rounded-lg shadow-xl border border-gray-300"
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                 >
//                   <div className="relative">
//                     <p className="text-center font-semibold">
//                       {member.message}
//                     </p>
//                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rotate-45 border border-gray-300"></div>
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>

//         <h2 className="text-4xl font-semibold text-blue-400 mt-12 mb-4">
//           Contact Us
//         </h2>
//         <p className="text-gray-300 text-lg">
//           Email: <span className="text-blue-300">support@shopease.com</span>
//         </p>
//         <p className="text-gray-300 text-lg">
//           Phone: <span className="text-blue-300">(987) 654-3210</span>
//         </p>
//       </motion.div>
//     </motion.div>
    
//     </div>
//   );
// };

// export default AboutUs;




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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
     
      
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
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
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
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Creating a seamless bridge between local businesses and digital commerce, 
              empowering entrepreneurs to thrive in the modern marketplace.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[500, 100].map((number, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {number}+
                  </div>
                  <div className="text-gray-400 text-sm">
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
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-cyan-400/30 transition-all h-full">
                  <div className="relative mb-6">
                    <motion.img
                      src={photo}
                      alt={member.name}
                      className="w-48 h-48 object-cover rounded-full mx-auto border-4 border-cyan-400/50 shadow-xl"
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
                  <h3 className="text-2xl font-bold text-center text-white mb-2">
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
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
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
          className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-3xl p-12 text-center backdrop-blur-sm border border-cyan-400/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400 mb-8">
            Get In Touch
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <span className="text-gray-300">support@shopease.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-gray-300">(987) 654-3210</span>
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