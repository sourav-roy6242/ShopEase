import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";



import { 
  ShoppingBagIcon,
  HeartIcon,
  SwatchIcon,
  AcademicCapIcon,
  SparklesIcon,
  CpuChipIcon,
  // Other necessary icons
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  GiftIcon,

  BookOpenIcon,
  PuzzlePieceIcon,
  HomeIcon,
  FaceSmileIcon

} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-700 shadow-2xl py-4 px-8 flex justify-between items-center fixed w-full top-0 z-50"
    >
      {/* Company Name with Animated Letters */}
      <motion.h1 
        className="text-yellow-500 flex space-x-1 md:text-3xl lg:text-xl font-bold transition-all duration-300"
      >
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

      {/* Search Bar */}
      <div className="flex items-center bg-gray-900 rounded-full px-3 py-1 md:px-4 md:py-2 transition-all duration-300 w-26 md:w-60">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent focus:outline-none text-white text-sm md:text-base px-2 w-full"
        />
        <button className="text-yellow-500 ml-2">
          <MagnifyingGlassIcon className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-white hover:text-yellow-500 transition">Home</a>
        <a href="#" className="text-white hover:text-yellow-500 transition">About Us</a>
        <a href="#" className="text-white hover:text-yellow-500 transition">Contact Us</a>
        <button className="text-yellow-500">
          <ShoppingCartIcon className="h-6 w-6" />
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition">
          Login / Signup
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 md:hidden"
        >
          <a href="#" className="hover:text-yellow-500 transition">About Us</a>
          <a href="#" className="hover:text-yellow-500 transition">Contact Us</a>
          <button className="text-yellow-500">
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition">
            Login / Signup
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};



const WelcomeSection = () => {
  return (
    <section className="bg-gradient-to-r  from-blue-400 to-purple-400 text-black rounded-xl py-10 ml-7 shadow-2xl mr-7 text-center mt-20">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl text-white drop-shadow-lg font-bold"
      >
        Welcome to 
        <motion.span 
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          className="text-yellow-400 font-bold ml-2"
        >
          SHOPEASE
        </motion.span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-lg font-bold max-w-2xl text-gray-700 mx-auto"
      >
        Your one-stop online shopping destination. Explore a wide range of products from trusted sellers at unbeatable prices!
      </motion.p>
    </section>
  );
};




const offers = [
  { 
    text: "50% OFF on Electronics!", 
    bg: "bg-gradient-to-br from-red-500 to-pink-600",
    icon: <GiftIcon className="h-16 w-16 text-white/90" />,
    color: "text-red-100"
  },
  { 
    text: "Buy 1 Get 1 Free on Fashion!", 
    bg: "bg-gradient-to-br from-blue-600 to-indigo-700",
    icon: <SparklesIcon className="h-16 w-16 text-white/90" />,
    color: "text-blue-100"
  },
  { 
    text: "Free Shipping Worldwide!", 
    bg: "bg-gradient-to-br from-emerald-600 to-teal-700",
    icon: <ShoppingCartIcon className="h-16 w-16 text-white/90" />,
    color: "text-emerald-100"
  }
];

const OfferSection = () => {
  const [currentOffer, setCurrentOffer] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer(prev => (prev + 1) % offers.length);
      setProgress(0);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  const handleSlide = (newDirection) => {
    setDirection(newDirection);
    setCurrentOffer(prev => 
      (prev + newDirection + offers.length) % offers.length
    );
    setProgress(0);
  };

  return (
    <div className="relative mx-7 mt-8 h-[500px] overflow-hidden rounded-3xl shadow-2xl">
      {/* Progress Bar */}
      <div className="absolute top-4 left-1/2 z-30 h-1 w-64 -translate-x-1/2 transform rounded-full bg-white/20">
        <motion.div
          className="h-full rounded-full bg-white/80"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </div>

      {/* Offers Container */}
      <motion.div
        key={currentOffer}
        initial={{ 
          opacity: 0,
          rotateY: direction === 1 ? 90 : -90,
          scale: 0.8
        }}
        animate={{ 
          opacity: 1,
          rotateY: 0,
          scale: 1
        }}
        exit={{ 
          opacity: 0,
          rotateY: direction === 1 ? -90 : 90,
          scale: 0.8
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`relative h-full w-full ${offers[currentOffer].bg}`}
      >
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0.2)_100%)]" />
        
        {/* Content */}
        <div className="flex h-full flex-col items-center justify-center space-y-8 p-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg"
          >
            {offers[currentOffer].icon}
          </motion.div>
          
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={`text-center text-4xl font-bold leading-tight tracking-wide ${offers[currentOffer].color} drop-shadow-lg`}
          >
            {offers[currentOffer].text}
          </motion.h2>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="flex space-x-4"
          >
            {offers.map((_, index) => (
              <div
                key={index}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentOffer ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={() => handleSlide(-1)}
        className="absolute left-6 top-1/2 -translate-y-1/2 transform rounded-full bg-white/10 p-4 backdrop-blur-lg transition-all hover:bg-white/20 hover:scale-110 active:scale-95"
      >
        <ChevronLeftIcon className="h-8 w-8 text-white" />
      </button>
      
      <button
        onClick={() => handleSlide(1)}
        className="absolute right-6 top-1/2 -translate-y-1/2 transform rounded-full bg-white/10 p-4 backdrop-blur-lg transition-all hover:bg-white/20 hover:scale-110 active:scale-95"
      >
        <ChevronRightIcon className="h-8 w-8 text-white" />
      </button>

      {/* Floating Elements */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 left-1/4 h-24 w-24 rounded-full bg-white/10 backdrop-blur-sm"
      />
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: -20 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
        className="absolute bottom-1/4 right-1/4 h-32 w-32 rounded-full bg-white/10 backdrop-blur-sm"
      />
    </div>
  );
};



// const categories = [
//   {
//     name: "Groceries",
//     icon: <ShoppingBagIcon className="h-12 w-12" />,
//     bg: "bg-gradient-to-br from-green-500 to-emerald-600",
//     hover: "hover:from-green-600 hover:to-emerald-700"
//   },
//   {
//     name: "Medicine",
//     icon: <HeartIcon className="h-12 w-12" />,
//     bg: "bg-gradient-to-br from-red-500 to-pink-600",
//     hover: "hover:from-red-600 hover:to-pink-700"
//   },
//   {
//     name: "Fashion",
//     icon: <SwatchIcon className="h-12 w-12" />, // Changed to SwatchIcon
//     bg: "bg-gradient-to-br from-blue-500 to-indigo-600",
//     hover: "hover:from-blue-600 hover:to-indigo-700"
//   },
//   {
//     name: "Sports",
//     icon: <AcademicCapIcon className="h-12 w-12" />,
//     bg: "bg-gradient-to-br from-orange-500 to-amber-600",
//     hover: "hover:from-orange-600 hover:to-amber-700"
//   },
//   {
//     name: "Jewellery",
//     icon: <SparklesIcon className="h-12 w-12" />,
//     bg: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
//     hover: "hover:from-purple-600 hover:to-fuchsia-700"
//   },
//   {
//     name: "Electronics",
//     icon: <CpuChipIcon className="h-12 w-12" />,
//     bg: "bg-gradient-to-br from-cyan-500 to-sky-600",
//     hover: "hover:from-cyan-600 hover:to-sky-700"
//   }
// ];



// const CategorySection = () => {
//   return (
//     <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-100">
//       <motion.h2 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-bold text-center mb-12 text-gray-800"
//       >
//         Shop by Category
//       </motion.h2>
      
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {categories.map((category, index) => (
//           <motion.div
//             key={category.name}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: index * 0.1, duration: 0.5 }}
//             whileHover={{ scale: 1.05 }}
//             className={`${category.bg} ${category.hover} rounded-2xl p-6 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden`}
//           >
//             {/* Animated Background */}
//             <motion.div
//               initial={{ scale: 0 }}
//               whileHover={{ scale: 2 }}
//               className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"
//             />
            
//             {/* Content */}
//             <div className="flex flex-col items-center space-y-4 relative z-10">
//               <motion.div
//                 whileHover={{ rotate: 360, scale: 1.2 }}
//                 className="bg-white/20 p-4 rounded-full"
//               >
//                 {category.icon}
//               </motion.div>
//               <h3 className="text-xl font-semibold text-white text-center">
//                 {category.name}
//               </h3>
//             </div>
            
//             {/* Glowing Effect */}
//             <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300" />
//           </motion.div>
//         ))}
//       </div>

//       {/* Floating Particles Animation */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(10)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{ 
//               x: Math.random() * 100,
//               y: Math.random() * 100,
//               scale: 0 
//             }}
//             animate={{ 
//               x: Math.random() * 100,
//               y: Math.random() * 100,
//               scale: [0, 1, 0],
//               rotate: 360
//             }}
//             transition={{
//               duration: Math.random() * 4 + 4,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//             className="absolute w-2 h-2 bg-white/30 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };



const categories = [
  {
    name: "Groceries",
    icon: <ShoppingBagIcon className="h-12 w-12" />,
    bg: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
  {
    name: "Medicine",
    icon: <HeartIcon className="h-12 w-12" />,
    bg: "bg-gradient-to-br from-red-500 to-pink-600",
  },
  {
    name: "Fashion",
    icon: <SwatchIcon className="h-12 w-12" />,
    bg: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    name: "Sports",
    icon: <AcademicCapIcon className="h-12 w-12" />,
    bg: "bg-gradient-to-br from-orange-500 to-amber-600",
  },
  {
    name: "Jewellery",
    icon: <SparklesIcon className="h-12 w-12" />,
    bg: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
  },
  {
    name: "Electronics",
    icon: <CpuChipIcon className="h-12 w-12" />,
    bg: "bg-gradient-to-br from-cyan-500 to-sky-600",
  },
  {
    name: "Books",
    icon: <BookOpenIcon className="h-12 w-12" />,
    bg: "bg-gradient-to-br from-rose-500 to-red-600",
  },
  {
    name: "Toys",
    icon: <PuzzlePieceIcon className="h-12 w-12" />,
    bg: "bg-gradient-to-br from-yellow-500 to-amber-600",
  },
  {
    name: "Furniture",
    icon: <HomeIcon className="h-12 w-12" />,
    bg: "bg-gradient-to-br from-stone-500 to-zinc-600",
  },
  {
    name: "Beauty",
    icon: <FaceSmileIcon className="h-12 w-12" />,
    bg: "bg-gradient-to-br from-pink-500 to-rose-600",
  }
];




const CategorySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 320;
  const totalCategories = categories.length;
  const containerRef = React.useRef(null);
  const [centerOffset, setCenterOffset] = useState(0);

  React.useEffect(() => {
    // Calculate center offset after component mounts
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setCenterOffset(containerWidth / 2 - cardWidth / 2);
      setActiveIndex(Math.floor(totalCategories / 2));
    }
  }, [totalCategories]);

  const nextSlide = () => {
    setActiveIndex(prev => (prev + 1) % totalCategories);
  };

  const prevSlide = () => {
    setActiveIndex(prev => (prev - 1 + totalCategories) % totalCategories);
  };

  return (
    <div className="mx-7 my-20 overflow-hidden" ref={containerRef}>
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800 rounded-4xl shadow-2xl">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="absolute inset-0 opacity-10 bg-gradient-radial from-white to-transparent"
        />

        <div className="text-center mb-20 px-8 relative z-10">
          <motion.h2 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Featured Categories
            <motion.div 
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mt-4 mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </motion.h2>
        </div>

        <div className="relative h-[500px] perspective-1000px overflow-hidden">
          <motion.div 
            className="flex"
            style={{ x: -activeIndex * cardWidth + centerOffset }}
            animate={{ 
              x: -activeIndex * cardWidth + centerOffset,
              transition: { type: "spring", stiffness: 300, damping: 30 }
            }}
          >
            {categories.map((category, index) => {
              const distance = Math.abs(index - activeIndex);
              const scale = 1 - distance * 0.15;
              const opacity = 1 - distance * 0.3;

              return (
                <motion.div
                  key={category.name}
                  className="w-[320px] h-[400px] mx-4 shrink-0 origin-center transform-preserve-3d"
                  style={{
                    scale,
                    opacity,
                    rotateY: (index - activeIndex) * 15,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  whileHover={{ 
                    scale: index === activeIndex ? 1.1 : 1.05,
                    y: index === activeIndex ? -15 : -10,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <motion.div
                    className={`${category.bg} h-full rounded-3xl p-8 shadow-2xl overflow-hidden 
                      ${index === activeIndex ? 'ring-4 ring-white/20' : ''}`}
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                  >
                   

                    <motion.div 
                      className="mb-8 p-6 bg-white/10 rounded-full backdrop-blur-sm mx-auto w-fit"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                    >
                      {category.icon}
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white text-center mb-4">
                      {category.name}
                    </h3>

                    <motion.div 
                      className="h-1 bg-white/30 rounded-full mx-auto"
                      initial={{ width: 0 }}
                      whileInView={{ width: '60%' }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="flex justify-center mt-16 gap-4 relative z-10">
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
          >
            <ChevronLeftIcon className="h-8 w-8 text-white" />
          </motion.button>
          
          <div className="flex items-center gap-2">
            {categories.map((_, index) => (
              <motion.div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full cursor-pointer transition-all ${
                  index === activeIndex 
                    ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-500' 
                    : 'w-3 bg-white/30'
                }`}
                whileHover={{ scaleY: 1.5 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
          >
            <ChevronRightIcon className="h-8 w-8 text-white" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};


const BuyerHomePage = () => {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <OfferSection />
      <CategorySection />
    </div>
  );
};

export default BuyerHomePage;
