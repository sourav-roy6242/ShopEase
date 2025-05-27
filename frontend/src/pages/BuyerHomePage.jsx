// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Star,
  Zap,
  Gift,
  Droplet,
  Heart,
  Sofa,
  Plus,
  ArrowUp,
  Menu,
  X,
  Search,
  ToyBrick,
} from "lucide-react";
// import { ScrollProgress } from "../components/ScrollProcess";
// import { toast } from "react-toastify";
// import logo from "../assets/logocmp.png";
// import Footer from "../components/Footer";
// import HeroSec from "../assets/heroSection1.mp4";
// import buy from "../assets/buy1.mp4";
// import { ChevronDown, ChevronLeft, ChevronRight, Tv, Shirt, Apple, Home, Sparkles, ToyBrick } from "lucide-react";
// import CategoryWheel from "./categorywhell.jsx";

// const categories = [
//   { name: "Electronics", icon: <Tv className="w-6 h-6" />, color: "text-blue-500" },
//   { name: "Fashion", icon: <Shirt className="w-6 h-6" />, color: "text-pink-500" },
//   { name: "Groceries", icon: <Apple className="w-6 h-6" />, color: "text-green-600" },
//   { name: "Home", icon: <Home className="w-6 h-6" />, color: "text-yellow-500" },
//   { name: "Beauty", icon: <Sparkles className="w-6 h-6" />, color: "text-purple-500" },
//   { name: "Toys", icon: <ToyBrick className="w-6 h-6" />, color: "text-red-500" },
// ];

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Tv,
  Shirt,
  Apple,
  Home,
  Sparkles,
 
} from "lucide-react";
import { ScrollProgress } from "../components/ScrollProcess";
import Footer from "../components/Footer";
import logo from "../assets/logocmp.png";
import HeroSec from "../assets/heroSection1.mp4";
import buy from "../assets/buy1.mp4";
import CategoryWheel from "./categorywhell"; // <- extracted component
import { useNavigate } from "react-router-dom";
import { FaStar } from 'react-icons/fa';  // at the top of your file

// Then use <FaStar /> instead of <Star /> in your JSX




const BuyerHomePage = () => {
  const [products, setProducts] = useState([]);
  // const [categories] = useState([
  //   { name: "Electronics", icon: <Zap size={30} />, color: "text-blue-500" },
  //   { name: "Fashion", icon: <Gift size={30} />, color: "text-pink-500" },
  //   {
  //     name: "Home & Furniture",
  //     icon: <Sofa size={30} />,
  //     color: "text-purple-500",
  //   },
  //   { name: "Beauty", icon: <Droplet size={30} />, color: "text-red-500" },
  //   { name: "Sports", icon: <Heart size={30} />, color: "text-green-500" },
  //   { name: "Medicines", icon: <Plus size={30} />, color: "text-yellow-500" },
  //   { name: "Toys", icon: <ToyBrick size={30} />, color: "text-teal-500" },
  //   { name: "Grocery", icon: <ArrowUp size={30} />, color: "text-gray-500" },
  // ]);
  // const [currentOffer, setCurrentOffer] = useState(0);
  // const [cart, setCart] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
  
  const [currentOffer, setCurrentOffer] = useState(0);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
        toast.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const addToCart = (product) => {
    try {
      setCart([...cart, product]);
      toast.success(`${product.title.substring(0, 20)}... added to cart!`);
    } catch (err) {
      toast.error("Failed to add item to cart");
    }
  };

  const buyNow = (product) => {
    toast.info(`Proceeding to buy: ${product.title.substring(0, 20)}...`);
    // Placeholder for actual buy flow
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center p-8 bg-red-100 rounded-lg">
          <h2 className="text-2xl text-red-600 mb-4">Error Loading Products</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <ScrollProgress />
      {/* Navbar & Hero remain unchanged */}

      {/* Navbar */}
      <nav className="fixed w-full h-18 top-0 z-50 bg-white shadow border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2  cursor-pointer"
            whileHover={{ scale: 1.5 }}
            onClick={() => navigate("/")}
          >
            {/* <img src={logo} alt="ShopEase Logo" className="h-15 w-auto  object-contain" /> */}
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-25 mb-2 rounded-full object-contain"
            />
          </motion.div>

          {/* Search Bar */}
          <div className="hidden ml-30 mb-5 md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <button className="absolute right-3 top-2.5 text-gray-400 hover:text-purple-600 transition">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-purple-600 transition"
              >
                {link.name}
              </a>
            ))}
            <button className="text-cyan-400 font-medium hover:underline">
              Login
            </button>
            <button className="bg-cyan-400 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              Sign Up
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:hidden">
            <button className="text-gray-500 hover:text-cyan-400 transition">
              <Search size={24} />
            </button>
            <button className="relative text-gray-600">
              <ShoppingCart size={24} />
              {cart.length > 0 && (
                <motion.span
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  {cart.length}
                </motion.span>
              )}
            </button>
            <button
              className="text-gray-600 hover:cyan-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white shadow"
            >
              <div className="px-4 py-6 space-y-4 border-t">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-700 hover:text-cyan-400 transition"
                  >
                    {link.name}
                  </a>
                ))}
                <button className="w-full py-2 text-cyan-400 hover:underline">
                  Login
                </button>
                <button className="w-full py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-400 transition">
                  Sign Up
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="relative w-full h-[40vh] overflow-hidden bg-black flex items-center justify-center">
  {/* Video */}
  <img src={logo} alt="Logo" className="absolute top-32 left-20 mr-270 w-50 h-50 object-cover z-90 rounded-full" />
  <video autoPlay loop muted playsInline className="absolute top-25 right-20 bg-amber-transparent w-75 h-70 object-cover z-70">
    <source src={buy} type="video/mp4" />
  </video>
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-contain z-0"
  >
    <source src={HeroSec} type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30 z-10"></div>

  {/* Text */}
  <motion.h1
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="text-3xl md:text-7xl font-bold mt-65 text-center text-white z-20 px-4"
  >
    Discover <span className="text-cyan-400">Endless Choices</span>
  </motion.h1>
</section>




      {/* Offers */}
      {/* <section className="py-8 h-170 ">
        
          <h2 className="text-4xl font-bold mt-8 mb-8 ml-20 mr-20">Today's Offers</h2>
          <div className="relative h-120 mb-20 ml-20 mr-20 rounded-xl overflow-hidden shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentOffer}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="absolute inset-0 flex items-center justify-center text-white text-center p-8"
                style={{
                  background:
                    currentOffer === 0
                      ? "linear-gradient(to right, #8e2de2, #4a00e0)"
                      : currentOffer === 1
                      ? "linear-gradient(to right, #f7971e, #ffd200)"
                      : "linear-gradient(to right, #00c6ff, #0072ff)",
                }}
              >
                <div>
                  <h3 className="text-3xl font-bold mb-2">
                    {currentOffer === 0
                      ? "70% Off Electronics"
                      : currentOffer === 1
                      ? "Fashion Festival"
                      : "Health & Wellness"}
                  </h3>
                  <p>
                    {currentOffer === 0
                      ? "Get the best deals on gadgets now"
                      : currentOffer === 1
                      ? "Trendy looks at half the price"
                      : "Boost your health with daily care products"}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        
      </section> */}


<section className="py-6 bg-gray-50">
  <h2 className="text-5xl font-bold text-center mb-10">Today's Offers</h2>

  <div className="relative mx-20 h-[26rem] rounded-3xl  overflow-hidden shadow-2xl">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentOffer}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-12"
        style={{
          background:
            currentOffer === 0
              ? "linear-gradient(135deg, #8e2de2, #4a00e0)"
              : currentOffer === 1
              ? "linear-gradient(135deg, #f7971e, #ffd200)"
              : "linear-gradient(135deg, #00c6ff, #0072ff)",
        }}
      >
        <div className="max-w-2xl">
          <h3 className="text-5xl font-extrabold mb-4">
            {currentOffer === 0
              ? "70% Off Electronics"
              : currentOffer === 1
              ? "Fashion Festival"
              : "Health & Wellness"}
          </h3>
          <p className="text-xl">
            {currentOffer === 0
              ? "Get the best deals on top gadgets now"
              : currentOffer === 1
              ? "Explore trendy looks at unbeatable prices"
              : "Rejuvenate with our wellness product range"}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>

    {/* Left Arrow */}
    <button
      onClick={() => setCurrentOffer((prev) => (prev - 1 + 3) % 3)}
      className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-30 hover:bg-opacity-50 text-black p-3 rounded-full shadow-md transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    {/* Right Arrow */}
    <button
      onClick={() => setCurrentOffer((prev) => (prev + 1) % 3)}
      className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-30 hover:bg-opacity-50 text-black p-3 rounded-full shadow-md transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>

  {/* Dots Under the Card */}
  <div className="mt-6 flex justify-center space-x-3">
    {[0, 1, 2].map((index) => (
      <button
        key={index}
        onClick={() => setCurrentOffer(index)}
        className={`w-4 h-4 rounded-full ${
          currentOffer === index ? "bg-gray-800" : "bg-gray-400"
        } transition-all duration-300`}
      />
    ))}
  </div>
</section>


      {/* Categories */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border rounded-lg p-6 flex flex-col items-center justify-center shadow hover:shadow-lg transition"
              >
                <div className={`${cat.color} mb-2`}>{cat.icon}</div>
                <h3 className="font-medium">{cat.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      
     


      <CategoryWheel/>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Best Sellers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -5 }}
                className="bg-white border rounded-2xl p-4 shadow-lg hover:shadow-2xl transition flex flex-col justify-between"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-sm font-medium mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 font-bold text-lg">
                    ${product.price}
                  </span>
                  {/* <Star size={18} className="text-yellow-400" /> */}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 py-2 px-3 bg-cyan-400 text-white rounded-lg hover:cyan-400 transition text-sm"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => buyNow(product)}
                    className="flex-1 py-2 px-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-purple-50 transition text-sm"
                  >
                    Buy Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 bg-gray-600 text-white rounded-full shadow-lg hover:bg-black transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <ArrowUp size={20} />
      </motion.button>

      <Footer />
    </div>
  );
};

export default BuyerHomePage;
