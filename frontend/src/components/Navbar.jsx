import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import axios from "axios";
import { toast } from "react-toastify";
import { Sun, Moon, Menu, X, Home, Info, Phone } from "lucide-react";
import logo from "../assets/logocmp.png"; // ✅ Import the logo image
import Footer from "../components/Footer";

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
      {/* <div className="w-full flex justify-between items-center px-4 sm:px-12 py-4 bg-white/5 dark:bg-black/30 backdrop-blur-lg shadow-md border-b border-white/10"> */}
      <div className="w-full h-8 sm:h-20 flex justify-between items-center px-4 sm:px-12 bg-gradient-to-br from-blue-400 via-white/20  to-red-100 bg:dark:bg-black/10  backdrop-blur-lg shadow-md border-b border-cyan-400">

        {/* ✅ Logo & Title */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          onClick={() => navigate("/")}
        >
          {/* <img src={logo} alt="ShopEase Logo" className="h-15 w-auto  object-contain" /> */}
          <img src={logo} alt="Logo" className="h-25 w-22 rounded-full object-contain" />

         
        </motion.div>

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
              border-2 border-white hover:border-purple-400 transition-all cursor-pointer"
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
              className="border-2 border-white rounded-full px-4 py-1 text-black bg-black/5 font-semibold text-sm
              hover:bg-white/10   transition-all backdrop-blur-sm"
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
        <div className="sm:hidden w-full bg-black/50 backdrop-blur-md flex flex-col items-center gap-4 py-4">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate(`/${item.name.toLowerCase().replace(" ", "")}`);
              }}
              className="text-cyan-400 text-bold flex items-center gap-2 text-lg font-semibold hover:text-purple-300 transition-all"
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
        className="hidden sm:flex fixed items-center mt-1 left-1/2 -translate-x-1/2 bg-white/5 dark:bg-black/10 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl
        border-2 border-white/60 hover:border-purple-blue/30 transition-all cursor-pointer group"
        style={{
          top: `${navButtonsTop}px`,
          background: `linear-gradient(90deg, rgba(139, 92, 246, 0.1) ${background}, transparent 0)`,
        }}
      >
        <div className="relative flex gap-3 text-sm font-medium text-white">
          <div
            ref={hoverRef}
            className="absolute inset-0 rounded-full opacity-0"
            style={{ width: "20%", x: smoothX }}
          />
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => navigate(`/${item.name.toLowerCase().replace(" ", "")}`)}
              className="relative w-[120px] h-[35px] flex items-center justify-center gap-2 text-black text-bold px-3 py-1 rounded-full border border-white
              hover:border-red-400 hover:text-blue-400 transition-all shadow-2xl-black duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="text-base"
                animate={{
                  opacity: scrollY > 10 ? 1 : 0,
                  display: scrollY > 10 ? "block" : "none",
                }}
              >
                {item.icon}
              </motion.span>
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
