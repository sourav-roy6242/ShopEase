import { useState, useEffect, useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShopImage from "../assets/woman.png";
import Delivery from "../assets/delivery.png";
import imageone from "../assets/image1.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import ContactUs from "./Contactus.jsx";
import AboutUs from "./AboutUs.jsx";
import SubscriptionPage from "./SubcriptionPage.jsx";
import WorkingDetails from "./WorkingDetails.jsx";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import gsap from "gsap";
import Chatbot from "../ChatBot/ChatBot.jsx";
import herosec from "../assets/herosec.mp4";


const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    // <div className="relative min-h-screen bg-gradient-to-br from-slate-400 via-purple-400 to-indigo-800 text-black overflow-hidden">
       <div className="relative min-h-screen bg-gradient-to-br bg-white text-black overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex justify-center items-center bg-black z-50"
          >
            <h1 className="loading-text text-white text-6xl font-bold flex space-x-2">
              {[..."ShopEase"].map((letter, index) => (
                <motion.span key={index} className="inline-block">
                  {letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-screen flex flex-col"
          >
            {/* Floating Background Elements */}
            {[...Array(3)].map((_, layerIndex) => (
              <div key={layerIndex} className="absolute inset-0 overflow-hidden">
                {Array(layerIndex === 0 ? 40 : 20)
                  .fill(0)
                  .map((_, index) => {
                    const colors = ["bg-blue-500/50", "bg-red-400", "bg-yellow-400"];
                    return (
                      <motion.div
                        key={index}
                        className={`absolute w-4 h-4 ${colors[layerIndex]} rounded-${layerIndex === 2 ? "lg" : "sm"}`}
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
                    );
                  })}
              </div>
            ))}

            {/* Pass scroll handler to Navbar */}
            <Navbar
              onScrollToHome={() => handleScrollTo(homeRef)}
              onScrollToAbout={() => handleScrollTo(aboutUsRef)}
              onScrollToContact={() => handleScrollTo(contactUsRef)}
              onScrollToSubscription={() => handleScrollTo(subscriptionRef)}
              onScrollToWorking={() => handleScrollTo(workingDetailsRef)}
            />

            {/* Welcome Section */}
            <div ref={homeRef} className="container mt-30 mx-auto text-center relative">
              <h1 className="text-7xl font-bold">
                Welcome to <span className="text-red-400 drop-shadow-lg">ShopEase</span>
              </h1>
              <p className="text-gray-800 drop-shadow-lg mt-4">
                The best place to grow your business and reach more customers.
                <br />
                Give your business a new height with ShopEase.
              </p>

              <motion.div
                className="absolute top-50 right-40 bottom-5 flex items-center"
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 5, type: "spring", stiffness: 20 }}
              >
                <div className="bg-orange-200 shadow-lg text-black px-4 py-2 rounded-lg text-lg font-semibold absolute -top-20 -left-25">
                  Hey {userData ? userData.name : "Developer"}!
                </div>

                <motion.img
                  src={Delivery}
                  alt="Delivery Boy"
                  className="w-48 h-auto drop-shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              <motion.div
                className="mt-20 flex justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <button onClick={scrollToNextSection} className="text-white text-3xl">
                  <FaArrowDown />
                </button>
              </motion.div>
            </div>

            {/* <div ref={scrollRef} className="relative mt-7">
              <img className="w-90% h-auto drop-shadow-lg" src={imageone} alt="imageone" />
              <h1 className="absolute top-40 left-35 drop-shadow-lg text-white text-4xl font-bold p-4 rounded-lg">
                <motion.span initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                  Join the <span className="text-red-400 drop-shadow-lg">ShopEase</span> Revolution
                </motion.span>
              </h1>

              <motion.h3
                className="absolute top-60 left-40 drop-shadow-md text-yellow-400 text-2xl"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Are you ready to take your business to the next level?
              </motion.h3>

              <motion.h4
                className="absolute top-70 left-40 drop-shadow-md text-yellow-400 text-xl"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Take our subscription plan and start growing your business.
              </motion.h4>

              <motion.button
                onClick={() => navigate("/subscription")}
                className="absolute top-90 left-40 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white drop-shadow-lg font-semibold rounded-lg"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Subscribe Now →
              </motion.button>
            </div> */}
         <div className="relative  mb-50 mr-10 ">
               <video
                      autoPlay
                      loop
                      muted
                      className="absolute mb-120 w-260  opacity-80 h-150 "
                    >
                      <source src={herosec} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    </div>
            <div className=" relative w-auto h-auto drop-shadow-lg " >
                    <h1 className="absolute ml-230 top-5 left-35 drop-shadow-lg text-black text-4xl font-bold p-4 rounded-lg">
                <motion.span initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                  Join the <span className="text-red-400 drop-shadow-lg">ShopEase</span> Revolution
                </motion.span>
              </h1>

              <motion.h3
                className="absolute top-20  ml-285 drop-shadow-md text-gray-800/70 text-l"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Are you ready to take your business to the next level?
              </motion.h3>

              <motion.h4
                className="absolute top-25 left-278 drop-shadow-md text-grray-800/70 text-l"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Take our subscription plan and start growing your business.
              </motion.h4>

              <motion.button
                onClick={() => navigate("/subscription")}
                className="absolute top-40  left-310 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white drop-shadow-lg font-semibold rounded-lg"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Subscribe Now →
              </motion.button>

            </div>
            {/* Cards */}
            <div className="relative mt-150 z-10 grid grid-cols-1 md:grid-cols-3 gap-10  w-full px-6 md:px-16">
              <motion.img
                src={ShopImage}
                alt="Shop Showcase"
                className="absolute -left-60 ml-85 w-40 h-65 z-20 drop-shadow-xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="relative mb-35 p-20 w-90 ml-40 bg-gradient-to-br from-yellow-500/30 to-red-500/30 backdrop-blur-lg shadow-xl rounded-3xl text-center"
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                <h2 className="text-2xl font-bold text-black">Your Business, Our Customers</h2>
                <p className="text-black-400 mt-4">Expand your reach and grow faster.</p>
                <button
                  onClick={() => navigate("/workingdetails")}
                  className="mt-20 px-6 py-3 bg-gradient-to-br from-yellow-600 to-red-600 hover:bg-gradient-to-br hover:from-yellow-700 hover:to-red-700 text-white font-semibold rounded-lg"
                >
                  Read More
                </button>
              </motion.div>

              <motion.div
                className="p-20 mb-35 w-90 bg-gradient-to-br from-green-600/30 to-yellow-600/30 ml-20 backdrop-blur-lg shadow-xl rounded-3xl text-center"
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                <h2 className="text-2xl font-bold text-black">Make Your Business Online</h2>
                <p className="text-black-400 mt-4">Sell your products and reach more customers online.</p>
                <button
                  onClick={() => navigate("/shopregister")}
                  className="mt-15 px-6 py-3 bg-gradient-to-br from-green-500 to-yellow-400 hover:from-green-800 text-white font-semibold rounded-lg"
                >
                  Register Now
                </button>
              </motion.div>

              <motion.div
                className="p-20 mb-35 w-90 bg-gradient-to-br from-purple-700/40 to-pink-600/20 backdrop-blur-lg shadow-xl rounded-3xl text-center"
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                <h2 className="text-2xl font-bold text-black">See Subscription</h2>
                <p className="text-black-400 mt-4">Choose the best plan for your business.</p>
                <button
                  onClick={() => navigate("/subscription")}
                  className="mt-30 px-6 py-3 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-800 text-white font-semibold rounded-lg"
                >
                  See More
                </button>
              </motion.div>
            </div>

            {/* Extra Sections with Refs */}
            <div ref={subscriptionRef}>
              <SubscriptionPage />
            </div>
            <div ref={workingDetailsRef}>
              <WorkingDetails />
            </div>
            <div ref={aboutUsRef}>
              <AboutUs />
            </div>
            <div ref={contactUsRef}>
              <ContactUs />
            </div>

            {/* Scroll Up Button */}
            {showScrollTop && (
              <motion.button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 p-3 bg-black text-white rounded-full shadow-xl z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.1 }}
              >
                <FaArrowUp className="text-xl" />
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <Chatbot />
    </div>
  );
};

export default HomePage;



