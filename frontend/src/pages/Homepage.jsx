// import { useState, useEffect, useContext, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import ShopImage from "../assets/woman.png";
// import Delivery from "../assets/delivery.png";
// import imageone from "../assets/image1.jpg";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer.jsx";
// import { AppContext } from "../context/AppContext";
// import { useNavigate } from "react-router-dom";
// import ContactUs from "./Contactus.jsx";
// import AboutUs from "./AboutUs.jsx";
// import SubscriptionPage from "./SubcriptionPage.jsx";
// import WorkingDetails from "./WorkingDetails.jsx";
// import { FaArrowDown, FaArrowUp } from "react-icons/fa";
// import gsap from "gsap";
// import Chatbot from "../ChatBot/ChatBot.jsx";
// import herosec from "../assets/herosec.mp4";


// const HomePage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { userData } = useContext(AppContext);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   // Refs for sections
//   const homeRef = useRef(null);
//   const subscriptionRef = useRef(null);
//   const workingDetailsRef = useRef(null);
//   const aboutUsRef = useRef(null);
//   const contactUsRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       ".loading-text span",
//       { opacity: 0, y: 20 },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.2,
//         ease: "power2.out",
//         duration: 1,
//       }
//     );

//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     return () => clearTimeout(timeout);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToNextSection = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleScrollTo = (ref) => {
//     if (ref && ref.current) {
//       ref.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     // <div className="relative min-h-screen bg-gradient-to-br from-slate-400 via-purple-400 to-indigo-800 text-black overflow-hidden">
//        <div className="relative min-h-screen bg-gradient-to-br bg-white text-black overflow-hidden">
//       <AnimatePresence mode="wait">
//         {loading ? (
//           <motion.div
//             key="loader"
//             initial={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="fixed inset-0 flex justify-center items-center bg-black z-50"
//           >
//             <h1 className="loading-text text-white text-6xl font-bold flex space-x-2">
//               {[..."ShopEase"].map((letter, index) => (
//                 <motion.span key={index} className="inline-block">
//                   {letter}
//                 </motion.span>
//               ))}
//             </h1>
//           </motion.div>
//         ) : (
//           <motion.div
//             key="content"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="relative min-h-screen flex flex-col"
//           >
//             {/* Floating Background Elements */}
//             {[...Array(3)].map((_, layerIndex) => (
//               <div key={layerIndex} className="absolute inset-0 overflow-hidden">
//                 {Array(layerIndex === 0 ? 40 : 20)
//                   .fill(0)
//                   .map((_, index) => {
//                     const colors = ["bg-blue-500/50", "bg-red-400", "bg-yellow-400"];
//                     return (
//                       <motion.div
//                         key={index}
//                         className={`absolute w-4 h-4 ${colors[layerIndex]} rounded-${layerIndex === 2 ? "lg" : "sm"}`}
//                         animate={{
//                           y: [0, -40, 0],
//                           x: [0, Math.random() * 50 - 25, 0],
//                           rotate: [0, 180, 360],
//                           opacity: [0.3, 0.8, 0.3],
//                         }}
//                         transition={{
//                           duration: Math.random() * 8 + 4,
//                           repeat: Infinity,
//                           ease: "easeInOut",
//                         }}
//                         style={{
//                           top: `${Math.random() * 100}%`,
//                           left: `${Math.random() * 100}%`,
//                         }}
//                       ></motion.div>
//                     );
//                   })}
//               </div>
//             ))}

//             {/* Pass scroll handler to Navbar */}
//             <Navbar
//               onScrollToHome={() => handleScrollTo(homeRef)}
//               onScrollToAbout={() => handleScrollTo(aboutUsRef)}
//               onScrollToContact={() => handleScrollTo(contactUsRef)}
//               onScrollToSubscription={() => handleScrollTo(subscriptionRef)}
//               onScrollToWorking={() => handleScrollTo(workingDetailsRef)}
//             />

//             {/* Welcome Section */}
//             <div ref={homeRef} className="container mt-30 mx-auto text-center relative">
//               <h1 className="text-7xl font-bold">
//                 Welcome to <span className="text-red-400 drop-shadow-lg">ShopEase</span>
//               </h1>
//               <p className="text-gray-800 drop-shadow-lg mt-4">
//                 The best place to grow your business and reach more customers.
//                 <br />
//                 Give your business a new height with ShopEase.
//               </p>

//               <motion.div
//                 className="absolute top-50 right-40 bottom-5 flex items-center"
//                 initial={{ x: "100vw" }}
//                 animate={{ x: 0 }}
//                 transition={{ duration: 5, type: "spring", stiffness: 20 }}
//               >
//                 <div className="bg-orange-200 shadow-lg text-black px-4 py-2 rounded-lg text-lg font-semibold absolute -top-20 -left-25">
//                   Hey {userData ? userData.name : "Developer"}!
//                 </div>

//                 <motion.img
//                   src={Delivery}
//                   alt="Delivery Boy"
//                   className="w-48 h-auto drop-shadow-xl"
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                 />
//               </motion.div>

//               <motion.div
//                 className="mt-20 flex justify-center"
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
//               >
//                 <button onClick={scrollToNextSection} className="text-white text-3xl">
//                   <FaArrowDown />
//                 </button>
//               </motion.div>
//             </div>

//             {/* <div ref={scrollRef} className="relative mt-7">
//               <img className="w-90% h-auto drop-shadow-lg" src={imageone} alt="imageone" />
//               <h1 className="absolute top-40 left-35 drop-shadow-lg text-white text-4xl font-bold p-4 rounded-lg">
//                 <motion.span initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
//                   Join the <span className="text-red-400 drop-shadow-lg">ShopEase</span> Revolution
//                 </motion.span>
//               </h1>

//               <motion.h3
//                 className="absolute top-60 left-40 drop-shadow-md text-yellow-400 text-2xl"
//                 initial={{ x: -200, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.2 }}
//               >
//                 Are you ready to take your business to the next level?
//               </motion.h3>

//               <motion.h4
//                 className="absolute top-70 left-40 drop-shadow-md text-yellow-400 text-xl"
//                 initial={{ x: -200, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.4 }}
//               >
//                 Take our subscription plan and start growing your business.
//               </motion.h4>

//               <motion.button
//                 onClick={() => navigate("/subscription")}
//                 className="absolute top-90 left-40 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white drop-shadow-lg font-semibold rounded-lg"
//                 initial={{ x: -200, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.6 }}
//               >
//                 Subscribe Now →
//               </motion.button>
//             </div> */}
//          <div className="relative  mb-50 mr-10 ">
//                <video
//                       autoPlay
//                       loop
//                       muted
//                       className="absolute mb-120 w-260  opacity-80 h-150 "
//                     >
//                       <source src={herosec} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>

//                     </div>
//             <div className=" relative w-auto h-auto drop-shadow-lg " >
//                     <h1 className="absolute ml-230 top-5 left-35 drop-shadow-lg text-black text-4xl font-bold p-4 rounded-lg">
//                 <motion.span initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
//                   Join the <span className="text-red-400 drop-shadow-lg">ShopEase</span> Revolution
//                 </motion.span>
//               </h1>

//               <motion.h3
//                 className="absolute top-20  ml-285 drop-shadow-md text-gray-800/70 text-l"
//                 initial={{ x: -200, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.2 }}
//               >
//                 Are you ready to take your business to the next level?
//               </motion.h3>

//               <motion.h4
//                 className="absolute top-25 left-278 drop-shadow-md text-grray-800/70 text-l"
//                 initial={{ x: -200, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.4 }}
//               >
//                 Take our subscription plan and start growing your business.
//               </motion.h4>

//               <motion.button
//                 onClick={() => navigate("/subscription")}
//                 className="absolute top-40  left-310 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white drop-shadow-lg font-semibold rounded-lg"
//                 initial={{ x: -200, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.6 }}
//               >
//                 Subscribe Now →
//               </motion.button>

//             </div>
//             {/* Cards */}
//             <div className="relative mt-150 z-10 grid grid-cols-1 md:grid-cols-3 gap-10  w-full px-6 md:px-16">
//               <motion.img
//                 src={ShopImage}
//                 alt="Shop Showcase"
//                 className="absolute -left-60 ml-85 w-40 h-65 z-20 drop-shadow-xl"
//                 animate={{ y: [0, -20, 0] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               />

//               <motion.div
//                 className="relative mb-35 p-20 w-90 ml-40 bg-gradient-to-br from-yellow-500/30 to-red-500/30 backdrop-blur-lg shadow-xl rounded-3xl text-center"
//                 initial={{ y: 70, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2, duration: 0.8 }}
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <h2 className="text-2xl font-bold text-black">Your Business, Our Customers</h2>
//                 <p className="text-black-400 mt-4">Expand your reach and grow faster.</p>
//                 <button
//                   onClick={() => navigate("/workingdetails")}
//                   className="mt-20 px-6 py-3 bg-gradient-to-br from-yellow-600 to-red-600 hover:bg-gradient-to-br hover:from-yellow-700 hover:to-red-700 text-white font-semibold rounded-lg"
//                 >
//                   Read More
//                 </button>
//               </motion.div>

//               <motion.div
//                 className="p-20 mb-35 w-90 bg-gradient-to-br from-green-600/30 to-yellow-600/30 ml-20 backdrop-blur-lg shadow-xl rounded-3xl text-center"
//                 initial={{ y: 70, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.4, duration: 0.8 }}
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <h2 className="text-2xl font-bold text-black">Make Your Business Online</h2>
//                 <p className="text-black-400 mt-4">Sell your products and reach more customers online.</p>
//                 <button
//                   onClick={() => navigate("/shopregister")}
//                   className="mt-15 px-6 py-3 bg-gradient-to-br from-green-500 to-yellow-400 hover:from-green-800 text-white font-semibold rounded-lg"
//                 >
//                   Register Now
//                 </button>
//               </motion.div>

//               <motion.div
//                 className="p-20 mb-35 w-90 bg-gradient-to-br from-purple-700/40 to-pink-600/20 backdrop-blur-lg shadow-xl rounded-3xl text-center"
//                 initial={{ y: 70, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.6, duration: 0.8 }}
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <h2 className="text-2xl font-bold text-black">See Subscription</h2>
//                 <p className="text-black-400 mt-4">Choose the best plan for your business.</p>
//                 <button
//                   onClick={() => navigate("/subscription")}
//                   className="mt-30 px-6 py-3 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-800 text-white font-semibold rounded-lg"
//                 >
//                   See More
//                 </button>
//               </motion.div>
//             </div>

//             {/* Extra Sections with Refs */}
//             <div ref={subscriptionRef}>
//               <SubscriptionPage />
//             </div>
//             <div ref={workingDetailsRef}>
//               <WorkingDetails />
//             </div>
//             <div ref={aboutUsRef}>
//               <AboutUs />
//             </div>
//             <div ref={contactUsRef}>
//               <ContactUs />
//             </div>

//             {/* Scroll Up Button */}
//             {showScrollTop && (
//               <motion.button
//                 onClick={scrollToTop}
//                 className="fixed bottom-6 right-6 p-3 bg-black text-white rounded-full shadow-xl z-50"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <FaArrowUp className="text-xl" />
//               </motion.button>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <Chatbot />
//     </div>
//   );
// };

// export default HomePage;





import { useState, useEffect, useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import ContactUs from "./Contactus.jsx";
import AboutUs from "./AboutUs.jsx";
import SubscriptionPage from "./SubcriptionPage.jsx";
import WorkingDetails from "./WorkingDetails.jsx";
import { 
  FaArrowDown, 
  FaArrowUp, 
  FaRocket, 
  FaChartLine, 
  FaShoppingBag,
  FaUserCheck,
  FaUsers,
  FaShieldAlt,
  FaLightbulb
} from "react-icons/fa";
import { 
  FiTrendingUp, 
  FiCreditCard, 
  FiSmartphone,
  FiShoppingCart
} from "react-icons/fi";
import gsap from "gsap";
import Chatbot from "../ChatBot/ChatBot.jsx";
import herosec from "../assets/herosec.mp4";
// import businessGrowth from "../assets/business-growth.svg";
// import onlineStore from "../assets/online-store.svg";
// import subscription from "../assets/subscription.svg";
import { TrendingUp as BusinessGrowth } from 'react-feather';
import { ShoppingCart as OnlineStore } from 'react-feather';
import { Repeat as Subscription } from 'react-feather';

const HomePage = () => {
  const { userData } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Refs for sections
  const homeRef = useRef(null);
  const subscriptionRef = useRef(null);
  const workingDetailsRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".loading-text span",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power2.out",
        duration: 1,
      }
    );

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex justify-center items-center bg-gradient-to-br from-red-500 to-red-700 z-50"
          >
            <h1 className="loading-text text-white text-5xl md:text-6xl font-bold flex space-x-2">
              {[..."ShopEase"].map((letter, index) => (
                <motion.span 
                  key={index} 
                  className="inline-block"
                  animate={{ 
                    y: [0, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    delay: index * 0.1 
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-screen flex flex-col"
          >
            <Navbar
              onScrollToHome={() => handleScrollTo(homeRef)}
              onScrollToAbout={() => handleScrollTo(aboutUsRef)}
              onScrollToContact={() => handleScrollTo(contactUsRef)}
              onScrollToSubscription={() => handleScrollTo(subscriptionRef)}
              onScrollToWorking={() => handleScrollTo(workingDetailsRef)}
            />

            {/* Hero Section */}
            <div ref={homeRef} className="relative h-screen flex items-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={herosec} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/30"></div>
              </div>
              
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                      Elevate Your Business with <span className="text-red-400">ShopEase</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-8 opacity-90">
                      Reach more customers, grow your sales, and build your brand with our all-in-one platform
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full shadow-lg flex items-center gap-2"
                        onClick={() => navigate("/shopregister")}
                      >
                        <FiSmartphone className="text-lg" />
                        Get Started
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-white text-red-500 hover:bg-gray-100 font-bold rounded-full shadow-lg flex items-center gap-2"
                        onClick={() => handleScrollTo(subscriptionRef)}
                      >
                        <FiCreditCard className="text-lg" />
                        View Plans
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div
                  className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <button 
                    onClick={scrollToNextSection} 
                    className="text-white text-3xl bg-black/30 p-3 rounded-full"
                  >
                    <FaArrowDown />
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="py-12 bg-gradient-to-r from-red-500 to-red-600 text-white">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">5000+</h3>
                    <p className="text-lg">Businesses</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">89%</h3>
                    <p className="text-lg">Growth Rate</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">24/7</h3>
                    <p className="text-lg">Support</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">99.9%</h3>
                    <p className="text-lg">Uptime</p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div ref={scrollRef} className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Transform Your Business
                  </motion.h2>
                  <motion.p 
                    className="text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Everything you need to succeed in today's digital marketplace
                  </motion.p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <motion.div 
                    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                      <FaRocket className="text-red-500 text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Accelerated Growth</h3>
                    <p className="text-gray-600 mb-6">
                      Expand your reach and grow faster with our platform. Access new customers and markets with our powerful tools.
                    </p>
                    <button 
                      onClick={() => navigate("/workingdetails")}
                      className="text-red-500 font-semibold hover:underline flex items-center gap-2"
                    >
                      Discover How
                      <FaArrowDown className="text-xs" />
                    </button>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <FiTrendingUp className="text-blue-500 text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Digital Storefront</h3>
                    <p className="text-gray-600 mb-6">
                      Create a professional online store in minutes. Reach customers anywhere, anytime with our mobile-optimized platform.
                    </p>
                    <button 
                      onClick={() => navigate("/shopregister")}
                      className="text-blue-500 font-semibold hover:underline flex items-center gap-2"
                    >
                      Start Selling
                      <FaArrowDown className="text-xs" />
                    </button>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                      <FaShoppingBag className="text-purple-500 text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Flexible Solutions</h3>
                    <p className="text-gray-600 mb-6">
                      Choose the perfect subscription plan that fits your business needs and budget. Scale as you grow.
                    </p>
                    <button 
                      onClick={() => handleScrollTo(subscriptionRef)}
                      className="text-purple-500 font-semibold hover:underline flex items-center gap-2"
                    >
                      View Options
                      <FaArrowDown className="text-xs" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* How It Works Section */}
            <div className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Simple Steps to Success
                  </motion.h2>
                  <motion.p 
                    className="text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Get started in just a few minutes and transform your business
                  </motion.p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                  <div className="md:w-1/2">
                    <div className="space-y-8">
                      <motion.div 
                        className="flex items-start gap-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl font-bold text-red-500">1</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Create Your Account</h3>
                          <p className="text-gray-600">
                            Sign up in seconds with your basic information. No credit card required to start.
                          </p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-start gap-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl font-bold text-blue-500">2</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Set Up Your Store</h3>
                          <p className="text-gray-600">
                            Customize your digital storefront with your branding and add your products.
                          </p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-start gap-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl font-bold text-purple-500">3</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Start Selling</h3>
                          <p className="text-gray-600">
                            Launch your store and reach customers through multiple channels.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      className="mt-12"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <button
                        onClick={() => navigate("/shopregister")}
                        className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full shadow-lg flex items-center gap-2"
                      >
                        <FiShoppingCart className="text-lg" />
                        Launch Your Store Today
                      </button>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-1/2 flex justify-center">
                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="absolute -inset-8 bg-gradient-to-r from-red-400 to-purple-500 rounded-2xl rotate-6"></div>
                      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md">
                        <div className="bg-gray-800 h-8 flex items-center px-4">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center mb-6">
                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                            <div className="ml-4">
                              <div className="bg-gray-200 border-2 border-dashed rounded-md w-32 h-4 mb-2"></div>
                              <div className="bg-gray-200 border-2 border-dashed rounded-md w-24 h-3"></div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="bg-gray-100 rounded-lg p-4">
                              <div className="flex justify-between">
                                <div className="bg-gray-200 border-2 border-dashed rounded-md w-24 h-4"></div>
                                <div className="bg-gray-200 border-2 border-dashed rounded-md w-8 h-4"></div>
                              </div>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-4">
                              <div className="flex justify-between">
                                <div className="bg-gray-200 border-2 border-dashed rounded-md w-32 h-4"></div>
                                <div className="bg-gray-200 border-2 border-dashed rounded-md w-8 h-4"></div>
                              </div>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-4">
                              <div className="flex justify-between">
                                <div className="bg-gray-200 border-2 border-dashed rounded-md w-28 h-4"></div>
                                <div className="bg-gray-200 border-2 border-dashed rounded-md w-8 h-4"></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 flex justify-center">
                            <div className="bg-red-500 rounded-full w-24 h-10"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Why Businesses Choose Us
                  </motion.h2>
                  <motion.p 
                    className="text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    The complete solution for modern businesses
                  </motion.p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { 
                      icon: <FaUserCheck className="text-red-500 text-3xl" />, 
                      title: "Customer Focused",
                      desc: "Tools designed to help you understand and serve your customers better"
                    },
                    { 
                      icon: <FaUsers className="text-blue-500 text-3xl" />, 
                      title: "Community Support",
                      desc: "Join a thriving community of entrepreneurs and experts"
                    },
                    { 
                      icon: <FaShieldAlt className="text-green-500 text-3xl" />, 
                      title: "Secure Platform",
                      desc: "Enterprise-grade security to protect your business and data"
                    },
                    { 
                      icon: <FaLightbulb className="text-purple-500 text-3xl" />, 
                      title: "Innovative Tools",
                      desc: "Stay ahead with cutting-edge features and regular updates"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subscription Section */}
            <div ref={subscriptionRef} className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Flexible Plans for Every Business
                  </motion.h2>
                  <motion.p 
                    className="text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Choose the perfect solution for your needs
                  </motion.p>
                </div>
                <SubscriptionPage />
              </div>
            </div>

            {/* Testimonials */}
            <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Success Stories
                  </motion.h2>
                  <motion.p 
                    className="text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Hear from businesses that transformed with ShopEase
                  </motion.p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-2xl shadow-lg"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12" />
                        <div className="ml-4">
                          <div className="font-bold">Sarah Johnson</div>
                          <div className="text-gray-500">Boutique Owner</div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 italic">
                        "ShopEase helped me double my sales in just three months. The platform is incredibly intuitive and the support team is always helpful."
                      </p>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* About Us Section */}
            <div ref={aboutUsRef} className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <AboutUs />
              </div>
            </div>

            {/* Contact Us Section */}
            <div ref={contactUsRef} className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <ContactUs />
              </div>
            </div>

            {/* How It Works Details */}
            <div ref={workingDetailsRef} className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <WorkingDetails />
              </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 bg-gradient-to-r from-red-500 to-red-700 text-white">
              <div className="container mx-auto px-4 text-center">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Ready to Transform Your Business?
                </motion.h2>
                <motion.p 
                  className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Join thousands of businesses already growing with ShopEase
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-red-500 font-bold rounded-full shadow-lg text-lg"
                  onClick={() => navigate("/shopregister")}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Start Your Free Trial
                </motion.button>
                <motion.p 
                  className="mt-4 opacity-80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  No credit card required. Cancel anytime.
                </motion.p>
              </div>
            </div>

            {/* Scroll Up Button */}
            {showScrollTop && (
              <motion.button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 p-4 bg-red-500 text-white rounded-full shadow-xl z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.1 }}
              >
                <FaArrowUp className="text-xl" />
              </motion.button>
            )}

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      <Chatbot />
    </div>
  );
};

export default HomePage;