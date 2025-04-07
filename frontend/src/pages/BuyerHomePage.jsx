
// import React, { useState, useEffect } from 'react';
// import { motion } from "framer-motion";
// import { 
//   ChevronLeftIcon, 
//   ChevronRightIcon,
//   ShoppingCartIcon,
//   Bars3Icon,
//   XMarkIcon,
//   MagnifyingGlassIcon,
//   GiftIcon,
//   SparklesIcon,
//   ShoppingBagIcon,
//   HeartIcon,
//   SwatchIcon,
//   AcademicCapIcon,
//   CpuChipIcon,
//   BookOpenIcon,
//   PuzzlePieceIcon,
//   HomeIcon,
//   FaceSmileIcon,
//   StarIcon,
//   CurrencyDollarIcon,
//   ArrowRightIcon
// } from "@heroicons/react/24/solid";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <motion.nav 
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="bg-gray-700 shadow-2xl py-4 px-8 flex justify-between items-center fixed w-full top-0 z-50"
//     >
//       <motion.h1 className="text-yellow-500 flex space-x-1 md:text-3xl lg:text-xl font-bold transition-all duration-300">
//         {"SHOPEASE".split("").map((letter, index) => (
//           <motion.span
//             key={index}
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1, duration: 0.5 }}
//           >
//             {letter}
//           </motion.span>
//         ))}
//       </motion.h1>

//       <div className="flex items-center bg-gray-900 rounded-full px-3 py-1 md:px-4 md:py-2 transition-all duration-300 w-26 md:w-60">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="bg-transparent focus:outline-none text-white text-sm md:text-base px-2 w-full"
//         />
//         <button className="text-yellow-500 ml-2">
//           <MagnifyingGlassIcon className="h-4 w-4 md:h-5 md:w-5" />
//         </button>
//       </div>

//       <div className="hidden md:flex items-center space-x-6">
//         <a href="#" className="text-white hover:text-yellow-500 transition">Home</a>
//         <a href="#" className="text-white hover:text-yellow-500 transition">About Us</a>
//         <a href="#" className="text-white hover:text-yellow-500 transition">Contact Us</a>
//         <button className="text-yellow-500">
//           <ShoppingCartIcon className="h-6 w-6" />
//         </button>
//         <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition">
//           Login / Signup
//         </button>
//       </div>

//       <div className="md:hidden flex items-center">
//         <button onClick={toggleMenu} className="text-white">
//           {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
//         </button>
//       </div>

//       {menuOpen && (
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 md:hidden"
//         >
//           <a href="#" className="hover:text-yellow-500 transition">About Us</a>
//           <a href="#" className="hover:text-yellow-500 transition">Contact Us</a>
//           <button className="text-yellow-500">
//             <ShoppingCartIcon className="h-6 w-6" />
//           </button>
//           <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition">
//             Login / Signup
//           </button>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// };

// const WelcomeSection = () => {
//   return (
//     <section className="bg-gradient-to-r from-blue-400 to-purple-400 text-black rounded-xl py-10 ml-7 shadow-2xl mr-7 text-center mt-20">
//       <motion.h2
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="text-4xl text-white drop-shadow-lg font-bold"
//       >
//         Welcome to 
//         <motion.span 
//           initial={{ scale: 1 }}
//           animate={{ scale: 1.2 }}
//           transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
//           className="text-yellow-400 font-bold ml-2"
//         >
//           SHOPEASE
//         </motion.span>
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         className="mt-4 text-lg font-bold max-w-2xl text-gray-700 mx-auto"
//       >
//         Your one-stop online shopping destination. Explore a wide range of products from trusted sellers at unbeatable prices!
//       </motion.p>
//     </section>
//   );
// };

// const OfferSection = () => {
//   const offers = [
//     { 
//       text: "50% OFF on Electronics!", 
//       bg: "bg-gradient-to-br from-red-500 to-pink-600",
//       icon: <GiftIcon className="h-16 w-16 text-white/90" />,
//       color: "text-red-100"
//     },
//     { 
//       text: "Buy 1 Get 1 Free on Fashion!", 
//       bg: "bg-gradient-to-br from-blue-600 to-indigo-700",
//       icon: <SparklesIcon className="h-16 w-16 text-white/90" />,
//       color: "text-blue-100"
//     },
//     { 
//       text: "Free Shipping Worldwide!", 
//       bg: "bg-gradient-to-br from-emerald-600 to-teal-700",
//       icon: <ShoppingCartIcon className="h-16 w-16 text-white/90" />,
//       color: "text-emerald-100"
//     }
//   ];

//   const [currentOffer, setCurrentOffer] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentOffer(prev => (prev + 1) % offers.length);
//       setProgress(0);
//     }, 5000);

//     const progressInterval = setInterval(() => {
//       setProgress(prev => Math.min(prev + 1, 100));
//     }, 50);

//     return () => {
//       clearInterval(interval);
//       clearInterval(progressInterval);
//     };
//   }, []);

//   const handleSlide = (newDirection) => {
//     setDirection(newDirection);
//     setCurrentOffer(prev => (prev + newDirection + offers.length) % offers.length);
//     setProgress(0);
//   };

//   return (
//     <div className="relative mx-7 mt-8 h-[500px] overflow-hidden rounded-3xl shadow-2xl">
//       <div className="absolute top-4 left-1/2 z-30 h-1 w-64 -translate-x-1/2 transform rounded-full bg-white/20">
//         <motion.div
//           className="h-full rounded-full bg-white/80"
//           initial={{ width: 0 }}
//           animate={{ width: `${progress}%` }}
//           transition={{ duration: 5, ease: "linear" }}
//         />
//       </div>

//       <motion.div
//         key={currentOffer}
//         initial={{ opacity: 0, rotateY: direction === 1 ? 90 : -90, scale: 0.8 }}
//         animate={{ opacity: 1, rotateY: 0, scale: 1 }}
//         transition={{ duration: 0.8, ease: "easeInOut" }}
//         className={`relative h-full w-full ${offers[currentOffer].bg}`}
//       >
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0.2)_100%)]" />
//         <div className="flex h-full flex-col items-center justify-center space-y-8 p-8">
//           <motion.div
//             initial={{ scale: 0, rotate: -180 }}
//             animate={{ scale: 1, rotate: 0 }}
//             transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
//             className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg"
//           >
//             {offers[currentOffer].icon}
//           </motion.div>
          
//           <motion.h2
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//             className={`text-center text-4xl font-bold leading-tight tracking-wide ${offers[currentOffer].color} drop-shadow-lg`}
//           >
//             {offers[currentOffer].text}
//           </motion.h2>
          
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.6, type: "spring" }}
//             className="flex space-x-4"
//           >
//             {offers.map((_, index) => (
//               <div
//                 key={index}
//                 className={`h-3 w-3 rounded-full transition-all duration-300 ${
//                   index === currentOffer ? 'bg-white scale-125' : 'bg-white/50'
//                 }`}
//               />
//             ))}
//           </motion.div>
//         </div>
//       </motion.div>

//       <button
//         onClick={() => handleSlide(-1)}
//         className="absolute left-6 top-1/2 -translate-y-1/2 transform rounded-full bg-white/10 p-4 backdrop-blur-lg transition-all hover:bg-white/20 hover:scale-110 active:scale-95"
//       >
//         <ChevronLeftIcon className="h-8 w-8 text-white" />
//       </button>
      
//       <button
//         onClick={() => handleSlide(1)}
//         className="absolute right-6 top-1/2 -translate-y-1/2 transform rounded-full bg-white/10 p-4 backdrop-blur-lg transition-all hover:bg-white/20 hover:scale-110 active:scale-95"
//       >
//         <ChevronRightIcon className="h-8 w-8 text-white" />
//       </button>

//       <motion.div
//         initial={{ y: -20 }}
//         animate={{ y: 20 }}
//         transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
//         className="absolute top-1/4 left-1/4 h-24 w-24 rounded-full bg-white/10 backdrop-blur-sm"
//       />
//       <motion.div
//         initial={{ y: 20 }}
//         animate={{ y: -20 }}
//         transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
//         className="absolute bottom-1/4 right-1/4 h-32 w-32 rounded-full bg-white/10 backdrop-blur-sm"
//       />
//     </div>
//   );
// };

// const CategorySection = () => {
//   const categories = [
//     { name: "Groceries", icon: <ShoppingBagIcon className="h-12 w-12" />, bg: "bg-gradient-to-br from-green-500 to-emerald-600" },
//     { name: "Medicine", icon: <HeartIcon className="h-12 w-12" />, bg: "bg-gradient-to-br from-red-500 to-pink-600" },
//     { name: "Fashion", icon: <SwatchIcon className="h-12 w-12" />, bg: "bg-gradient-to-br from-blue-500 to-indigo-600" },
//     { name: "Sports", icon: <AcademicCapIcon className="h-12 w-12" />, bg: "bg-gradient-to-br from-orange-500 to-amber-600" },
//     { name: "Jewellery", icon: <SparklesIcon className="h-12 w-12" />, bg: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
//     { name: "Electronics", icon: <CpuChipIcon className="h-12 w-12" />, bg: "bg-gradient-to-br from-cyan-500 to-sky-600" },
//     { name: "Books", icon: <BookOpenIcon className="h-12 w-12" />, bg: "bg-gradient-to-br from-rose-500 to-red-600" },
//     { name: "Toys", icon: <PuzzlePieceIcon className="h-12 w-12" />, bg: "bg-gradient-to-br from-yellow-500 to-amber-600" },
//     { name: "Furniture", icon: <HomeIcon className="h-12 w-12" />, bg: "bg-gradient-to-br from-stone-500 to-zinc-600" },
//     { name: "Beauty", icon: <FaceSmileIcon className="h-12 w-12" />, bg: "bg-gradient-to-br from-pink-500 to-rose-600" }
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const cardWidth = 320;
//   const totalCategories = categories.length;
//   const containerRef = React.useRef(null);
//   const [centerOffset, setCenterOffset] = useState(0);

//   useEffect(() => {
//     if (containerRef.current) {
//       const containerWidth = containerRef.current.offsetWidth;
//       setCenterOffset(containerWidth / 2 - cardWidth / 2);
//       setActiveIndex(Math.floor(totalCategories / 2));
//     }
//   }, [totalCategories]);

//   const nextSlide = () => setActiveIndex(prev => (prev + 1) % totalCategories);
//   const prevSlide = () => setActiveIndex(prev => (prev - 1 + totalCategories) % totalCategories);

//   return (
//     <div className="mx-7 my-20 overflow-hidden" ref={containerRef}>
//       <section className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800 rounded-4xl shadow-2xl">
//         <motion.div 
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8, type: "spring" }}
//           className="absolute inset-0 opacity-10 bg-gradient-radial from-white to-transparent"
//         />

//         <div className="text-center mb-20 px-8 relative z-10">
//           <motion.h2 
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-5xl font-bold text-white mb-4"
//           >
//             Featured Categories
//             <motion.div 
//               className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mt-4 mx-auto"
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//             />
//           </motion.h2>
//         </div>

//         <div className="relative h-[500px] perspective-1000px overflow-hidden">
//           <motion.div 
//             className="flex"
//             style={{ x: -activeIndex * cardWidth + centerOffset }}
//             animate={{ x: -activeIndex * cardWidth + centerOffset, transition: { type: "spring", stiffness: 300, damping: 30 } }}
//           >
//             {categories.map((category, index) => {
//               const distance = Math.abs(index - activeIndex);
//               const scale = 1 - distance * 0.15;
//               const opacity = 1 - distance * 0.3;

//               return (
//                 <motion.div
//                   key={category.name}
//                   className="w-[320px] h-[400px] mx-4 shrink-0 origin-center transform-preserve-3d"
//                   style={{ scale, opacity, rotateY: (index - activeIndex) * 15 }}
//                   transition={{ type: "spring", stiffness: 120, damping: 20 }}
//                   whileHover={{ scale: index === activeIndex ? 1.1 : 1.05, y: index === activeIndex ? -15 : -10 }}
//                 >
//                   <motion.div
//                     className={`${category.bg} h-full rounded-3xl p-8 shadow-2xl overflow-hidden ${index === activeIndex ? 'ring-4 ring-white/20' : ''}`}
//                     initial={{ scale: 0.7, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ delay: index * 0.1, type: "spring" }}
//                   >
//                     <motion.div 
//                       className="mb-8 p-6 bg-white/10 rounded-full backdrop-blur-sm mx-auto w-fit"
//                       whileHover={{ rotate: 360, scale: 1.1 }}
//                     >
//                       {category.icon}
//                     </motion.div>

//                     <h3 className="text-2xl font-bold text-white text-center mb-4">
//                       {category.name}
//                     </h3>

//                     <motion.div 
//                       className="h-1 bg-white/30 rounded-full mx-auto"
//                       initial={{ width: 0 }}
//                       whileInView={{ width: '60%' }}
//                       transition={{ duration: 0.8 }}
//                     />
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>

//         <div className="flex justify-center mt-16 gap-4 relative z-10">
//           <motion.button
//             onClick={prevSlide}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
//           >
//             <ChevronLeftIcon className="h-8 w-8 text-white" />
//           </motion.button>
          
//           <div className="flex items-center gap-2">
//             {categories.map((_, index) => (
//               <motion.div
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`h-3 rounded-full cursor-pointer transition-all ${
//                   index === activeIndex 
//                     ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-500' 
//                     : 'w-3 bg-white/30'
//                 }`}
//                 whileHover={{ scaleY: 1.5 }}
//               />
//             ))}
//           </div>

//           <motion.button
//             onClick={nextSlide}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
//           >
//             <ChevronRightIcon className="h-8 w-8 text-white" />
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// };

// const ProductGrid = ({ title, products, metric }) => {
//   return (
//     <section className="mx-7 my-20">
//       <motion.div 
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-white rounded-4xl shadow-2xl p-12"
//       >
//         <div className="flex items-center justify-between mb-12">
//           <motion.h2 
//             initial={{ x: -50 }}
//             animate={{ x: 0 }}
//             className="text-3xl font-bold text-gray-800"
//           >
//             {title}
//           </motion.h2>
//           <button className="flex items-center text-blue-600 hover:text-blue-700 transition">
//             View All <ArrowRightIcon className="h-5 w-5 ml-2" />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.map((product, index) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, type: "spring" }}
//               whileHover={{ y: -10 }}
//               className="bg-white rounded-2xl p-6 shadow-lg relative group"
//             >
//               <div className="h-64 bg-gray-100 rounded-xl overflow-hidden mb-6">
//                 <img 
//                   src={product.image} 
//                   alt={product.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="space-y-4">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {product.name}
//                   </h3>
//                   {metric && (
//                     <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
//                       {metric}: {product[metric]}
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center text-green-600">
//                     <CurrencyDollarIcon className="h-6 w-6" />
//                     <span className="text-xl font-bold ml-1">
//                       {product.price.toFixed(2)}
//                     </span>
//                   </div>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm"
//                   >
//                     Add to Cart
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// const BuyerHomePage = () => {
//   const productsData = {
//     mostViewed: [
//       { id: 1, name: "Wireless Headphones", price: 199.99, image: "https://picsum.photos/seed/headphone/300/200", category: "Electronics", views: 1500 },
//       { id: 2, name: "Smart Watch", price: 159.99, image: "https://picsum.photos/seed/watch/300/200", category: "Electronics", views: 1450 },
//       { id: 3, name: "Designer Handbag", price: 299.50, image: "https://picsum.photos/seed/handbag/300/200", category: "Fashion", views: 1320 },
//     ],
//     mostSold: [
//       { id: 4, name: "Yoga Mat", price: 29.95, image: "https://picsum.photos/seed/yoga/300/200", category: "Sports", sold: 850 },
//       { id: 5, name: "Organic Coffee", price: 12.99, image: "https://picsum.photos/seed/coffee/300/200", category: "Groceries", sold: 720 },
//       { id: 6, name: "Wireless Speaker", price: 129.95, image: "https://picsum.photos/seed/speaker/300/200", category: "Electronics", sold: 680 },
//     ],
//     categoryWise: {
//       Electronics: [
//         { id: 7, name: "Noise-Canceling Headphones", price: 299.99, image: "https://picsum.photos/seed/headphone2/300/200" },
//         { id: 8, name: "4K Monitor", price: 399.00, image: "https://picsum.photos/seed/monitor/300/200" },
//       ],
//       Fashion: [
//         { id: 9, name: "Leather Jacket", price: 199.99, image: "https://picsum.photos/seed/jacket/300/200" },
//         { id: 10, name: "Designer Sunglasses", price: 149.95, image: "https://picsum.photos/seed/sunglasses/300/200" },
//       ],
//       Home: [
//         { id: 11, name: "Smart Lamp", price: 89.99, image: "https://picsum.photos/seed/lamp/300/200" },
//         { id: 12, name: "Air Purifier", price: 199.95, image: "https://picsum.photos/seed/purifier/300/200" },
//       ]
//     }
//   };

//   return (
//     <div className="bg-gray-50">
//       <Navbar />
//       <WelcomeSection />
//       <OfferSection />
//       <CategorySection />
      
//       <ProductGrid
//         title="Most Viewed Products"
//         products={productsData.mostViewed}
//         metric="views"
//       />

//       <ProductGrid
//         title="Best Selling Products"
//         products={productsData.mostSold}
//         metric="sold"
//       />

//       {Object.entries(productsData.categoryWise).map(([category, items]) => (
//         <ProductGrid
//           key={category}
//           title={`Popular in ${category}`}
//           products={items}
//         />
//       ))}
//     </div>
//   );
// };

// export default BuyerHomePage;



import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { BuildingStorefrontIcon, UsersIcon, GlobeEuropeAfricaIcon } from "@heroicons/react/24/solid";

import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  ChevronUpIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  GiftIcon,
  SparklesIcon,
  ShoppingBagIcon,
  HeartIcon,
  SwatchIcon,
  AcademicCapIcon,
  CpuChipIcon,
  BookOpenIcon,
  PuzzlePieceIcon,
  HomeIcon,
  FaceSmileIcon,
  StarIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";



// Dark Theme Configuration
const darkTheme = {
  background: "bg-gray-500",
  surface: "bg-gray-600",
  surfaceElevated: "bg-gray-700",
  primary: "text-purple-400",
  secondary: "text-blue-400",
  textPrimary: "text-gray-100",
  textSecondary: "text-gray-400",
  border: "border-gray-700",
  gradient: "from-purple-900 via-gray-900 to-blue-900",
};

// Scroll Animation Wrapper
const ScrollAnimationWrapper = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Navbar Component
const Navbar = () => {
  const { scrollY } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(17, 24, 39, 1)", "rgba(17, 24, 39, 0.98)"]
  );

  return (
    <motion.nav 
      style={{ backgroundColor }}
      className={`shadow-2xl py-4 px-8 flex justify-between items-center fixed w-full top-0 z-50 ${darkTheme.background}`}
    >
      <motion.h1 className={`${darkTheme.primary} flex space-x-1 md:text-3xl lg:text-xl font-bold`}>
        {"SHOPEASE".split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      <div className={`flex items-center ${darkTheme.surface} rounded-full px-3 py-1 md:px-4 md:py-2 transition-all duration-300 w-26 md:w-60`}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`bg-transparent focus:outline-none ${darkTheme.textPrimary} text-sm md:text-base px-2 w-full`}
        />
        <MagnifyingGlassIcon className={`h-5 w-5 ${darkTheme.textSecondary}`} />
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className={`${darkTheme.textPrimary} hover:${darkTheme.primary} transition`}>Home</a>
        <a href="#" className={`${darkTheme.textPrimary} hover:${darkTheme.primary} transition`}>About</a>
        <a href="#" className={`${darkTheme.textPrimary} hover:${darkTheme.primary} transition`}>Contact</a>
        <button className={darkTheme.primary}>
          <ShoppingCartIcon className="h-6 w-6" />
        </button>
        <button className={`px-4 py-2 ${darkTheme.primary} bg-opacity-10 hover:bg-opacity-20 rounded-lg backdrop-blur-sm transition`}>
          Login
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className={darkTheme.textPrimary}
        >
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute top-16 left-0 w-full ${darkTheme.surface} ${darkTheme.textPrimary} flex flex-col items-center space-y-4 py-4 md:hidden`}
        >
          <a href="#" className="hover:text-purple-400 transition">About</a>
          <a href="#" className="hover:text-purple-400 transition">Contact</a>
          <button className="text-purple-400">
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
          <button className="px-4 py-2 text-purple-400 bg-opacity-10 hover:bg-opacity-20 rounded-lg backdrop-blur-sm transition">
            Login
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};



const WelcomeSection = () => {
  const ref = useRef(null);
  const offerSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start start", "end start"] 
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const handleScrollDown = () => {
    offerSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Split text into words for animation
  const subtitle = "Discover premium products in our sophisticated dark theme experience".split(" ");

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900"
      />
      
      <motion.div 
        className="relative z-10 text-center px-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className={`text-4xl md:text-6xl ${darkTheme.textPrimary} drop-shadow-lg font-bold mb-6`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to 
          <motion.span 
            className="text-purple-400 ml-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3
            }}
          >
            SHOPEASE
          </motion.span>
        </motion.h2>

        <motion.div
          className={`text-lg md:text-2xl ${darkTheme.textSecondary} max-w-2xl mx-auto`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {subtitle.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: i * 0.08 + 0.5
              }}
            >
              {word + " "}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1,
          y: 0,
          transition: { 
            delay: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1.5
          }
        }}
        onClick={handleScrollDown}
      >
        <ChevronDownIcon className={`h-12 w-12 ${darkTheme.textPrimary} animate-bounce`} />
      </motion.div>
    </section>
  );
};

// // Offer Section


const OfferSection = () => {
  const offers = [
    { 
      text: "FLASH SALE! 60% OFF", 
      subtitle: "Premium Electronics",
      bg: "bg-gradient-to-br from-cyan-500 to-blue-600",
      icon: <CpuChipIcon className="h-20 w-20 text-white/90" />,
      pattern: "absolute inset-0 bg-gradient-to-r from-white/5 to-transparent",
      progressColor: "bg-cyan-400"
    },
    { 
      text: "New Collection", 
      subtitle: "Designer Fashion",
      bg: "bg-gradient-to-br from-fuchsia-600 to-pink-500",
      icon: <SparklesIcon className="h-20 w-20 text-white/90" />,
      pattern: "absolute inset-0 bg-[radial-gradient(#fff1,transparent)]",
      progressColor: "bg-fuchsia-400"
    },
    { 
      text: "Free Worldwide Shipping", 
      subtitle: "On Orders Over $99",
      bg: "bg-gradient-to-br from-green-500 to-emerald-600",
      icon: <ShoppingCartIcon className="h-20 w-20 text-white/90" />,
      pattern: "absolute inset-0 bg-[linear-gradient(45deg,#0000_75%,#fff2)]",
      progressColor: "bg-green-400"
    }
  ];

  const [currentOffer, setCurrentOffer] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer(prev => (prev + 1) % offers.length);
      setProgress(0);
    }, 8000);

    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + 100/80, 100)); // 8s duration
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  const handleSlide = (newDirection) => {
    setDirection(newDirection);
    setCurrentOffer(prev => (prev + newDirection + offers.length) % offers.length);
    setProgress(0);
  };

  return (
    <ScrollAnimationWrapper>
      <div className="relative mx-7 mt-8 h-[500px] overflow-hidden rounded-[3rem] shadow-2xl">
        {/* Progress Bar */}
        <div className="absolute top-8 left-1/2 z-30 -translate-x-1/2 transform">
          <div className="h-1 w-64 rounded-full bg-gray-700/50 backdrop-blur-sm">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: offers[currentOffer].progressColor }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 8, ease: "linear" }}
            />
          </div>
        </div>

        {/* Offers Container */}
        <motion.div
          key={currentOffer}
          initial={{ 
            opacity: 0,
            scale: 0.95,
            rotateX: direction === 1 ? 15 : -15,
            filter: "blur(8px)"
          }}
          animate={{ 
            opacity: 1,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)"
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            rotateX: direction === 1 ? -15 : 15,
            filter: "blur(8px)"
          }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className={`relative h-full w-full ${offers[currentOffer].bg}`}
        >
          <div className={`${offers[currentOffer].pattern} mix-blend-overlay`} />
          
          <div className="flex h-full flex-col items-center justify-center space-y-8 p-8">
            {/* Icon Container */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: 0.3,
                type: "spring",
                stiffness: 120,
                damping: 15
              }}
              className="rounded-2xl bg-white/10 p-6 backdrop-blur-xl shadow-2xl"
            >
              {offers[currentOffer].icon}
            </motion.div>
            
            {/* Text Content */}
            <div className="text-center space-y-6">
              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight"
              >
                {offers[currentOffer].text}
              </motion.h2>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-xl text-white/90 font-medium"
              >
                {offers[currentOffer].subtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.button
          onClick={() => handleSlide(-1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all"
        >
          <ChevronLeftIcon className="h-8 w-8 text-white/90" />
        </motion.button>
        
        <motion.button
          onClick={() => handleSlide(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all"
        >
          <ChevronRightIcon className="h-8 w-8 text-white/90" />
        </motion.button>

        {/* Floating Particles */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [1, 0],
                scale: [1, 2],
              }}
              transition={{
                duration: Math.random() * 4 + 4,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>
      </div>
    </ScrollAnimationWrapper>
  );
};



// Category Section



const CategorySection = () => {
  const categories = [
    { 
      name: "Tech", 
      icon: <CpuChipIcon className="h-10 w-10 text-teal-400" />,
      color: "text-teal-400",
      bg: "bg-teal-400/10",
      border: "border-teal-400/20"
    },
    { 
      name: "Fashion", 
      icon: <SwatchIcon className="h-10 w-10 text-pink-400" />,
      color: "text-pink-400",
      bg: "bg-pink-400/10",
      border: "border-pink-400/20"
    },
    { 
      name: "Home", 
      icon: <HomeIcon className="h-10 w-10 text-purple-400" />,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20"
    },
    { 
      name: "Beauty", 
      icon: <FaceSmileIcon className="h-10 w-10 text-rose-400" />,
      color: "text-rose-400",
      bg: "bg-rose-400/10",
      border: "border-rose-400/20"
    },
    { 
      name: "Sports", 
      icon: <AcademicCapIcon className="h-10 w-10 text-blue-400" />,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20"
    },
    { 
      name: "Books", 
      icon: <BookOpenIcon className="h-10 w-10 text-emerald-400" />,
      color: "text-emerald-400",
      bg: "bg-emerald-600/10",
      border: "border-emerald-600/20"
    },
  ];

  return (
    <ScrollAnimationWrapper>
      <section className="mx-7 my-20">
        <motion.div 
          className="p-8 bg-gray-700 rounded-[2.5rem] shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-semibold text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Explore Categories
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <motion.div
                  whileHover={{ 
                    y: -8,
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`${category.bg} ${category.border} p-6 rounded-2xl cursor-pointer border transition-all hover:border-transparent`}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <motion.div 
                      className={`p-5 rounded-xl ${category.bg} backdrop-blur-sm relative`}
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.6 }
                      }}
                    >
                      <div className="relative z-10">
                        {category.icon}
                      </div>
                      <motion.div
                        className="absolute inset-0 bg-current blur-xl opacity-0 rounded-xl"
                        whileHover={{ opacity: 0.1 }}
                      />
                    </motion.div>
                    <span className={`text-base font-medium ${category.color}`}>
                      {category.name}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="h-1 w-32 bg-gray-700 rounded-full" />
          </motion.div>
        </motion.div>
      </section>
    </ScrollAnimationWrapper>
  );
};

// Product Grid Component



// const ProductGrid = ({ title, products, metric }) => {
//   return (
//     <ScrollAnimationWrapper>
//       <section className="mx-7 my-20">
//         <motion.div 
//           className={`${darkTheme.surface} rounded-4xl shadow-2xl p-12`}
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="flex items-center justify-between mb-12">
//             <motion.h2 
//               className={`text-3xl font-bold ${darkTheme.textPrimary}`}
//               initial={{ x: -50 }}
//               whileInView={{ x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               {title}
//             </motion.h2>
//             <button className={`flex items-center ${darkTheme.primary} hover:${darkTheme.secondary} transition`}>
//               View All <ArrowRightIcon className="h-5 w-5 ml-2" />
//             </button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {products.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 50, rotateX: -45 }}
//                 whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//                 transition={{ 
//                   delay: index * 0.1,
//                   duration: 0.6,
//                   type: "spring",
//                   stiffness: 120
//                 }}
//                 whileHover={{ 
//                   y: -10,
//                   scale: 1.02,
//                   boxShadow: "0 25px 50px -12px rgba(0,0,0,0.3)"
//                 }}
//                 className={`${darkTheme.surfaceElevated} rounded-2xl p-6 shadow-xl transition-all relative overflow-hidden group`}
//               >
//                 {/* Floating Animation */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0"
//                   whileHover={{ 
//                     opacity: 1,
//                     transition: { duration: 0.4 }
//                   }}
//                 />

//                 {/* Image Container */}
//                 <motion.div
//                   className="h-64 bg-gray-900 rounded-xl overflow-hidden mb-6 relative"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
//                   <img 
//                     src={product.image} 
//                     alt={product.name}
//                     className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
//                   />
//                   <motion.div
//                     className="absolute top-4 right-4 flex items-center space-x-1"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     {[...Array(5)].map((_, i) => (
//                       <StarIcon
//                         key={i}
//                         className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-600'}`}
//                       />
//                     ))}
//                   </motion.div>
//                 </motion.div>

//                 {/* Product Info */}
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <h3 className={`text-lg font-semibold ${darkTheme.textPrimary}`}>
//                       {product.name}
//                     </h3>
//                     {metric && (
//                       <motion.span
//                         className={`text-sm ${darkTheme.primary} bg-purple-900/20 px-3 py-1 rounded-full`}
//                         whileHover={{ scale: 1.05 }}
//                       >
//                         {metric}: {product[metric]}
//                       </motion.span>
//                     )}
//                   </div>

//                   <motion.div className="flex items-center justify-between">
//                     <motion.div
//                       className={`flex items-center ${darkTheme.primary}`}
//                       initial={{ x: 0 }}
//                       whileHover={{ x: 5 }}
//                     >
//                       <CurrencyDollarIcon className="h-6 w-6" />
//                       <span className="text-xl font-bold ml-1">
//                         {product.price.toFixed(2)}
//                       </span>
//                     </motion.div>
                    
//                     <motion.button
//                       whileHover={{ 
//                         scale: 1.05,
//                         backgroundColor: 'rgba(139, 92, 246, 0.2)'
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                       className={`px-4 py-2 ${darkTheme.background} ${darkTheme.textPrimary} rounded-full border ${darkTheme.border} hover:bg-purple-900/30 transition`}
//                     >
//                       <ShoppingCartIcon className="h-5 w-5" />
//                     </motion.button>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>
//     </ScrollAnimationWrapper>
//   );
// };

// // Updated products data with more items
// const productsData = {
//   mostViewed: [
//     { id: 1, name: "Wireless Noise-Canceling Headphones", price: 349.99, image: "https://picsum.photos/seed/headphone1/300/200", views: 2540, rating: 4 },
//     { id: 2, name: "Smart Watch Pro X", price: 299.99, image: "https://picsum.photos/seed/watch2/300/200", views: 2180, rating: 5 },
//     { id: 3, name: "4K Ultra HD Monitor", price: 599.99, image: "https://picsum.photos/seed/monitor3/300/200", views: 1895, rating: 4 },
//     { id: 4, name: "Mechanical Keyboard", price: 149.99, image: "https://picsum.photos/seed/keyboard4/300/200", views: 1650, rating: 4 },
//     { id: 5, name: "Gaming Mouse", price: 79.99, image: "https://picsum.photos/seed/mouse5/300/200", views: 1420, rating: 4 },
//     { id: 6, name: "Bluetooth Speaker", price: 129.99, image: "https://picsum.photos/seed/speaker6/300/200", views: 1350, rating: 4 },
//   ],
//   mostSold: [
//     { id: 7, name: "Wireless Earbuds", price: 199.99, image: "https://picsum.photos/seed/earbuds7/300/200", sold: 1250, rating: 4 },
//     { id: 8, name: "Laptop Stand", price: 49.99, image: "https://picsum.photos/seed/stand8/300/200", sold: 980, rating: 4 },
//     { id: 9, name: "External SSD 1TB", price: 159.99, image: "https://picsum.photos/seed/ssd9/300/200", sold: 870, rating: 5 },
//     { id: 10, name: "Webcam 4K", price: 129.99, image: "https://picsum.photos/seed/webcam10/300/200", sold: 750, rating: 4 },
//     { id: 11, name: "Wireless Charger", price: 39.99, image: "https://picsum.photos/seed/charger11/300/200", sold: 680, rating: 4 },
//     { id: 12, name: "Noise Cancelling Mic", price: 89.99, image: "https://picsum.photos/seed/mic12/300/200", sold: 620, rating: 4 },
//   ],
// };



// Updated products data with more sections
const productsData = {
  mostViewed: [
    { id: 1, name: "Wireless Headphones", price: 299.99, image: "https://picsum.photos/seed/headphone/300/200", views: 1500, rating: 4 },
    { id: 2, name: "Smart Watch Pro", price: 459.99, image: "https://picsum.photos/seed/watch/300/200", views: 1450, rating: 5 },
    { id: 3, name: "Designer Handbag", price: 599.50, image: "https://picsum.photos/seed/handbag/300/200", views: 1320, rating: 4 },
    { id: 1, name: "Wireless Headphones", price: 299.99, image: "https://picsum.photos/seed/headphone/300/200", views: 1500, rating: 4 },
    { id: 2, name: "Smart Watch Pro", price: 459.99, image: "https://picsum.photos/seed/watch/300/200", views: 1450, rating: 5 },
    { id: 3, name: "Designer Handbag", price: 599.50, image: "https://picsum.photos/seed/handbag/300/200", views: 1320, rating: 4 },
    { id: 4, name: "Yoga Mat Premium", price: 89.95, image: "https://picsum.photos/seed/yoga/300/200", sold: 850, rating: 4 },
    { id: 5, name: "Organic Coffee Pack", price: 24.99, image: "https://picsum.photos/seed/coffee/300/200", sold: 720, rating: 4 },
    { id: 6, name: "Wireless Speaker", price: 229.95, image: "https://picsum.photos/seed/speaker/300/200", sold: 680, rating: 4 },
    { id: 9, name: "Wireless Earbuds", price: 199.99, image: "https://picsum.photos/seed/earbuds/300/200", sold: 890, rating: 4 },
  ],
  mostSold: [
    { id: 4, name: "Yoga Mat Premium", price: 89.95, image: "https://picsum.photos/seed/yoga/300/200", sold: 850, rating: 4 },
    { id: 5, name: "Organic Coffee Pack", price: 24.99, image: "https://picsum.photos/seed/coffee/300/200", sold: 720, rating: 4 },
    { id: 6, name: "Wireless Speaker", price: 229.95, image: "https://picsum.photos/seed/speaker/300/200", sold: 680, rating: 4 },
    { id: 7, name: "4K Smart TV", price: 799.99, image: "https://picsum.photos/seed/tv/300/200", sold: 450, rating: 5 },
    { id: 8, name: "Gaming Laptop", price: 1499.99, image: "https://picsum.photos/seed/laptop/300/200", sold: 320, rating: 4 },
  
  ],
  electronics: [
    { id: 7, name: "4K Smart TV", price: 799.99, image: "https://picsum.photos/seed/tv/300/200", sold: 450, rating: 5 },
    { id: 8, name: "Gaming Laptop", price: 1499.99, image: "https://picsum.photos/seed/laptop/300/200", sold: 320, rating: 4 },
    { id: 9, name: "Wireless Earbuds", price: 199.99, image: "https://picsum.photos/seed/earbuds/300/200", sold: 890, rating: 4 },
    { id: 10, name: "Modern Sofa", price: 899.99, image: "https://picsum.photos/seed/sofa/300/200", sold: 230, rating: 4 },
    { id: 11, name: "Office Desk", price: 299.99, image: "https://picsum.photos/seed/desk/300/200", sold: 180, rating: 4 },
  ],
  furniture: [
    { id: 10, name: "Modern Sofa", price: 899.99, image: "https://picsum.photos/seed/sofa/300/200", sold: 230, rating: 4 },
    { id: 11, name: "Office Desk", price: 299.99, image: "https://picsum.photos/seed/desk/300/200", sold: 180, rating: 4 },
    { id: 12, name: "Leather Chair", price: 499.99, image: "https://picsum.photos/seed/chair/300/200", sold: 150, rating: 5 },
    { id: 14, name: "Blood Pressure Monitor", price: 49.99, image: "https://picsum.photos/seed/monitor/300/200", sold: 420, rating: 4 },
    { id: 15, name: "First Aid Kit", price: 29.99, image: "https://picsum.photos/seed/aidkit/300/200", sold: 380, rating: 5 },
  ],
  medicine: [
    { id: 13, name: "Vitamin C Supplements", price: 19.99, image: "https://picsum.photos/seed/vitamin/300/200", sold: 650, rating: 4 },
    { id: 14, name: "Blood Pressure Monitor", price: 49.99, image: "https://picsum.photos/seed/monitor/300/200", sold: 420, rating: 4 },
    { id: 15, name: "First Aid Kit", price: 29.99, image: "https://picsum.photos/seed/aidkit/300/200", sold: 380, rating: 5 },
    { id: 4, name: "Yoga Mat Premium", price: 89.95, image: "https://picsum.photos/seed/yoga/300/200", sold: 850, rating: 4 },
    { id: 5, name: "Organic Coffee Pack", price: 24.99, image: "https://picsum.photos/seed/coffee/300/200", sold: 720, rating: 4 },
  ]
};

// Updated Product Grid Component with smaller cards
// const ProductGrid = ({ title, products, metric }) => {
//   return (
//     <ScrollAnimationWrapper>
//       <section className="mx-7 my-12">
//         <motion.div 
//           className={`${darkTheme.surface} rounded-3xl shadow-2xl p-8`}
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="flex items-center justify-between mb-8">
//             <motion.h2 
//               className={`text-2xl font-bold ${darkTheme.textPrimary}`}
//               initial={{ x: -50 }}
//               whileInView={{ x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               {title}
//             </motion.h2>
//             <button className={`flex items-center ${darkTheme.primary} hover:${darkTheme.secondary} transition`}>
//               View All <ArrowRightIcon className="h-4 w-4 ml-2" />
//             </button>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {products.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 50, rotateX: -45 }}
//                 whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//                 transition={{ 
//                   delay: index * 0.1,
//                   duration: 0.6,
//                   type: "spring",
//                   stiffness: 120
//                 }}
//                 whileHover={{ 
//                   y: -5,
//                   scale: 1.02,
//                   boxShadow: "0 15px 30px -10px rgba(0,0,0,0.2)"
//                 }}
//                 className={`${darkTheme.surfaceElevated} rounded-xl p-4 shadow-lg transition-all relative overflow-hidden group`}
//               >
//                 {/* Floating Animation */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0"
//                   whileHover={{ 
//                     opacity: 1,
//                     transition: { duration: 0.4 }
//                   }}
//                 />

//                 {/* Image Container */}
//                 <motion.div
//                   className="h-48 bg-gray-900 rounded-lg overflow-hidden mb-4 relative"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
//                   <img 
//                     src={product.image} 
//                     alt={product.name}
//                     className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
//                   />
//                   <motion.div
//                     className="absolute top-2 right-2 flex items-center space-x-1"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     {[...Array(5)].map((_, i) => (
//                       <StarIcon
//                         key={i}
//                         className={`h-3 w-3 ${i < product.rating ? 'text-yellow-400' : 'text-gray-600'}`}
//                       />
//                     ))}
//                   </motion.div>
//                 </motion.div>

//                 {/* Product Info */}
//                 <div className="space-y-2">
//                   <div className="flex items-center justify-between">
//                     <h3 className={`text-md font-semibold ${darkTheme.textPrimary} truncate`}>
//                       {product.name}
//                     </h3>
//                     {metric && (
//                       <motion.span
//                         className={`text-xs ${darkTheme.primary} bg-purple-900/20 px-2 py-1 rounded-full`}
//                         whileHover={{ scale: 1.05 }}
//                       >
//                         {metric}: {product[metric]}
//                       </motion.span>
//                     )}
//                   </div>

//                   <motion.div className="flex items-center justify-between">
//                     <motion.div
//                       className={`flex items-center ${darkTheme.primary}`}
//                       initial={{ x: 0 }}
//                       whileHover={{ x: 3 }}
//                     >
//                       <CurrencyDollarIcon className="h-4 w-4" />
//                       <span className="text-lg font-bold ml-1">
//                         {product.price.toFixed(2)}
//                       </span>
//                     </motion.div>
                    
//                     <motion.button
//                       whileHover={{ 
//                         scale: 1.05,
//                         backgroundColor: 'rgba(139, 92, 246, 0.2)'
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                       className={`px-3 py-1 ${darkTheme.background} ${darkTheme.textPrimary} rounded-full border ${darkTheme.border} hover:bg-purple-900/30 transition`}
//                     >
//                       <ShoppingCartIcon className="h-4 w-4" />
//                     </motion.button>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>
//     </ScrollAnimationWrapper>
//   );
// };


const ProductGrid = ({ title, products, metric }) => {
  return (
    <ScrollAnimationWrapper>
      <section className="mx-4 sm:mx-6 lg:mx-8 my-8">
        <motion.div 
          className={`${darkTheme.surface} rounded-xl shadow-xl p-6`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <motion.h2 
              className={`text-xl font-bold ${darkTheme.textPrimary}`}
              initial={{ x: -30 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {title}
            </motion.h2>
            <button className={`flex items-center ${darkTheme.primary} hover:${darkTheme.secondary} transition text-sm`}>
              View All <ArrowRightIcon className="h-3 w-3 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.4,
                }}
                whileHover={{ 
                  y: -3,
                  scale: 1.02,
                  boxShadow: "0 10px 20px -5px rgba(0,0,0,0.1)"
                }}
                className={`${darkTheme.surfaceElevated} rounded-lg p-3 shadow-md transition-all relative overflow-hidden group`}
              >
                {/* Image Container */}
                <motion.div
                  className="h-40 bg-gray-900 rounded-md overflow-hidden mb-3 relative"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <motion.div
                    className="absolute top-2 right-2 flex items-center space-x-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-2.5 w-2.5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                      />
                    ))}
                  </motion.div>
                </motion.div>

                {/* Product Info */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-sm font-medium ${darkTheme.textPrimary} truncate`}>
                      {product.name}
                    </h3>
                    {metric && (
                      <motion.span
                        className={`text-xs ${darkTheme.primary} bg-purple-900/20 px-1.5 py-0.5 rounded-full`}
                        whileHover={{ scale: 1.03 }}
                      >
                        {metric}: {product[metric]}
                      </motion.span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className={`flex items-center ${darkTheme.primary}`}>
                      <CurrencyDollarIcon className="h-3 w-3" />
                      <span className="text-md font-semibold ml-1">
                        {product.price.toFixed(2)}
                      </span>
                    </div>
                    
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(139, 92, 246, 0.2)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-2 py-1 ${darkTheme.background} ${darkTheme.textPrimary} rounded-full border ${darkTheme.border} hover:bg-purple-900/30 transition text-xs`}
                    >
                      <ShoppingCartIcon className="h-3 w-3" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </ScrollAnimationWrapper>
  );
};


// const AboutSection = () => {
//   const features = [
//     {
//       title: "10M+ Products",
//       description: "Explore our vast collection of premium items",
//       icon: <ShoppingBagIcon className="h-8 w-8 text-purple-400" />,
//     },
//     {
//       title: "Global Shipping",
//       description: "Fast delivery to over 100 countries",
//       icon: <GlobeEuropeAfricaIcon className="h-8 w-8 text-blue-400" />,
//     },
//     {
//       title: "24/7 Support",
//       description: "Dedicated customer care team",
//       icon: <UsersIcon className="h-8 w-8 text-green-400" />,
//     },
//   ];

//   return (
//     <ScrollAnimationWrapper>
//       <section className="mx-7 my-20">
//         <motion.div 
//           className={`bg-black rounded-3xl shadow-2xl p-12`}
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="text-center mb-16">
//             <motion.h2 
//               className={`text-4xl font-bold ${darkTheme.textPrimary} mb-6`}
//               initial={{ scale: 0.95 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               About Shopease
//             </motion.h2>
//             <motion.p
//               className={`text-lg ${darkTheme.textSecondary} max-w-3xl mx-auto`}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               Revolutionizing online shopping with curated collections, seamless experience, 
//               and customer-first approach since 2020.
//             </motion.p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className={`${darkTheme.surfaceElevated} p-8 rounded-2xl transition-all hover:transform hover:scale-105`}
//               >
//                 <div className="flex flex-col items-center text-center">
//                   <motion.div 
//                     className="mb-6 p-4 rounded-full bg-purple-900/20"
//                     whileHover={{ rotate: 15 }}
//                   >
//                     {feature.icon}
//                   </motion.div>
//                   <h3 className={`text-xl font-semibold ${darkTheme.textPrimary} mb-4`}>
//                     {feature.title}
//                   </h3>
//                   <p className={`text-sm ${darkTheme.textSecondary}`}>
//                     {feature.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div 
//             className="mt-16 flex justify-center"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             <BuildingStorefrontIcon className={`h-24 w-24 ${darkTheme.textPrimary} opacity-20`} />
//           </motion.div>
//         </motion.div>
//       </section>
//     </ScrollAnimationWrapper>
//   );
// };





// Updated BuyerHomePage Component with new sections




// Scroll Progress Component


const AboutSection = () => {
  const features = [
    {
      title: "10M+ Products",
      description: "Vast premium collection",
      icon: <ShoppingBagIcon className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />,
    },
    {
      title: "Global Shipping",
      description: "100+ countries",
      icon: <GlobeEuropeAfricaIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />,
    },
    {
      title: "24/7 Support",
      description: "Dedicated team",
      icon: <UsersIcon className="h-5 w-5 md:h-6 md:w-6 text-green-400" />,
    },
  ];

  return (
    <ScrollAnimationWrapper>
      <section className="mx-4 sm:mx-5 my-8">
        <motion.div 
          className={`${darkTheme.surface} rounded-lg shadow-lg p-4 md:p-6`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-6">
            <motion.h2 
              className={`text-2xl md:text-3xl font-bold ${darkTheme.textPrimary} mb-3`}
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className={`text-xs md:text-sm ${darkTheme.textSecondary} max-w-md mx-auto`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Revolutionizing e-commerce with curated collections since 2020
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className={`${darkTheme.surfaceElevated} p-3 rounded-lg transition-all hover:transform hover:scale-[1.02]`}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className="mb-3 p-2 rounded-full bg-purple-900/20"
                    whileHover={{ rotate: 12 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className={`text-base md:text-lg font-semibold ${darkTheme.textPrimary} mb-1`}>
                    {feature.title}
                  </h3>
                  <p className={`text-xs ${darkTheme.textSecondary}`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-6 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <BuildingStorefrontIcon className={`h-12 w-12 md:h-16 md:w-16 ${darkTheme.textPrimary} opacity-20`} />
          </motion.div>
        </motion.div>
      </section>
    </ScrollAnimationWrapper>
  );
};







const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-purple-500/50 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

// Scroll to Top Component
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setVisible(latest > 500);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      className={`fixed bottom-8 right-8 p-4 ${darkTheme.background} ${darkTheme.textPrimary} rounded-full shadow-xl border ${darkTheme.border} hover:bg-purple-900/30 transition`}
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 100 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <ChevronUpIcon className="h-6 w-6" />
    </motion.button>
  );
};

// Main Component
// const BuyerHomePage = () => {
//   const offerSectionRef = useRef(null);

//   const productsData = {
//     mostViewed: [
//       { id: 1, name: "Wireless Headphones", price: 299.99, image: "https://picsum.photos/seed/headphone/300/200", views: 1500 },
//       { id: 2, name: "Smart Watch Pro", price: 459.99, image: "https://picsum.photos/seed/watch/300/200", views: 1450 },
//       { id: 3, name: "Designer Handbag", price: 599.50, image: "https://picsum.photos/seed/handbag/300/200", views: 1320 },
//     ],
//     mostSold: [
//       { id: 4, name: "Yoga Mat Premium", price: 89.95, image: "https://picsum.photos/seed/yoga/300/200", sold: 850 },
//       { id: 5, name: "Organic Coffee Pack", price: 24.99, image: "https://picsum.photos/seed/coffee/300/200", sold: 720 },
//       { id: 6, name: "Wireless Speaker", price: 229.95, image: "https://picsum.photos/seed/speaker/300/200", sold: 680 },
//     ],
//   };

//   return (
//     <div className={`${darkTheme.background} min-h-screen`}>
//       <ScrollProgress />
//       <Navbar />
//       <WelcomeSection />
//       <OfferSection />
//       <CategorySection />

//       <ProductGrid
//         title="Most Viewed Products"
//         products={productsData.mostViewed}
//         metric="views"
//       />

//       <ProductGrid
//         title="Best Selling Products"
//         products={productsData.mostSold}
//         metric="sold"
//       />

//       <ScrollToTop />
//     </div>
//   );
// };

// export default BuyerHomePage;


const BuyerHomePage = () => {
  const offerSectionRef = useRef(null);

  return (
    <div className={`${darkTheme.background} min-h-screen`}>
      <ScrollProgress />
      <Navbar />
      <WelcomeSection />
      <OfferSection />
      <CategorySection />

      <ProductGrid
        title="Most Viewed Products"
        products={productsData.mostViewed}
        metric="views"
      />

      <ProductGrid
        title="Best Selling Products"
        products={productsData.mostSold}
        metric="sold"
      />

      <ProductGrid
        title="Electronics Essentials"
        products={productsData.electronics}
        metric="sold"
      />

      <ProductGrid
        title="Modern Furniture"
        products={productsData.furniture}
        metric="sold"
      />

      <ProductGrid
        title="Health & Medicine"
        products={productsData.medicine}
        metric="sold"
      />
       
      <AboutSection />

      <ScrollToTop />
    </div>
  );
};

export default BuyerHomePage;