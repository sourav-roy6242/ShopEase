// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import heroVideo from "../assets/hero.mp4"; // ✅ Correct video import from src/assets
// import Navbar from "../components/Navbar";
// import AboutUs from "./AboutUs";
// import ContactUs from "./Contactus";

// export default function AdminPage() {
//   const [showHeading, setShowHeading] = React.useState(true);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setShowHeading(prev => !prev);
//     }, 4000); // Switch text every 4 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (

//     <div className=" text-white bg-gray-700">
//       <Navbar />
//     <div className="min-h-screen flex flex-col">
//       {/* Header */}
        

//       {/* Main Content */}
//       <main className="flex flex-1">
       

//         {/* Main Section */}
//         <section className="flex-1 p-6">
//           {/* Welcome Video Section */}
//           <div className="relative w-full h-[600px] rounded-xl mt-20 overflow-hidden shadow-lg mb-8">
//             <video
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="absolute top-0 left-0 w-full h-full object-cover z-0"
//             >
//               <source src={heroVideo} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
//               <AnimatePresence mode="wait">
//                 {showHeading ? (
//                   <motion.h2
//                     key="heading"
//                     className="text-5xl md:text-7xl font-black text-white mb-4 tracking-widest"
//                     initial={{ opacity: 1, x: -100 }}
//                     animate={{ opacity: 1, x: 5 }}
//                     exit={{ opacity: 0, x: 100 }}
//                     transition={{  duration: 1 }}
//                   >
//                     SHOPEASE
//                   </motion.h2>
//                 ) : (
//                   <motion.h2  
//                     key="subheading"
//                     className="text-4xl md:text-5xl text-white px-6 py-3 rounded-lg "
//                     initial={{ opacity: 0, x: -100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: 100 }}
//                     transition={{ duration: 1 }}
//                   >
//                     Hi, Admin — You are welcome in the admin page
//                   </motion.h2>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Tracking Buttons */}
//           <div className="flex justify-center space-x-6 mb-8">
//             <button className="rounded-full px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-semibold shadow-md transition duration-200">
//               Track Seller
//             </button>
//             <button className="rounded-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold shadow-md transition duration-200">
//               Track Buyer
//             </button>
//             <button className="rounded-full px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold shadow-md transition duration-200">
//               Track Orders
//             </button>
//           </div>

//           {/* About Section */}
//        <AboutUs />

//           {/* Contact Section */}
//          <ContactUs />
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white text-center p-4">
//         &copy; 2025 Shopease. All rights reserved.
//       </footer>
//     </div>
//     </div>
//   );
// }




// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import heroVideo from "../assets/hero.mp4";
// import Navbar from "../components/Navbar";
// import AboutUs from "./AboutUs";
// import ContactUs from "./Contactus";
// import { FaUserShield, FaMapMarkedAlt, FaShippingFast } from "react-icons/fa";
// import "@fontsource/orbitron"; // Install via: npm install @fontsource/orbitron


// function TrackingCards() {
//   return (
//     <div className="relative my-16 font-[Orbitron]">
//       {/* 🔮 Animated SVG Overlay */}
//       <svg className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="xMidYMid slice">
//         <defs>
//           <radialGradient id="glow" cx="50%" cy="50%" r="50%">
//             <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
//             <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
//           </radialGradient>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#glow)" />
//       </svg>

//       {/* 🪐 Card Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 py-12 relative z-10">
//         {trackingCards.map((card, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             whileHover={{ scale: 1.05 }}
//             className="relative group rounded-3xl p-6 bg-[#1e293b]/60 backdrop-blur-xl border border-white/10 shadow-[inset_0_0_12px_rgba(255,255,255,0.08),0_10px_25px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden h-[520px] flex flex-col justify-between"
//           >
//             {/* Gradient Blurs */}
//             <div className="absolute w-48 h-48 bg-gradient-to-br from-[#0ea5e9] to-[#14b8a6] rounded-full blur-3xl opacity-20 group-hover:opacity-40 top-0 left-0 transition-opacity duration-500" />
//             <div className="absolute w-32 h-32 bg-gradient-to-tr from-[#f43f5e] to-[#facc15] rounded-full blur-2xl opacity-20 bottom-0 right-0 group-hover:opacity-40 transition-opacity duration-500" />

//             {/* Content */}
//             <div className="relative z-10">
//               <div className="mb-4">{card.icon}</div>
//               <h3 className="text-xl md:text-2xl font-bold text-white tracking-widest mb-2">
//                 {card.title}
//               </h3>
//               <p className="text-sm text-gray-300 font-light leading-relaxed">
//                 {card.description}
//               </p>
//             </div>

//             {/* View Button */}
//             <motion.button
//               whileHover={{
//                 scale: 1.1,
//                 rotate: [0, 1, -1, 0],
//                 backgroundColor: "rgba(255,255,255,0.08)",
//                 boxShadow: "0 0 16px rgba(255,255,255,0.3)",
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="mt-6 self-start px-3 py-1.5 rounded-full text-xs font-semibold text-white border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300"
//             >
//               View
//             </motion.button>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// {/* Tracking Cards */}
// <TrackingCards />

//             {/* Tracking Cards */}
// // 🔥 Ultimate Futuristic Card Design
// function TrackingCards() {
//   return (
//     <div className="relative my-16 font-[Orbitron]">
//       {/* 🔮 Animated SVG Overlay */}
//       <svg className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="xMidYMid slice">
//         <defs>
//           <radialGradient id="glow" cx="50%" cy="50%" r="50%">
//             <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
//             <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
//           </radialGradient>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#glow)" />
//       </svg>

//       {/* 🪐 Card Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 py-12 relative z-10">
//         {trackingCards.map((card, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             whileHover={{ scale: 1.05 }}
//             className="relative group rounded-3xl p-6 bg-[#1e293b]/60 backdrop-blur-xl border border-white/10 shadow-[inset_0_0_12px_rgba(255,255,255,0.08),0_10px_25px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden h-[520px] flex flex-col justify-between"
//           >
//             {/* Gradient Blurs */}
//             <div className="absolute w-48 h-48 bg-gradient-to-br from-[#0ea5e9] to-[#14b8a6] rounded-full blur-3xl opacity-20 group-hover:opacity-40 top-0 left-0 transition-opacity duration-500" />
//             <div className="absolute w-32 h-32 bg-gradient-to-tr from-[#f43f5e] to-[#facc15] rounded-full blur-2xl opacity-20 bottom-0 right-0 group-hover:opacity-40 transition-opacity duration-500" />

//             {/* Content */}
//             <div className="relative z-10">
//               <div className="mb-4">{card.icon}</div>
//               <h3 className="text-xl md:text-2xl font-bold text-white tracking-widest mb-2">
//                 {card.title}
//               </h3>
//               <p className="text-sm text-gray-300 font-light leading-relaxed">
//                 {card.description}
//               </p>
//             </div>

//             {/* View Button */}
//             <motion.button
//               whileHover={{
//                 scale: 1.1,
//                 rotate: [0, 1, -1, 0],
//                 backgroundColor: "rgba(255,255,255,0.08)",
//                 boxShadow: "0 0 16px rgba(255,255,255,0.3)",
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="mt-6 self-start px-3 py-1.5 rounded-full text-xs font-semibold text-white border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300"
//             >
//               View
//             </motion.button>
//           </motion.div>
//         ))}
//       </div>
//     </div>


//             {/* About & Contact */}
//             <AboutUs />
//             <ContactUs />
//           </section>
//         </main>

//         <footer className="bg-gray-800 text-white text-center p-4">
//           &copy; 2025 Shopease. All rights reserved.
//         </footer>
//       </div>
//     </div>
//   );
// }



import React from "react";
import { motion } from "framer-motion";
import heroVideo from "../assets/hero.mp4";
import Navbar from "../components/Navbar";
import AboutUs from "./AboutUs";
import ContactUs from "./Contactus";
import { FaUserShield, FaMapMarkedAlt, FaShippingFast } from "react-icons/fa";
import "@fontsource/orbitron"; // Make sure this is installed!

const trackingCards = [
  {
    title: "Track Seller",
    icon: <FaUserShield size={36} className="text-[#6EE7B7] group-hover:animate-pulse" />,
    description: "Monitor seller verification, location logs and online delivery consistency.",
  },
  {
    title: "Track Buyer",
    icon: <FaMapMarkedAlt size={36} className="text-[#93C5FD] group-hover:animate-pulse" />,
    description: "Track buyer activity and current map location for streamlined support.",
  },
  {
    title: "Track Orders",
    icon: <FaShippingFast size={36} className="text-[#FCA5A5]  group-hover:animate-pulse" />,
    description: "Follow real-time delivery routes, current ETA and package statuses.",
  },
];

function TrackingCards() {
  const cardColors = [
    "from-[#0ea5e9] to-[#38bdf8]",
    "from-[#a78bfa] to-[#c084fc]",
    "from-[#fb7185] to-[#fda4af]",
  ];

  return (
    <section className="relative w-full py-20 px-6 font-[Orbitron] bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Smart Tracking System
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Stay updated with real-time tracking of sellers, buyers, and orders — all in one futuristic dashboard.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-30 relative z-10">
          {trackingCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotate: [0, 1, -1, 0],
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
              }}
              className={`relative group rounded-3xl p-6 backdrop-blur-xl border border-white/10 transition-all duration-500 overflow-hidden h-[520px] flex flex-col justify-between bg-gradient-to-br ${cardColors[index]} shadow-[0_8px_24px_rgba(0,0,0,0.4)]`}
            >
              {/* Glow blobs */}
              <div className="absolute w-48 h-48 bg-white/10 rounded-full blur-3xl opacity-30 top-0 left-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="absolute w-32 h-32 bg-white/10 rounded-full blur-2xl opacity-30 bottom-0 right-0 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Card Content */}
              <div className="relative z-10">
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-2xl font-bold text-white tracking-wide mb-3 drop-shadow-sm">
                  {card.title}
                </h3>
                <p className="text-gray-100 text-sm leading-relaxed font-light">
                  {card.description}
                </p>
              </div>

              {/* View Button */}
              <motion.button
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 1, -1, 0],
                  backgroundColor: "rgba(255,255,255,0.1)",
                  boxShadow: "0 0 16px rgba(255,255,255,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 self-start px-4 py-2 rounded-full text-xs font-semibold text-white border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
              >
                View
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function AdminPage() {
  return (
    <div className="relative min-h-screen bg-black text-white font-[Orbitron]">
      {/* 🎥 Hero Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover -z-10 opacity-10"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* 🌐 Navbar */}
      <Navbar />

       {/* Hero Section */}
       <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="relative z-10 h-full flex items-center justify-center bg-black/40">
          <h1 className="text-white text-5xl md:text-7xl font-bold font-[Orbitron] drop-shadow-lg">
            Welcome to Shopease Admin
          </h1>
        </div>
      </section>

      {/* 🔍 Tracking Cards */}
      <main className="flex flex-col items-center justify-center">
        <TrackingCards />
        <AboutUs />
        <ContactUs />
      </main>

      {/* 🦾 Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; 2025 Shopease. All rights reserved.
      </footer>
    </div>
  );
}
