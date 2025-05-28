

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { toast } from "react-toastify";
// import { ScrollProgress } from "../components/ScrollProcess";
// import Footer from "../components/Footer";
// import logo from "../assets/logocmp.png";
// import HeroSec from "../assets/heroSection1.mp4";
// import buy from "../assets/buy1.mp4";
// import { useNavigate } from "react-router-dom";
// import {
//   FaStar,
//   FaMapMarkerAlt,
//   FaPills,
//   FaTshirt,
//   FaTv,
//   FaAppleAlt,
//   FaFootballBall,
//   FaBook,
//   FaDumbbell,
//   FaCouch,
//   FaSpa,
//   FaShoePrints,
// } from "react-icons/fa";
// import { ShoppingCart, Menu, X, Search, ArrowUp } from "lucide-react";

// // Shop data structure
// const mockShops = [
//   {
//     id: 1,
//     name: "Green Valley Pharmacy",
//     address: "123 Main St, Cityville",
//     category: "Medicine",
//     rating: 4.8,
//     reviewCount: 124,
//     description: "Family-owned pharmacy since 1985",
//     image: "https://via.placeholder.com/300?text=Pharmacy",
//   },
//   {
//     id: 2,
//     name: "Urban Fashion Hub",
//     address: "456 Oak Ave, Trendytown",
//     category: "Clothes",
//     rating: 4.5,
//     reviewCount: 89,
//     description: "Latest fashion trends at affordable prices",
//     image: "https://via.placeholder.com/300?text=Fashion",
//   },
//   {
//     id: 3,
//     name: "Tech Galaxy",
//     address: "789 Tech Blvd, Gadgetville",
//     category: "Electronics",
//     rating: 4.9,
//     reviewCount: 215,
//     description: "Cutting-edge electronics and gadgets",
//     image: "https://via.placeholder.com/300?text=Electronics",
//   },
//   {
//     id: 4,
//     name: "FreshMart Groceries",
//     address: "101 Market St, Farmville",
//     category: "Groceries",
//     rating: 4.7,
//     reviewCount: 156,
//     description: "Farm-fresh produce daily",
//     image: "https://via.placeholder.com/300?text=Groceries",
//   },
//   {
//     id: 5,
//     name: "Sports Zone",
//     address: "202 Athletic Dr, Sportstown",
//     category: "Sports",
//     rating: 4.6,
//     reviewCount: 78,
//     description: "Equipment for all your sports needs",
//     image: "https://via.placeholder.com/300?text=Sports",
//   },
//   {
//     id: 6,
//     name: "Book Nook",
//     address: "303 Library Ln, Readerstown",
//     category: "Books",
//     rating: 4.9,
//     reviewCount: 142,
//     description: "Your neighborhood book haven",
//     image: "https://via.placeholder.com/300?text=Books",
//   },
//   {
//     id: 7,
//     name: "FitLife Gym Store",
//     address: "404 Fitness Way, Healthville",
//     category: "Fitness",
//     rating: 4.4,
//     reviewCount: 95,
//     description: "Everything for your fitness journey",
//     image: "https://via.placeholder.com/300?text=Fitness",
//   },
//   {
//     id: 8,
//     name: "Comfort Living Furniture",
//     address: "505 Design Dr, Homestown",
//     category: "Furniture",
//     rating: 4.7,
//     reviewCount: 112,
//     description: "Quality furniture for your home",
//     image: "https://via.placeholder.com/300?text=Furniture",
//   },
//   {
//     id: 9,
//     name: "Glamour Beauty",
//     address: "606 Style St, Beautytown",
//     category: "Beauty",
//     rating: 4.8,
//     reviewCount: 178,
//     description: "Premium beauty products and services",
//     image: "https://via.placeholder.com/300?text=Beauty",
//   },
//   {
//     id: 10,
//     name: "Shoe Palace",
//     address: "707 Footwear Ave, Shoetown",
//     category: "Shoes",
//     rating: 4.5,
//     reviewCount: 102,
//     description: "Footwear for every occasion",
//     image: "https://via.placeholder.com/300?text=Shoes",
//   },
// ];

// // New special offers data
// const specialOffers = [
//   {
//     id: 1,
//     shop: "Urban Fashion Hub",
//     title: "Summer Sale!",
//     description: "Get 30% off on all summer clothing",
//     discount: "30% OFF",
//     validUntil: "2025-06-15",
//     image: "https://via.placeholder.com/400?text=Fashion+Sale",
//   },
//   {
//     id: 2,
//     shop: "Tech Galaxy",
//     title: "Tech Bonanza",
//     description: "Buy any laptop and get headphones free",
//     discount: "Free Headphones",
//     validUntil: "2025-06-10",
//     image: "https://via.placeholder.com/400?text=Tech+Offer",
//   },
//   {
//     id: 3,
//     shop: "FreshMart Groceries",
//     title: "Weekend Special",
//     description: "Organic fruits at 20% discount",
//     discount: "20% OFF",
//     validUntil: "2025-06-05",
//     image: "https://via.placeholder.com/400?text=Grocery+Deal",
//   },
//   {
//     id: 4,
//     shop: "Sports Zone",
//     title: "Fitness Package",
//     description: "Yoga mat + weights bundle at $49.99",
//     discount: "Bundle Deal",
//     validUntil: "2025-06-20",
//     image: "https://via.placeholder.com/400?text=Sports+Bundle",
//   },
// ];

// const BuyerHomePage = () => {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [shops, setShops] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const navLinks = [
//     { name: "Home", href: "#" },
//     { name: "About Us", href: "#" },
//     { name: "Contact Us", href: "#" },
//   ];

//   useEffect(() => {
//     // Simulating API call with timeout
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);

//     // Filter shops based on selected category
//     const filteredShops = mockShops.filter(
//       (shop) => shop.category.toLowerCase() === category.toLowerCase()
//     );

//     setShops(filteredShops);
//   };

//   const addToCart = (product) => {
//     try {
//       setCart([...cart, product]);
//       toast.success(`${product.title.substring(0, 20)}... added to cart!`);
//     } catch (err) {
//       toast.error("Failed to add item to cart");
//     }
//   };

//   const buyNow = (product) => {
//     toast.info(`Proceeding to buy: ${product.title.substring(0, 20)}...`);
//     // Placeholder for actual buy flow
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           className="h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full"
//         />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <div className="text-center p-8 bg-red-100 rounded-lg">
//           <h2 className="text-2xl text-red-600 mb-4">Error Loading Products</h2>
//           <p className="text-gray-600">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white text-gray-800 min-h-screen">
//       <ScrollProgress />

//       {/* Navbar */}
//       <nav className="fixed w-full h-18 top-0 z-50 bg-white shadow border-b">
//         <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//           <motion.div
//             className="flex items-center gap-2 cursor-pointer"
//             whileHover={{ scale: 1.05 }}
//             onClick={() => navigate("/")}
//           >
//             <img
//               src={logo}
//               alt="Logo"
//               className="h-16 w-25 mb-2 rounded-full object-contain"
//             />
//           </motion.div>

//           {/* Search Bar */}
//           <div className="hidden ml-30 mb-5 md:flex flex-1 max-w-xl mx-8">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="Search shops or products..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
//               />
//               <button className="absolute right-3 top-2.5 text-gray-400 hover:text-purple-600 transition">
//                 <Search size={20} />
//               </button>
//             </div>
//           </div>

//           {/* Nav Links */}
//           <div className="hidden md:flex items-center space-x-6">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-600 hover:text-purple-600 transition"
//               >
//                 {link.name}
//               </a>
//             ))}
//             <button className="text-cyan-400 font-medium hover:underline">
//               Login
//             </button>
//             <button className="bg-cyan-400 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
//               Sign Up
//             </button>
//           </div>

//           {/* Icons */}
//           <div className="flex items-center space-x-4 md:hidden">
//             <button className="text-gray-500 hover:text-cyan-400 transition">
//               <Search size={24} />
//             </button>
//             <button className="relative text-gray-600">
//               <ShoppingCart size={24} />
//               {cart.length > 0 && (
//                 <motion.span
//                   className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                 >
//                   {cart.length}
//                 </motion.span>
//               )}
//             </button>
//             <button
//               className="text-gray-600 hover:cyan-400"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Nav */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="md:hidden bg-white shadow"
//             >
//               <div className="px-4 py-6 space-y-4 border-t">
//                 {navLinks.map((link) => (
//                   <a
//                     key={link.name}
//                     href={link.href}
//                     className="block text-gray-700 hover:text-cyan-400 transition"
//                   >
//                     {link.name}
//                   </a>
//                 ))}
//                 <button className="w-full py-2 text-cyan-400 hover:underline">
//                   Login
//                 </button>
//                 <button className="w-full py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-400 transition">
//                   Sign Up
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* Hero */}
//       <section className="relative w-full h-[40vh] overflow-hidden bg-black flex items-center justify-center">
//         <img
//           src={logo}
//           alt="Logo"
//           className="absolute top-32 left-20 mr-270 w-50 h-50 object-cover z-90 rounded-full"
//         />
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute top-25 right-20 bg-amber-transparent w-75 h-70 object-cover z-70"
//         >
//           <source src={buy} type="video/mp4" />
//         </video>
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-contain z-0"
//         >
//           <source src={HeroSec} type="video/mp4" />
//         </video>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/30 z-10"></div>

//         {/* Text */}
//         <motion.h1
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="text-3xl md:text-7xl font-bold mt-65 text-center text-white z-20 px-4"
//         >
//           Support <span className="text-cyan-400">Local Shops</span>
//         </motion.h1>
//       </section>

//       {/* Category Wheel Section */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold mb-4">Browse Local Shops</h2>
//           <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
//             Discover amazing local businesses in your community. Support
//             neighborhood entrepreneurs and find unique products.
//           </p>

//           <div className="flex justify-center mb-16">
//             <CategoryWheel onCategorySelect={handleCategorySelect} />
//           </div>

//           {/* Display selected category shops */}
//           {selectedCategory && (
//             <div className="mt-16">
//               <h3 className="text-3xl font-bold mb-8">
//                 {selectedCategory} Shops Near You
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {shops.map((shop) => (
//                   <motion.div
//                     key={shop.id}
//                     whileHover={{ y: -5 }}
//                     className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
//                   >
//                     <div className="relative h-48">
//                       <img
//                         src={shop.image}
//                         alt={shop.name}
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//                         <h3 className="text-xl font-bold text-white">
//                           {shop.name}
//                         </h3>
//                         <div className="flex items-center mt-1">
//                           <FaStar className="text-yellow-400 mr-1" />
//                           <span className="text-gray-200">
//                             {shop.rating} ({shop.reviewCount})
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-4">
//                       <div className="flex items-start mb-3">
//                         <FaMapMarkerAlt className="text-cyan-400 mt-1 mr-2 flex-shrink-0" />
//                         <p className="text-gray-600">{shop.address}</p>
//                       </div>
//                       <p className="text-gray-700 mb-4">{shop.description}</p>
//                       <button
//                         className="w-full py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition"
//                         onClick={() => navigate(`/shop/${shop.id}`)}
//                       >
//                         Visit Shop
//                       </button>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 text-center">
//             Featured Local Products
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {mockShops.slice(0, 8).map((shop) => (
//               <motion.div
//                 key={shop.id}
//                 whileHover={{ y: -5 }}
//                 className="bg-white border rounded-2xl p-4 shadow-lg hover:shadow-2xl transition flex flex-col justify-between"
//               >
//                 <img
//                   src={shop.image}
//                   alt={shop.name}
//                   className="w-full h-40 object-cover rounded-lg mb-4"
//                 />
//                 <h3 className="text-sm font-medium mb-2 line-clamp-2">
//                   {shop.name} - {shop.category}
//                 </h3>
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-cyan-400 font-bold text-lg">
//                     Visit Store
//                   </span>
//                   <div className="flex items-center">
//                     <FaStar className="text-yellow-400 mr-1" />
//                     <span>{shop.rating}</span>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => navigate(`/shop/${shop.id}`)}
//                     className="flex-1 py-2 px-3 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition text-sm"
//                   >
//                     View Shop
//                   </button>
//                   <button className="flex-1 py-2 px-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-50 transition text-sm">
//                     Directions
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* NEW: Special Offers Section */}
//       <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Special Offers
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Limited time deals from your favorite local shops. Hurry before
//               they expire!
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {specialOffers.map((offer) => (
//               <motion.div
//                 key={offer.id}
//                 whileHover={{ y: -10 }}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden border border-cyan-100"
//               >
//                 <div className="relative">
//                   <img
//                     src={offer.image}
//                     alt={offer.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
//                     {offer.discount}
//                   </div>
//                 </div>

//                 <div className="p-5">
//                   <div className="flex justify-between items-start mb-3">
//                     <h3 className="text-xl font-bold text-gray-800">
//                       {offer.title}
//                     </h3>
//                     <div className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs font-semibold">
//                       {offer.shop}
//                     </div>
//                   </div>

//                   <p className="text-gray-600 mb-4">{offer.description}</p>

//                   <div className="flex items-center justify-between mb-4">
//                     <div>
//                       <span className="text-xs text-gray-500">Expires in:</span>
//                       <CountdownTimer endDate={offer.validUntil} />
//                     </div>
//                     <FaStar className="text-yellow-400" />
//                   </div>

//                   <button
//                     className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:opacity-90 transition"
//                     onClick={() =>
//                       toast.info(`Redirecting to ${offer.shop} offer`)
//                     }
//                   >
//                     View Offer
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <motion.button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="fixed bottom-6 right-6 p-3 bg-gray-600 text-white rounded-full shadow-lg hover:bg-black transition"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//       >
//         <ArrowUp size={20} />
//       </motion.button>

//       <Footer />
//     </div>
//   );
// };

// // Fixed CategoryWheel component
// const CategoryWheel = ({ onCategorySelect }) => {
//   const [angle, setAngle] = useState(0);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const categories = [
//     { name: "Medicine", icon: <FaPills className="text-2xl" /> },
//     { name: "Clothes", icon: <FaTshirt className="text-2xl" /> },
//     { name: "Electronics", icon: <FaTv className="text-2xl" /> },
//     { name: "Groceries", icon: <FaAppleAlt className="text-2xl" /> },
//     { name: "Sports", icon: <FaFootballBall className="text-2xl" /> },
//     { name: "Books", icon: <FaBook className="text-2xl" /> },
//     { name: "Fitness", icon: <FaDumbbell className="text-2xl" /> },
//     { name: "Furniture", icon: <FaCouch className="text-2xl" /> },
//     { name: "Beauty", icon: <FaSpa className="text-2xl" /> },
//     { name: "Shoes", icon: <FaShoePrints className="text-2xl" /> },
//   ];

//   const colors = [
//     "#FFCDD2",
//     "#F8BBD0",
//     "#E1BEE7",
//     "#D1C4E9",
//     "#BBDEFB",
//     "#C8E6C9",
//     "#FFF9C4",
//     "#FFE0B2",
//     "#FFECB3",
//     "#D7CCC8",
//   ];

//   const sliceAngle = 360 / categories.length;
//   const radius = 140; // Reduced radius to keep items within wheel

//   const rotateToCategory = (index) => {
//     const targetAngle = 360 - index * sliceAngle - sliceAngle / 2;
//     const normalizedTarget = targetAngle % 360;
//     setAngle((prev) => prev + ((normalizedTarget - (prev % 360) + 360) % 360));
//     setSelectedCategory(categories[index].name);

//     if (onCategorySelect) {
//       onCategorySelect(categories[index].name);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center w-full select-none overflow-hidden">
//       {/* Wheel Container */}
//       <div
//         className="relative w-[400px] h-[400px] rounded-full border-8 border-blue-800 transition-transform duration-1000 ease-out shadow-lg overflow-hidden"
//         style={{ transform: `rotate(${angle}deg)` }}
//       >
//         {/* Center dot */}
//         <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-blue-800 rounded-full border-4 border-white transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

//         {categories.map((cat, i) => {
//           const rotation = i * sliceAngle;
//           const radians = (rotation - 90) * (Math.PI / 180);
//           const x = 200 + radius * Math.cos(radians);
//           const y = 200 + radius * Math.sin(radians);

//           return (
//             <div
//               key={i}
//               onClick={() => rotateToCategory(i)}
//               className="absolute cursor-pointer flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110"
//               style={{
//                 top: `${y}px`,
//                 left: `${x}px`,
//                 transform: "translate(-50%, -50%)",
//                 color: "#333",
//                 width: "90px",
//                 textAlign: "center",
//               }}
//             >
//               <div
//                 className={`w-14 h-14 rounded-full flex items-center justify-center mb-2`}
//                 style={{ backgroundColor: colors[i] }}
//               >
//                 {cat.icon}
//               </div>
//               <span className="text-xs font-semibold leading-tight">
//                 {cat.name}
//               </span>
//             </div>
//           );
//         })}
//       </div>

//       {/* Selected Display */}
//       <div className="mt-6 text-lg font-medium">
//         {selectedCategory ? (
//           <span>
//             Selected:{" "}
//             <span className="font-bold text-blue-600">{selectedCategory}</span>
//           </span>
//         ) : (
//           <span className="text-gray-500">
//             Select a category to see local shops
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// // Countdown Timer Component for Offers
// const CountdownTimer = ({ endDate }) => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       const difference = new Date(endDate) - new Date();
//       if (difference > 0) {
//         return {
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((difference / 1000 / 60) % 60),
//           seconds: Math.floor((difference / 1000) % 60),
//         };
//       }
//       return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     };

//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [endDate]);

//   return (
//     <div className="flex gap-1 mt-1">
//       {timeLeft.days > 0 && (
//         <div className="bg-gray-100 px-2 py-1 rounded text-xs font-bold">
//           {timeLeft.days}d
//         </div>
//       )}
//       <div className="bg-gray-100 px-2 py-1 rounded text-xs font-bold">
//         {timeLeft.hours}h
//       </div>
//       <div className="bg-gray-100 px-2 py-1 rounded text-xs font-bold">
//         {timeLeft.minutes}m
//       </div>
//     </div>
//   );
// };

// export default BuyerHomePage;



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { 
  FaStar, FaMapMarkerAlt, FaPills, FaTshirt, FaTv, FaAppleAlt, 
  FaFootballBall, FaBook, FaDumbbell, FaCouch, FaSpa, FaShoePrints,
  FaRegHeart, FaHeart, FaShoppingCart, FaRegClock
} from 'react-icons/fa';
import { 
  ShoppingCart, Menu, X, Search, ArrowUp, ChevronRight
} from "lucide-react";

const BuyerHomePage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [shops, setShops] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Shops", href: "#shops" },
    { name: "Categories", href: "#categories" },
    { name: "Offers", href: "#offers" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  // Shop data structure
  const mockShops = [
    { 
      id: 1, 
      name: "Green Valley Pharmacy", 
      address: "123 Main St, Cityville", 
      category: "Medicine", 
      rating: 4.8, 
      reviewCount: 124,
      description: "Family-owned pharmacy since 1985",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
    },
    { 
      id: 2, 
      name: "Urban Fashion Hub", 
      address: "456 Oak Ave, Trendytown", 
      category: "Clothes", 
      rating: 4.5, 
      reviewCount: 89,
      description: "Latest fashion trends at affordable prices",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
    },
    { 
      id: 3, 
      name: "Tech Galaxy", 
      address: "789 Tech Blvd, Gadgetville", 
      category: "Electronics", 
      rating: 4.9, 
      reviewCount: 215,
      description: "Cutting-edge electronics and gadgets",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
    },
    { 
      id: 4, 
      name: "FreshMart Groceries", 
      address: "101 Market St, Farmville", 
      category: "Groceries", 
      rating: 4.7, 
      reviewCount: 156,
      description: "Farm-fresh produce daily",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
    },
    { 
      id: 5, 
      name: "Sports Zone", 
      address: "202 Athletic Dr, Sportstown", 
      category: "Sports", 
      rating: 4.6, 
      reviewCount: 78,
      description: "Equipment for all your sports needs",
      image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
    },
    { 
      id: 6, 
      name: "Book Nook", 
      address: "303 Library Ln, Readerstown", 
      category: "Books", 
      rating: 4.9, 
      reviewCount: 142,
      description: "Your neighborhood book haven",
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
    },
    { 
      id: 7, 
      name: "FitLife Gym Store", 
      address: "404 Fitness Way, Healthville", 
      category: "Fitness", 
      rating: 4.4, 
      reviewCount: 95,
      description: "Everything for your fitness journey",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
    },
    { 
      id: 8, 
      name: "Comfort Living Furniture", 
      address: "505 Design Dr, Homestown", 
      category: "Furniture", 
      rating: 4.7, 
      reviewCount: 112,
      description: "Quality furniture for your home",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
    },
    { 
      id: 9, 
      name: "Glamour Beauty", 
      address: "606 Style St, Beautytown", 
      category: "Beauty", 
      rating: 4.8, 
      reviewCount: 178,
      description: "Premium beauty products and services",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
    },
    { 
      id: 10, 
      name: "Shoe Palace", 
      address: "707 Footwear Ave, Shoetown", 
      category: "Shoes", 
      rating: 4.5, 
      reviewCount: 102,
      description: "Footwear for every occasion",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
    },
  ];

  // New special offers data
  const specialOffers = [
    {
      id: 1,
      shop: "Urban Fashion Hub",
      title: "Summer Sale!",
      description: "Get 30% off on all summer clothing",
      discount: "30% OFF",
      validUntil: "2025-06-15",
      image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      shop: "Tech Galaxy",
      title: "Tech Bonanza",
      description: "Buy any laptop and get headphones free",
      discount: "Free Headphones",
      validUntil: "2025-06-10",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      shop: "FreshMart Groceries",
      title: "Weekend Special",
      description: "Organic fruits at 20% discount",
      discount: "20% OFF",
      validUntil: "2025-06-05",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      shop: "Sports Zone",
      title: "Fitness Package",
      description: "Yoga mat + weights bundle at $49.99",
      discount: "Bundle Deal",
      validUntil: "2025-06-20",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
  ];

  // Categories for grid view
  const categories = [
    { name: "Medicine", icon: <FaPills className="text-2xl" /> },
    { name: "Clothes", icon: <FaTshirt className="text-2xl" /> },
    { name: "Electronics", icon: <FaTv className="text-2xl" /> },
    { name: "Groceries", icon: <FaAppleAlt className="text-2xl" /> },
    { name: "Sports", icon: <FaFootballBall className="text-2xl" /> },
    { name: "Books", icon: <FaBook className="text-2xl" /> },
    { name: "Fitness", icon: <FaDumbbell className="text-2xl" /> },
    { name: "Furniture", icon: <FaCouch className="text-2xl" /> },
    { name: "Beauty", icon: <FaSpa className="text-2xl" /> },
    { name: "Shoes", icon: <FaShoePrints className="text-2xl" /> },
  ];

  useEffect(() => {
    // Simulating API call with timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    // Scroll listener for navbar effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    
    // Filter shops based on selected category
    const filteredShops = mockShops.filter(shop => 
      shop.category.toLowerCase() === category.toLowerCase()
    );
    
    setShops(filteredShops);
  };

  const addToCart = (product) => {
    try {
      setCart([...cart, product]);
      toast.success(`${product.title.substring(0, 20)}... added to cart!`);
    } catch (err) {
      toast.error("Failed to add item to cart");
    }
  };

  const toggleFavorite = (shopId) => {
    setFavorites(prev => ({
      ...prev,
      [shopId]: !prev[shopId]
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="h-16 w-16 border-4 border-teal-500 border-t-transparent rounded-full"
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
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800 min-h-screen">
      {/* Navbar */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/")}
          >
            <div className="bg-teal-600 text-white font-bold text-xl px-3 py-2 rounded-lg">
              LocalShop
            </div>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition ${isScrolled ? "text-gray-700 hover:text-teal-600" : "text-white hover:text-teal-200"}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search shops or products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none shadow-sm"
              />
              <button className="absolute right-3 top-2.5 text-gray-400 hover:text-teal-600 transition">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className={`relative ${isScrolled ? "text-gray-700" : "text-white"}`}>
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
              className={`${isScrolled ? "text-gray-700" : "text-white"}`}
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4 border-t">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search shops or products..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                  />
                  <button className="absolute right-3 top-2.5 text-gray-400 hover:text-teal-600 transition">
                    <Search size={20} />
                  </button>
                </div>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-700 hover:text-teal-600 transition py-2 border-b border-gray-100"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 flex space-x-4">
                  <button className="flex-1 py-2 text-teal-600 hover:bg-teal-50 rounded-lg transition">
                    Login
                  </button>
                  <button className="flex-1 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="relative w-full h-[85vh] overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 z-10"></div>
        
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gray-200 animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Discover Local <span className="text-teal-400">Treasures</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mb-10"
          >
            Support neighborhood businesses and find unique products in your community
          </motion.p>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => document.getElementById('shops').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition shadow-lg"
            >
              Explore Shops
            </button>
            <button 
              className="px-8 py-3 bg-white text-teal-600 font-medium rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Join Community
            </button>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find local businesses by category and support your neighborhood entrepreneurs
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-50 rounded-xl p-6 text-center cursor-pointer border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all"
                onClick={() => handleCategorySelect(category.name)}
              >
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {category.icon}
                </div>
                <h3 className="font-medium text-gray-800">{category.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Shops */}
      <section id="shops" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Shops</h2>
              <p className="text-gray-600">Top-rated local businesses in your area</p>
            </div>
            <button className="text-teal-600 font-medium flex items-center">
              View all <ChevronRight size={18} className="ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockShops.slice(0, 6).map((shop) => (
              <motion.div
                key={shop.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative">
                  <img 
                    src={shop.image} 
                    alt={shop.name}
                    className="w-full h-56 object-cover"
                  />
                  <button 
                    onClick={() => toggleFavorite(shop.id)}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-red-50"
                  >
                    {favorites[shop.id] ? 
                      <FaHeart className="text-red-500" /> : 
                      <FaRegHeart className="text-gray-600" />
                    }
                  </button>
                  <div className="absolute bottom-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {shop.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{shop.name}</h3>
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="font-medium">{shop.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <FaMapMarkerAlt className="text-teal-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-600">{shop.address}</p>
                  </div>
                  
                  <p className="text-gray-700 mb-5">{shop.description}</p>
                  
                  <div className="flex gap-3">
                    <button 
                      className="flex-1 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition"
                      onClick={() => navigate(`/shop/${shop.id}`)}
                    >
                      Visit Shop
                    </button>
                    <button 
                      className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      <FaShoppingCart className="text-teal-600" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section id="offers" className="py-16 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Limited time deals from your favorite local shops. Hurry before they expire!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialOffers.map((offer) => (
              <motion.div
                key={offer.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-teal-100"
              >
                <div className="relative">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {offer.discount}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{offer.title}</h3>
                    <div className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs font-semibold">
                      {offer.shop}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaRegClock className="mr-2" />
                      <CountdownTimer endDate={offer.validUntil} />
                    </div>
                  </div>
                  
                  <button 
                    className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium rounded-lg hover:opacity-90 transition shadow-md"
                    onClick={() => toast.info(`Redirecting to ${offer.shop} offer`)}
                  >
                    View Offer
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community Today</h2>
          <p className="text-teal-100 max-w-2xl mx-auto mb-10">
            Become part of the movement supporting local businesses and discover unique products in your neighborhood
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-teal-700 font-medium rounded-lg hover:bg-gray-100 transition shadow-lg">
              Sign Up Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        <ArrowUp size={20} />
      </motion.button>

      <Footer />
    </div>
  );
};

// Countdown Timer Component for Offers
const CountdownTimer = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(endDate) - new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <span>
      {timeLeft.days > 0 && `${timeLeft.days}d `}
      {timeLeft.hours}h {timeLeft.minutes}m
    </span>
  );
};

export default BuyerHomePage;