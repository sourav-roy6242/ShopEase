
// import React, { useContext, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import gsap from "gsap";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { userData, backendUrl, setUserData, setIsLoggedIn } = useContext(AppContext);

//   const logoRef = useRef(null);
//   const navLinksRef = useRef([]);
//   const profileRef = useRef(null);
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     gsap.from(logoRef.current, { x: -100, opacity: 0, duration: 1, ease: "power3.out" });
//     gsap.from(navLinksRef.current, { opacity: 0, y: -20, duration: 0.8, stagger: 0.2, ease: "power3.out" });
//     gsap.from(profileRef.current, { opacity: 0, scale: 0.8, duration: 0.8, ease: "back.out(1.7)" });
//   }, []);

//   const sendVerificationOtp = async () => {
//     try {
//       axios.defaults.withCredentials = true;
//       const { data } = await axios.post(backendUrl + "/api/auth/send-verify-otp");

//       if (data.success) {
//         navigate("/email-verify");
//         toast.success(data.message);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const logout = async () => {
//     try {
//       axios.defaults.withCredentials = true;
//       const { data } = await axios.post(backendUrl + "/api/auth/logout");
//       if (data.success) {
//         setIsLoggedIn(false);
//         setUserData(false);
//         navigate("/");
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="w-full fixed top-0 left-0 z-50">
//       <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-12 bg-transparent backdrop-blur-lg shadow-md">
//         <div className="flex items-center gap-12">
//           {/* Animated Company Name */}
//           <motion.h2
//             ref={logoRef}
//             className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 
//             text-transparent bg-clip-text cursor-pointer"
//             initial={{ color: "#000" }}
//             whileHover={{ color: "#6366F1" }}
//             transition={{ duration: 0.3 }}
//           >
//             {Array.from("ShopEase").map((letter, index) => (
//               <motion.span
//                 key={index}
//                 className="inline-block"
//                 whileHover={{
//                   rotate: [0, 360],
//                   color: "#D946EF",
//                 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//               >
//                 {letter}
//               </motion.span>
//             ))}
//           </motion.h2>
//         </div>

//         {/* Simplified Navigation Links */}
//         <ul className="flex gap-6 sm:gap-10 text-xl font-semibold drop-shadow-sm list-none p-0 m-0">
//           {[
//             { name: "Home", path: "/" },
//             { name: "About Us", path: "/aboutus" },
//             { name: "Contact Us", path: "/contactus" },
//           ].map((item, index) => (
//             <li
//               key={index}
//               ref={(el) => (navLinksRef.current[index] = el)}
//               onClick={() => navigate(item.path)}
//               className="cursor-pointer"
//             >
//               {item.name}
//             </li>
//           ))}
//         </ul>

//         {/* User Avatar with Glow Effect or Login Button */}
//         <div className="flex items-center">
//           {userData ? (
//             <motion.div
//               ref={profileRef}
//               className="w-12 h-12 flex justify-center items-center bg-black text-white font-bold text-lg rounded-full 
//               relative group cursor-pointer shadow-lg animate-glow"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {userData.name[0].toUpperCase()}
//               <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg text-black py-2 px-3 top-12 right-0">
//                 <ul className="list-none text-sm">
//                   {!userData.isAccountVerified && (
//                     <li
//                       onClick={sendVerificationOtp}
//                       className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
//                     >
//                       Verify Email
//                     </li>
//                   )}
//                   <li
//                     onClick={logout}
//                     className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
//                   >
//                     Logout
//                   </li>
//                 </ul>
//               </div>
//             </motion.div>
//           ) : (
//             <motion.button
//               ref={buttonRef}
//               onClick={() => navigate("/userRegister")}
//               className="border border-violet-800 rounded-full px-6 py-2 text-white hover:bg-orange-300 hover:text-white transition-all"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               Login / Sign Up
//             </motion.button>
//           )}
//         </div>
//       </div>

//       {/* Glow Effect Animation */}
//       <style>
//         {`
//           @keyframes glow {
//             0% {
//               box-shadow: 0 0 10px rgba(255, 165, 0, 0.7);
//             }
//             50% {
//               box-shadow: 0 0 20px rgba(255, 165, 0, 1), 0 0 30px rgba(255, 69, 0, 0.8);
//             }
//             100% {
//               box-shadow: 0 0 10px rgba(255, 165, 0, 0.7);
//             }
//           }

//           .animate-glow {
//             animation: glow 1.5s infinite alternate ease-in-out;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Navbar;



// import React, { useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { userData } = useContext(AppContext);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Calculate vertical position based on scroll
//   const navButtonsTop = Math.min(scrollY * 0.7, window.innerHeight - 100);

//   return (
//     <div className="w-full fixed top-0 left-0 z-50">
//       {/* Fixed Top Bar */}
//       <div className="w-full flex justify-between items-center p-4 sm:px-12 bg-white/5 backdrop-blur-lg shadow-md">
//         {/* Logo */}
//         <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 
//           text-transparent bg-clip-text">
//           ShopEase
//         </h2>

//         {/* User Controls */}
//         <div className="flex items-center">
//           {userData ? (
//             <div className="w-12 h-12 flex justify-center items-center bg-black text-white font-bold text-lg rounded-full">
//               {userData.name[0].toUpperCase()}
//             </div>
//           ) : (
//             <button
//               onClick={() => navigate("/userRegister")}
//               className="border border-violet-800 rounded-full px-6 py-2 text-white hover:bg-orange-300 transition-all"
//             >
//               Login / Sign Up
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Scrolling Navigation Buttons */}
//       <motion.div 
//         className="fixed left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg mt-3 rounded-full px-6 py-3 shadow-lg"
//         style={{ top: `${navButtonsTop}px` }}
//         transition={{ type: "spring", stiffness: 100 }}
//       >
     
//         <div className="flex gap-6 sm:gap-10 text-lg font-semibold">
//           {["Home", "About Us", "Contact Us"].map((item) => (
//             <button
//               key={item}
//               onClick={() => navigate(`/${item.toLowerCase().replace(' ', '')}`)}
//               className="text-white hover:text-purple-300 transition-colors"
//             >
//               {item}
//             </button>
//           ))}
//         </div>
      
//       </motion.div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useContext, useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import gsap from "gsap";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { userData } = useContext(AppContext);
//   const [scrollY, setScrollY] = useState(0);
//   const navRef = useRef(null);
//   const hoverRef = useRef(null);
  
//   const mouseX = useMotionValue(0);
//   const smoothX = useSpring(mouseX, { stiffness: 500, damping: 30 });
//   const background = useTransform(smoothX, [0, window.innerWidth], ["10%", "90%"]);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     // Hover effect animation
//     const nav = navRef.current;
//     const hover = hoverRef.current;
    
//     const moveHover = (e) => {
//       const rect = nav.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       mouseX.set(x);
//     };

//     const enterNav = () => gsap.to(hover, { opacity: 1, duration: 0.3 });
//     const leaveNav = () => gsap.to(hover, { opacity: 0, duration: 0.3 });

//     nav.addEventListener('mousemove', moveHover);
//     nav.addEventListener('mouseenter', enterNav);
//     nav.addEventListener('mouseleave', leaveNav);

//     return () => {
//       nav.removeEventListener('mousemove', moveHover);
//       nav.removeEventListener('mouseenter', enterNav);
//       nav.removeEventListener('mouseleave', leaveNav);
//     };
//   }, []);

//   const navButtonsTop = Math.min(scrollY * 0.7, window.innerHeight - 100);

//   return (
//     <div className="w-full fixed top-0 left-0 z-50">
//       {/* Fixed Top Bar */}
//       <div className="w-full flex justify-between items-center p-4 sm:px-12 bg-white/5 backdrop-blur-lg shadow-md border-b border-white/10">
//         {/* Logo */}
//         <motion.h2
//           className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 
//           text-transparent bg-clip-text cursor-pointer"
//           whileHover={{ scale: 1.05 }}
//         >
//           ShopEase
//         </motion.h2>

//         {/* User Controls */}
//         <div className="flex items-center">
//           {userData ? (
//             <motion.div
//               className="w-12 h-12 flex justify-center items-center bg-black/80 text-white font-bold text-lg rounded-full
//               border-2 border-white/20 hover:border-purple-400 transition-all cursor-pointer"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {userData.name[0].toUpperCase()}
//             </motion.div>
//           ) : (
//             <motion.button
//               onClick={() => navigate("/userRegister")}
//               className="border-2 border-purple-400/50 rounded-full px-6 py-2 text-white bg-black/30
//               hover:bg-purple-400/20 hover:border-purple-400 transition-all backdrop-blur-sm"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Login / Sign Up
//             </motion.button>
//           )}
//         </div>
//       </div>

//       {/* Floating Navigation */}
//       <motion.div 
//         ref={navRef}
//         className="fixed h-15 flex items-center mt-2 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl
//         border-2 border-white/10 hover:border-purple-400/30 transition-all cursor-pointer group"
//         style={{ 
//           top: `${navButtonsTop}px`,
//           background: `linear-gradient(90deg, rgba(139, 92, 246, 0.1) ${background}, transparent 0)`
//         }}
//       >
//         <div className="relative flex gap-6 sm:gap-10 text-lg font-semibold">
//           {/* Hover effect background */}
//           <div
//             ref={hoverRef}
//             className="absolute inset-0 bg-purple-400/10 rounded-full opacity-0"
//             style={{ width: '20%', x: smoothX }}
//           />
          
//           {["Home", "About Us", "Contact Us"].map((item) => (
//             <motion.button
//               key={item}
//               onClick={() => navigate(`/${item.toLowerCase().replace(' ', '')}`)}
//               className="relative text-white/80 hover:text-purple-300 px-4 py-2 rounded-full
//               before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-purple-400
//               before:origin-bottom before:scale-x-0 hover:before:scale-x-100 before:transition-transform"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {item}
//             </motion.button>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Navbar;




// import React, { useContext, useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import gsap from "gsap";
// import { Sun, Moon, Menu, X, Home, Info, Phone } from "lucide-react";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { userData } = useContext(AppContext);
//   const [scrollY, setScrollY] = useState(0);
//   const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navRef = useRef(null);
//   const hoverRef = useRef(null);

//   const mouseX = useMotionValue(0);
//   const smoothX = useSpring(mouseX, { stiffness: 500, damping: 30 });
//   const background = useTransform(smoothX, [0, window.innerWidth], ["10%", "90%"]);

//   const navItems = [
//     { name: "Home", icon: <Home size={20} /> },
//     { name: "About Us", icon: <Info size={20} /> },
//     { name: "Contact Us", icon: <Phone size={20} /> },
//   ];

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const nav = navRef.current;
//     const hover = hoverRef.current;

//     const moveHover = (e) => {
//       const rect = nav.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       mouseX.set(x);
//     };

//     const enterNav = () => gsap.to(hover, { opacity: 1, duration: 0.3 });
//     const leaveNav = () => gsap.to(hover, { opacity: 0, duration: 0.3 });

//     nav?.addEventListener("mousemove", moveHover);
//     nav?.addEventListener("mouseenter", enterNav);
//     nav?.addEventListener("mouseleave", leaveNav);

//     return () => {
//       nav?.removeEventListener("mousemove", moveHover);
//       nav?.removeEventListener("mouseenter", enterNav);
//       nav?.removeEventListener("mouseleave", leaveNav);
//     };
//   }, []);

//   useEffect(() => {
//     const html = document.documentElement;
//     if (darkMode) {
//       html.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       html.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   const navButtonsTop = Math.min(scrollY * 0.7, window.innerHeight - 100);
//   const showText = scrollY < 10;



  

//   return (
//     <div className="w-full fixed top-0 left-0 z-50">
//       {/* Topbar */}
//       <div className="w-full flex justify-between items-center px-4 sm:px-12 py-4 bg-white/5 dark:bg-black/30 backdrop-blur-lg shadow-md border-b border-white/10">
//         <motion.h2
//           className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 
//           text-transparent bg-clip-text cursor-pointer"
//           whileHover={{ scale: 1.05 }}
//         >
//           ShopEase
//         </motion.h2>

//         <div className="flex items-center gap-4">
//           {/* Theme Toggle */}
//           <motion.button
//             onClick={() => setDarkMode((prev) => !prev)}
//             className="p-2 rounded-full border border-white/20 text-white hover:text-purple-400 transition"
//             whileHover={{ rotate: 20 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//           </motion.button>

//           {/* Auth/User */}
//           {userData ? (
//             <motion.div
//               className="w-10 h-10 flex justify-center items-center bg-black/80 text-white font-bold text-lg rounded-full
//               border-2 border-white/20 hover:border-purple-400 transition-all cursor-pointer"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {userData.name[0].toUpperCase()}
//             </motion.div>
//           ) : (
//             <motion.button
//               onClick={() => navigate("/userRegister")}
//               className="border-2 border-purple-400/50 rounded-full px-4 py-1 text-white bg-black/30
//               hover:bg-purple-400/20 hover:border-purple-400 transition-all backdrop-blur-sm"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Login / Sign Up
//             </motion.button>
//           )}

//           {/* Mobile Menu Toggle */}
//           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="sm:hidden p-2 text-white">
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="sm:hidden w-full bg-black/80 backdrop-blur-md flex flex-col items-center gap-4 py-4">
//           {navItems.map((item) => (
//             <motion.button
//               key={item.name}
//               onClick={() => {
//                 setIsMobileMenuOpen(false);
//                 navigate(`/${item.name.toLowerCase().replace(" ", "")}`);
//               }}
//               className="text-white flex items-center gap-2 text-lg font-semibold hover:text-purple-300 transition-all"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {item.icon}
//               {item.name}
//             </motion.button>
//           ))}
//         </div>
//       )}



//       {/* Floating Nav (Desktop) */}
// <motion.div
//   ref={navRef}
//   className="hidden sm:flex fixed items-center mt-1 left-1/2 -translate-x-1/2 bg-white/10 dark:bg-black/10 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl
//   border-2 border-white/10 hover:border-purple-400/30 transition-all cursor-pointer group"
//   style={{
//     top: `${navButtonsTop}px`,
//     background: `linear-gradient(90deg, rgba(139, 92, 246, 0.1) ${background}, transparent 0)`,
//   }}
// >
//   <div className="relative flex gap-3 text-sm font-medium text-white">
//     {/* Hover effect background */}
//     <div
//       ref={hoverRef}
//       className="absolute inset-0 bg-purple-400/10 rounded-full opacity-0"
//       style={{ width: "20%", x: smoothX }}
//     />

//     {navItems.map((item) => (
//       <motion.button
//         key={item.name}
//         onClick={() => navigate(`/${item.name.toLowerCase().replace(" ", "")}`)}
//         className="relative w-[120px] h-[35px]  flex items-center justify-center gap-2 text-white px-3 py-1 rounded-full border border-white/10
//         hover:border-purple-400 hover:text-purple-300 transition-all duration-300 overflow-hidden"
//         whileHover={{ scale: 1.05, y: -2 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         {/* Icon - only on scroll */}
//         <motion.span
//           className="text-base"
//           animate={{
//             opacity: scrollY > 10 ? 1 : 0,
//             display: scrollY > 10 ? "block" : "none",
//           }}
//         >
//           {item.icon}
//         </motion.span>

//         {/* Text - only at top */}
//         <motion.span
//           className="text-sm whitespace-nowrap"
//           animate={{
//             opacity: scrollY < 10 ? 1 : 0,
//             display: scrollY < 10 ? "block" : "none",
//           }}
//         >
//           {item.name}
//         </motion.span>
//       </motion.button>
//     ))}
//   </div>
// </motion.div>

//     </div>
//   );
// };

// export default Navbar;




import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import axios from "axios";
import { toast } from "react-toastify";
import { Sun, Moon, Menu, X, Home, Info, Phone } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setIsLoggedIn, setUserData } = useContext(AppContext);
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navRef = useRef(null);
  const hoverRef = useRef(null);

  const mouseX = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const background = useTransform(smoothX, [0, window.innerWidth], ["10%", "90%"]);

  const navItems = [
    { name: "Home", icon: <Home size={20} /> },
    { name: "About Us", icon: <Info size={20} /> },
    { name: "Contact Us", icon: <Phone size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    const hover = hoverRef.current;

    const moveHover = (e) => {
      const rect = nav.getBoundingClientRect();
      const x = e.clientX - rect.left;
      mouseX.set(x);
    };

    const enterNav = () => gsap.to(hover, { opacity: 1, duration: 0.3 });
    const leaveNav = () => gsap.to(hover, { opacity: 0, duration: 0.3 });

    nav?.addEventListener("mousemove", moveHover);
    nav?.addEventListener("mouseenter", enterNav);
    nav?.addEventListener("mouseleave", leaveNav);

    return () => {
      nav?.removeEventListener("mousemove", moveHover);
      nav?.removeEventListener("mouseenter", enterNav);
      nav?.removeEventListener("mouseleave", leaveNav);
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navButtonsTop = Math.min(scrollY * 0.7, window.innerHeight - 100);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/send-verify-otp");

      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      if (data.success) {
        setIsLoggedIn(false);
        setUserData(false);
        navigate("/");
        toast.success("Logged out successfully");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* Topbar */}
      <div className="w-full flex justify-between items-center px-4 sm:px-12 py-4 bg-white/5 dark:bg-black/30 backdrop-blur-lg shadow-md border-b border-white/10">
        <motion.h2
          className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 
          text-transparent bg-clip-text cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/")}
        >
          ShopEase
        </motion.h2>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <motion.button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-full border border-white/20 text-white hover:text-purple-400 transition"
            whileHover={{ rotate: 20 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          {/* Auth/User */}
          {userData ? (
            <motion.div
              className="relative w-10 h-10 flex justify-center items-center bg-black/80 text-white font-bold text-lg rounded-full
              border-2 border-white/20 hover:border-purple-400 transition-all cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {userData.name[0].toUpperCase()}
              {showDropdown && (
                <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg text-black py-2 px-3 z-50">
                  <ul className="list-none text-sm whitespace-nowrap">
                    {!userData.isAccountVerified && (
                      <li
                        onClick={() => {
                          setShowDropdown(false);
                          sendVerificationOtp();
                        }}
                        className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
                      >
                        Verify Email
                      </li>
                    )}
                    <li
                      onClick={() => {
                        setShowDropdown(false);
                        logout();
                      }}
                      className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.button
              onClick={() => navigate("/userRegister")}
              className="border-2 border-purple-400/50 rounded-full px-4 py-1 text-white bg-black/30
              hover:bg-purple-400/20 hover:border-purple-400 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login / Sign Up
            </motion.button>
          )}

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="sm:hidden p-2 text-white">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden w-full bg-black/80 backdrop-blur-md flex flex-col items-center gap-4 py-4">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate(`/${item.name.toLowerCase().replace(" ", "")}`);
              }}
              className="text-white flex items-center gap-2 text-lg font-semibold hover:text-purple-300 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
              {item.name}
            </motion.button>
          ))}
        </div>
      )}

      {/* Floating Nav (Desktop) */}
      <motion.div
        ref={navRef}
        className="hidden sm:flex fixed items-center mt-1 left-1/2 -translate-x-1/2 bg-white/10 dark:bg-black/10 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl
        border-2 border-white/10 hover:border-purple-400/30 transition-all cursor-pointer group"
        style={{
          top: `${navButtonsTop}px`,
          background: `linear-gradient(90deg, rgba(139, 92, 246, 0.1) ${background}, transparent 0)`,
        }}
      >
        <div className="relative flex gap-3 text-sm font-medium text-white">
          {/* Hover effect background */}
          <div
            ref={hoverRef}
            className="absolute inset-0 bg-purple-400/10 rounded-full opacity-0"
            style={{ width: "20%", x: smoothX }}
          />

          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => navigate(`/${item.name.toLowerCase().replace(" ", "")}`)}
              className="relative w-[120px] h-[35px] flex items-center justify-center gap-2 text-white px-3 py-1 rounded-full border border-white/10
              hover:border-purple-400 hover:text-purple-300 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Icon - only on scroll */}
              <motion.span
                className="text-base"
                animate={{
                  opacity: scrollY > 10 ? 1 : 0,
                  display: scrollY > 10 ? "block" : "none",
                }}
              >
                {item.icon}
              </motion.span>

              {/* Text - only at top */}
              <motion.span
                className="text-sm whitespace-nowrap"
                animate={{
                  opacity: scrollY < 10 ? 1 : 0,
                  display: scrollY < 10 ? "block" : "none",
                }}
              >
                {item.name}
              </motion.span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
