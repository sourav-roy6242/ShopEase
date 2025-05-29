import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logocmp.png";

import { 
  FaStar, FaMapMarkerAlt, FaPills, FaTshirt, FaTv, FaAppleAlt, 
  FaFootballBall, FaBook, FaDumbbell, FaCouch, FaSpa, FaShoePrints,
  FaRegHeart, FaHeart, FaShoppingCart, FaRegClock, FaTags,
  FaPlus, FaMinus
} from 'react-icons/fa';
import { 
  ShoppingCart, Menu, X, Search, ArrowUp, ChevronRight, Gift, ShoppingBag, Award
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
  const [selectedShop, setSelectedShop] = useState(null);
  const [productQuantities, setProductQuantities] = useState({});

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Shops", href: "#shops" },
    { name: "Categories", href: "#categories" },
    { name: "Offers", href: "#offers" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  // Updated shop data with at least 5 shops per category
  const mockShops = [
    // Medicine (5 shops)
    { 
      id: 1, 
      name: "Green Valley Pharmacy", 
      address: "123 Main St, Cityville", 
      category: "Medicine", 
      rating: 4.8, 
      reviewCount: 124,
      description: "Family-owned pharmacy since 1985",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 11, 
      name: "City Health Pharmacy", 
      address: "456 Health Ave, Medtown", 
      category: "Medicine", 
      rating: 4.6, 
      reviewCount: 98,
      description: "24/7 pharmacy with delivery service",
      image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 12, 
      name: "Wellness Center", 
      address: "789 Wellness Blvd, Healthville", 
      category: "Medicine", 
      rating: 4.9, 
      reviewCount: 215,
      description: "Holistic health solutions",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 13, 
      name: "MediQuick", 
      address: "101 Fast Lane, Quicktown", 
      category: "Medicine", 
      rating: 4.3, 
      reviewCount: 76,
      description: "Express prescription service",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 14, 
      name: "Family Care Pharmacy", 
      address: "202 Care St, Familyville", 
      category: "Medicine", 
      rating: 4.7, 
      reviewCount: 142,
      description: "Personalized care for your family",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    
    // Clothes (5 shops)
    { 
      id: 2, 
      name: "Urban Fashion Hub", 
      address: "456 Oak Ave, Trendytown", 
      category: "Clothes", 
      rating: 4.5, 
      reviewCount: 89,
      description: "Latest fashion trends at affordable prices",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 21, 
      name: "Boutique Chic", 
      address: "303 Style St, Fashionville", 
      category: "Clothes", 
      rating: 4.8, 
      reviewCount: 156,
      description: "Designer collections and accessories",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 22, 
      name: "Denim District", 
      address: "404 Jeans Rd, Denimtown", 
      category: "Clothes", 
      rating: 4.4, 
      reviewCount: 78,
      description: "Specializing in premium denim",
      image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 23, 
      name: "Casual Comfort", 
      address: "505 Relax St, Comfyville", 
      category: "Clothes", 
      rating: 4.6, 
      reviewCount: 112,
      description: "Everyday wear with maximum comfort",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 24, 
      name: "Formal Attire", 
      address: "606 Suit Blvd, Eleganttown", 
      category: "Clothes", 
      rating: 4.9, 
      reviewCount: 203,
      description: "Luxury formal wear for special occasions",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    
    // Electronics (5 shops)
    { 
      id: 3, 
      name: "Tech Galaxy", 
      address: "789 Tech Blvd, Gadgetville", 
      category: "Electronics", 
      rating: 4.9, 
      reviewCount: 215,
      description: "Cutting-edge electronics and gadgets",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 31, 
      name: "Gadget Hub", 
      address: "707 Device Dr, Techville", 
      category: "Electronics", 
      rating: 4.7, 
      reviewCount: 189,
      description: "Latest gadgets and smart home devices",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 32, 
      name: "Audio Masters", 
      address: "808 Sound Ave, Audioville", 
      category: "Electronics", 
      rating: 4.8, 
      reviewCount: 167,
      description: "Premium audio equipment and headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 33, 
      name: "Camera World", 
      address: "909 Lens Ln, Phototown", 
      category: "Electronics", 
      rating: 4.9, 
      reviewCount: 245,
      description: "Professional photography equipment",
      image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 34, 
      name: "Game Zone", 
      address: "1010 Console Ct, Gamerville", 
      category: "Electronics", 
      rating: 4.5, 
      reviewCount: 132,
      description: "Gaming consoles and accessories",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    
    // Groceries (5 shops)
    { 
      id: 4, 
      name: "FreshMart Groceries", 
      address: "101 Market St, Farmville", 
      category: "Groceries", 
      rating: 4.7, 
      reviewCount: 156,
      description: "Farm-fresh produce daily",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 41, 
      name: "Organic Oasis", 
      address: "111 Green St, Healthville", 
      category: "Groceries", 
      rating: 4.8, 
      reviewCount: 187,
      description: "100% organic and natural products",
      image: "https://images.unsplash.com/photo-1548940740-204726a19be3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 42, 
      name: "Bulk Barn", 
      address: "222 Savings Rd, Budgetville", 
      category: "Groceries", 
      rating: 4.6, 
      reviewCount: 121,
      description: "Discount bulk groceries",
      image: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 43, 
      name: "Global Foods", 
      address: "333 World Ave, Multicultural", 
      category: "Groceries", 
      rating: 4.9, 
      reviewCount: 234,
      description: "International cuisine ingredients",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 44, 
      name: "Sweet Bakery", 
      address: "444 Sugar Ln, Bakertown", 
      category: "Groceries", 
      rating: 4.7, 
      reviewCount: 198,
      description: "Fresh baked goods daily",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    
    // Sports (5 shops)
    { 
      id: 5, 
      name: "Sports Zone", 
      address: "202 Athletic Dr, Sportstown", 
      category: "Sports", 
      rating: 4.6, 
      reviewCount: 78,
      description: "Equipment for all your sports needs",
      image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 51, 
      name: "Outdoor Adventures", 
      address: "555 Trail Rd, Natureville", 
      category: "Sports", 
      rating: 4.8, 
      reviewCount: 143,
      description: "Camping and hiking gear",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 52, 
      name: "Water Sports", 
      address: "666 Ocean Dr, Beachville", 
      category: "Sports", 
      rating: 4.5, 
      reviewCount: 95,
      description: "Surfing, diving and water activities",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 53, 
      name: "Cycling Center", 
      address: "777 Bike Ln, Pedaltown", 
      category: "Sports", 
      rating: 4.9, 
      reviewCount: 212,
      description: "Bicycles and accessories",
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 54, 
      name: "Team Sports", 
      address: "888 Stadium Way, Ballville", 
      category: "Sports", 
      rating: 4.7, 
      reviewCount: 167,
      description: "Equipment for team sports",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    
    // Books (5 shops)
    { 
      id: 6, 
      name: "Book Nook", 
      address: "303 Library Ln, Readerstown", 
      category: "Books", 
      rating: 4.9, 
      reviewCount: 142,
      description: "Your neighborhood book haven",
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 61, 
      name: "Comic Universe", 
      address: "999 Hero St, Comicville", 
      category: "Books", 
      rating: 4.8, 
      reviewCount: 198,
      description: "Largest comic book collection",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 62, 
      name: "Academic Books", 
      address: "1010 Study Ave, Campustown", 
      category: "Books", 
      rating: 4.7, 
      reviewCount: 176,
      description: "Textbooks and academic resources",
      image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 63, 
      name: "Children's Books", 
      address: "111 Story St, Kidville", 
      category: "Books", 
      rating: 4.9, 
      reviewCount: 234,
      description: "Books for young readers",
      image: "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 64, 
      name: "Rare Books", 
      address: "1212 Collector Rd, Antiquetown", 
      category: "Books", 
      rating: 4.6, 
      reviewCount: 87,
      description: "Rare and collectible editions",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    
    // Fitness (5 shops)
    { 
      id: 7, 
      name: "FitLife Gym Store", 
      address: "404 Fitness Way, Healthville", 
      category: "Fitness", 
      rating: 4.4, 
      reviewCount: 95,
      description: "Everything for your fitness journey",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 71, 
      name: "Yoga Sanctuary", 
      address: "1313 Zen St, Peaceville", 
      category: "Fitness", 
      rating: 4.9, 
      reviewCount: 213,
      description: "Yoga mats, blocks and apparel",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 72, 
      name: "Running Hub", 
      address: "1414 Marathon Dr, Runnerville", 
      category: "Fitness", 
      rating: 4.7, 
      reviewCount: 154,
      description: "Running shoes and accessories",
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 73, 
      name: "Boxing Gear", 
      address: "1515 Punch Ln, Fighttown", 
      category: "Fitness", 
      rating: 4.5, 
      reviewCount: 98,
      description: "Boxing equipment and apparel",
      image: "https://images.unsplash.com/photo-1517344884509-a0c6ef635b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 74, 
      name: "Home Fitness", 
      address: "1616 Dumbbell Ave, Homegym", 
      category: "Fitness", 
      rating: 4.8, 
      reviewCount: 187,
      description: "Equipment for home workouts",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    
    // Furniture (5 shops)
    { 
      id: 8, 
      name: "Comfort Living Furniture", 
      address: "505 Design Dr, Homestown", 
      category: "Furniture", 
      rating: 4.7, 
      reviewCount: 112,
      description: "Quality furniture for your home",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 81, 
      name: "Office Solutions", 
      address: "1717 Desk Rd, Officetown", 
      category: "Furniture", 
      rating: 4.6, 
      reviewCount: 134,
      description: "Ergonomic office furniture",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 82, 
      name: "Outdoor Living", 
      address: "1818 Patio St, Backyardville", 
      category: "Furniture", 
      rating: 4.8, 
      reviewCount: 167,
      description: "Patio and garden furniture",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 83, 
      name: "Kids Furniture", 
      address: "1919 Play Ln, Kidstown", 
      category: "Furniture", 
      rating: 4.9, 
      reviewCount: 198,
      description: "Furniture for children's rooms",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 84, 
      name: "Luxury Furnishings", 
      address: "2020 Elegance Blvd, Luxville", 
      category: "Furniture", 
      rating: 4.7, 
      reviewCount: 143,
      description: "High-end designer furniture",
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    
    // Beauty (5 shops)
    { 
      id: 9, 
      name: "Glamour Beauty", 
      address: "606 Style St, Beautytown", 
      category: "Beauty", 
      rating: 4.8, 
      reviewCount: 178,
      description: "Premium beauty products and services",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 91, 
      name: "Skin Care Haven", 
      address: "2121 Complexion Rd, Skintown", 
      category: "Beauty", 
      rating: 4.9, 
      reviewCount: 234,
      description: "Natural skin care products",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 92, 
      name: "Hair Salon", 
      address: "2222 Tress Ave, Hairville", 
      category: "Beauty", 
      rating: 4.7, 
      reviewCount: 167,
      description: "Professional hair care products",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 93, 
      name: "Fragrance World", 
      address: "2323 Scent St, Perfumetown", 
      category: "Beauty", 
      rating: 4.8, 
      reviewCount: 189,
      description: "Luxury perfumes and colognes",
      image: "https://images.unsplash.com/photo-1595425977377-6aaf06c5d04a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 94, 
      name: "Makeup Studio", 
      address: "2424 Brush Blvd, Cosmetictown", 
      category: "Beauty", 
      rating: 4.6, 
      reviewCount: 143,
      description: "Professional makeup and tools",
      image: "https://images.unsplash.com/photo-1526045478516-99145907023c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    
    // Shoes (5 shops)
    { 
      id: 10, 
      name: "Shoe Palace", 
      address: "707 Footwear Ave, Shoetown", 
      category: "Shoes", 
      rating: 4.5, 
      reviewCount: 102,
      description: "Footwear for every occasion",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 101, 
      name: "Athletic Footwear", 
      address: "2525 Runway Dr, Sportshoe", 
      category: "Shoes", 
      rating: 4.8, 
      reviewCount: 198,
      description: "Performance athletic shoes",
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 102, 
      name: "Designer Heels", 
      address: "2626 High St, Heeltown", 
      category: "Shoes", 
      rating: 4.7, 
      reviewCount: 176,
      description: "Luxury designer heels",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 103, 
      name: "Comfort Shoes", 
      address: "2727 Cushion Rd, Comforttown", 
      category: "Shoes", 
      rating: 4.9, 
      reviewCount: 213,
      description: "Shoes with orthopedic support",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    },
    { 
      id: 104, 
      name: "Boot Barn", 
      address: "2828 Western Ave, Cowboytown", 
      category: "Shoes", 
      rating: 4.6, 
      reviewCount: 154,
      description: "Western and work boots",
      image: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
    }
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
      image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: 2,
      shop: "Tech Galaxy",
      title: "Tech Bonanza",
      description: "Buy any laptop and get headphones free",
      discount: "Free Headphones",
      validUntil: "2025-06-10",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: 3,
      shop: "FreshMart Groceries",
      title: "Weekend Special",
      description: "Organic fruits at 20% discount",
      discount: "20% OFF",
      validUntil: "2025-06-05",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: 4,
      shop: "Sports Zone",
      title: "Fitness Package",
      description: "Yoga mat + weights bundle at $49.99",
      discount: "Bundle Deal",
      validUntil: "2025-06-20",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
    },
  ];

  // Categories for grid view
  const categories = [
    { name: "Medicine", icon: <FaPills className="text-2xl text-indigo-600" /> },
    { name: "Clothes", icon: <FaTshirt className="text-2xl text-pink-500" /> },
    { name: "Electronics", icon: <FaTv className="text-2xl text-blue-500" /> },
    { name: "Groceries", icon: <FaAppleAlt className="text-2xl text-green-500" /> },
    { name: "Sports", icon: <FaFootballBall className="text-2xl text-orange-500" /> },
    { name: "Books", icon: <FaBook className="text-2xl text-amber-600" /> },
    { name: "Fitness", icon: <FaDumbbell className="text-2xl text-red-500" /> },
    { name: "Furniture", icon: <FaCouch className="text-2xl text-teal-500" /> },
    { name: "Beauty", icon: <FaSpa className="text-2xl text-purple-500" /> },
    { name: "Shoes", icon: <FaShoePrints className="text-2xl text-cyan-600" /> },
  ];

  // PRODUCT DATA FOR EACH SHOP CATEGORY
  const shopProducts = {
    Medicine: [
      {
        id: 1001,
        name: "Vitamin C 1000mg",
        description: "High potency immune support supplement",
        price: 12.99,
        rating: 4.7,
        reviewCount: 245,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 1002,
        name: "Pain Relief Tablets",
        description: "Fast-acting pain relief for headaches and muscle pain",
        price: 8.49,
        rating: 4.5,
        reviewCount: 187,
        image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 1003,
        name: "Multivitamin Complex",
        description: "Complete daily vitamins for optimal health",
        price: 15.99,
        rating: 4.8,
        reviewCount: 312,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      }
    ],
    Clothes: [
      {
        id: 2001,
        name: "Premium Cotton T-Shirt",
        description: "Soft and comfortable everyday wear",
        price: 24.99,
        rating: 4.6,
        reviewCount: 156,
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 2002,
        name: "Designer Jeans",
        description: "Slim fit premium denim",
        price: 59.99,
        rating: 4.8,
        reviewCount: 278,
        image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 2003,
        name: "Winter Jacket",
        description: "Warm and waterproof for cold weather",
        price: 89.99,
        rating: 4.9,
        reviewCount: 198,
        image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      }
    ],
    Electronics: [
      {
        id: 3001,
        name: "Wireless Headphones",
        description: "Premium sound quality with noise cancellation",
        price: 129.99,
        rating: 4.8,
        reviewCount: 467,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 3002,
        name: "Smartphone Pro",
        description: "Latest model with 128GB storage",
        price: 799.99,
        rating: 4.9,
        reviewCount: 832,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 3003,
        name: "Bluetooth Speaker",
        description: "Portable waterproof speaker with 20h battery",
        price: 79.99,
        rating: 4.7,
        reviewCount: 214,
        image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      }
    ],
    Groceries: [
      {
        id: 4001,
        name: "Organic Apples",
        description: "Freshly picked from local orchards",
        price: 2.99,
        rating: 4.7,
        reviewCount: 142,
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 4002,
        name: "Artisan Bread",
        description: "Freshly baked sourdough loaf",
        price: 4.99,
        rating: 4.9,
        reviewCount: 278,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 4003,
        name: "Extra Virgin Olive Oil",
        description: "Cold pressed premium quality",
        price: 12.99,
        rating: 4.8,
        reviewCount: 156,
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      }
    ],
    Sports: [
      {
        id: 5001,
        name: "Running Shoes",
        description: "Lightweight with extra cushioning",
        price: 89.99,
        rating: 4.8,
        reviewCount: 356,
        image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 5002,
        name: "Yoga Mat",
        description: "Non-slip eco-friendly material",
        price: 29.99,
        rating: 4.7,
        reviewCount: 198,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 5003,
        name: "Camping Tent",
        description: "4-person waterproof tent",
        price: 149.99,
        rating: 4.9,
        reviewCount: 287,
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      }
    ],
    Books: [
      {
        id: 6001,
        name: "Best Selling Novel",
        description: "Award-winning fiction book",
        price: 14.99,
        rating: 4.8,
        reviewCount: 542,
        image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 6002,
        name: "Programming Guide",
        description: "Comprehensive coding reference",
        price: 39.99,
        rating: 4.7,
        reviewCount: 187,
        image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 6003,
        name: "Children's Storybook",
        description: "Illustrated adventures for kids",
        price: 9.99,
        rating: 4.9,
        reviewCount: 324,
        image: "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      }
    ],
    Fitness: [
      {
        id: 7001,
        name: "Dumbbell Set",
        description: "Adjustable weights 5-25 lbs",
        price: 79.99,
        rating: 4.8,
        reviewCount: 267,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 7002,
        name: "Resistance Bands",
        description: "Set of 5 with different tensions",
        price: 24.99,
        rating: 4.6,
        reviewCount: 189,
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 7003,
        name: "Yoga Block Set",
        description: "Eco-friendly cork blocks",
        price: 19.99,
        rating: 4.7,
        reviewCount: 156,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      }
    ],
    Furniture: [
      {
        id: 8001,
        name: "Modern Sofa",
        description: "3-seater with premium upholstery",
        price: 899.99,
        rating: 4.9,
        reviewCount: 187,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 8002,
        name: "Ergonomic Office Chair",
        description: "Adjustable with lumbar support",
        price: 249.99,
        rating: 4.8,
        reviewCount: 243,
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 8003,
        name: "Coffee Table",
        description: "Minimalist design with oak finish",
        price: 199.99,
        rating: 4.7,
        reviewCount: 156,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      }
    ],
    Beauty: [
      {
        id: 9001,
        name: "Vitamin C Serum",
        description: "Brightening and anti-aging formula",
        price: 34.99,
        rating: 4.8,
        reviewCount: 432,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 9002,
        name: "Hydrating Face Cream",
        description: "24-hour moisture with SPF 30",
        price: 28.99,
        rating: 4.7,
        reviewCount: 287,
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 9003,
        name: "Signature Perfume",
        description: "Elegant floral fragrance",
        price: 79.99,
        rating: 4.9,
        reviewCount: 156,
        image: "https://images.unsplash.com/photo-1595425977377-6aaf06c5d04a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      }
    ],
    Shoes: [
      {
        id: 10001,
        name: "Running Sneakers",
        description: "Lightweight with cushioned soles",
        price: 89.99,
        rating: 4.8,
        reviewCount: 356,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 10002,
        name: "Casual Loafers",
        description: "Premium leather for everyday wear",
        price: 69.99,
        rating: 4.7,
        reviewCount: 198,
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      },
      {
        id: 10003,
        name: "Hiking Boots",
        description: "Waterproof with ankle support",
        price: 129.99,
        rating: 4.9,
        reviewCount: 287,
        image: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        inStock: true
      }
    ]
  };

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
      setCart([...cart, {...product, quantity: productQuantities[product.id] || 1}]);
      toast.success(`${product.name} added to cart!`);
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

  const handleShopClick = (shop) => {
    setSelectedShop(shop);
  };

  const handleBackToShops = () => {
    setSelectedShop(null);
  };

  const handleQuantityChange = (productId, amount) => {
    setProductQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + amount)
    }));
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    navigate('/checkout');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="h-16 w-16 border-4 border-teal-500 border-t-transparent rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-gray-600 font-medium"
          >
            Loading Local Treasures...
          </motion.p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center p-8 bg-red-50 rounded-xl border border-red-100 max-w-md">
          <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error Loading Shops</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Render Shop Products View
  if (selectedShop) {
    const shopCategory = selectedShop.category;
    const products = shopProducts[shopCategory] || [];
    
    return (
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
        {/* Navbar */}
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white shadow-lg py-2`}>
          <div className="container mx-auto px-4 flex items-center justify-between">
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/buyerhome")}
            >
             <img src={logo} alt="Logo" className="h-20 w-20 rounded-full object-contain" />
            </motion.div>

            <div className="flex items-center">
              <button 
                className="text-teal-600 font-medium flex items-center hover:text-teal-800 transition mr-6"
                onClick={handleBackToShops}
              >
                <ChevronRight className="rotate-180 mr-1" /> Back to Shops
              </button>
              
              <button className="relative text-gray-700">
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
            </div>
          </div>
        </nav>

        {/* Shop Header */}
        <div className="pt-24 pb-12 mt-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden shadow-lg mb-4 md:mb-0 md:mr-8">
                <img 
                  src={selectedShop.image} 
                  alt={selectedShop.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedShop.name}</h1>
                <div className="flex items-center justify-center md:justify-start mb-3">
                  <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="font-medium">{selectedShop.rating}</span>
                    <span className="text-gray-500 ml-1">({selectedShop.reviewCount})</span>
                  </div>
                  <div className="mx-4 w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedShop.category}
                  </div>
                </div>
                
                <div className="flex items-center justify-center md:justify-start text-gray-600 mb-4">
                  <FaMapMarkerAlt className="text-teal-500 mr-2" />
                  <p>{selectedShop.address}</p>
                </div>
                
                <p className="text-gray-700 max-w-3xl">{selectedShop.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
              <div className="text-gray-600">{products.length} products available</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <div className="text-2xl font-bold text-teal-600">${product.price}</div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                    
                    <div className="flex items-center mb-6">
                      <div className="flex items-center mr-4">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="font-medium">{product.rating}</span>
                        <span className="text-gray-500 ml-1">({product.reviewCount})</span>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-semibold ${
                        product.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}>
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button 
                          className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                          onClick={() => handleQuantityChange(product.id, -1)}
                        >
                          <FaMinus size={12} />
                        </button>
                        <span className="px-4 py-2">{productQuantities[product.id] || 1}</span>
                        <button 
                          className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                          onClick={() => handleQuantityChange(product.id, 1)}
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button 
                        className="flex-1 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium rounded-xl hover:opacity-90 transition"
                        onClick={() => handleBuyNow(product)}
                      >
                        Buy Now
                      </button>
                      <button 
                        className="flex-1 py-3 bg-white border border-teal-500 text-teal-600 font-medium rounded-xl hover:bg-teal-50 transition"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Main Homepage View
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 min-h-screen">
      {/* Navbar */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/")}
            
          >
            <img src={logo} alt="Logo" className="h-25 w-22 rounded-full object-contain" />
            
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
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none shadow-sm"
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
                  <button className="flex-1 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:opacity-90 transition">
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Local marketplace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 z-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Discover <span className="text-teal-400">Local Treasures</span>
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
              className="px-8 py-3.5 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium rounded-xl hover:opacity-90 transition shadow-lg flex items-center"
            >
              <ShoppingBag className="mr-2" /> Explore Shops
            </button>
            <button 
              className="px-8 py-3.5 bg-white text-teal-600 font-medium rounded-xl hover:bg-gray-100 transition shadow-lg flex items-center"
            >
              <Award className="mr-2" /> Join Community
            </button>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block p-3 rounded-full bg-teal-50 mb-4"
            >
              <FaTags className="text-teal-600 text-2xl" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find local businesses by category and support your neighborhood entrepreneurs
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 sm:p-6 text-center cursor-pointer border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all shadow-sm"
                onClick={() => handleCategorySelect(category.name)}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-50 to-gray-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  {category.icon}
                </div>
                <h3 className="font-medium text-gray-800 text-sm sm:text-base">{category.name}</h3>
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
              <div className="flex items-center mb-2">
                <div className="w-10 h-0.5 bg-teal-500 mr-3"></div>
                <span className="text-teal-600 font-medium">Local Businesses</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedCategory ? `${selectedCategory} Shops` : "Featured Shops"}
              </h2>
              <p className="text-gray-600">
                {selectedCategory ? `Top ${selectedCategory} shops in your area` : "Top-rated local businesses in your area"}
              </p>
            </div>
            {selectedCategory ? (
              <button 
                className="text-teal-600 font-medium flex items-center hover:text-teal-800 transition"
                onClick={() => {
                  setSelectedCategory(null);
                  setShops(mockShops.slice(0, 6));
                }}
              >
                Back to Featured
              </button>
            ) : (
              <button className="text-teal-600 font-medium flex items-center hover:text-teal-800 transition">
                View all <ChevronRight size={18} className="ml-1" />
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory ? shops.slice(0, 6) : mockShops.slice(0, 6)).map((shop) => (
              <motion.div
                key={shop.id}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                onClick={() => handleShopClick(shop)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={shop.image} 
                    alt={shop.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(shop.id);
                    }}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition"
                  >
                    {favorites[shop.id] ? 
                      <FaHeart className="text-red-500 animate-pulse" /> : 
                      <FaRegHeart className="text-gray-600 hover:text-red-500 transition" />
                    }
                  </button>
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {shop.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{shop.name}</h3>
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="font-medium">{shop.rating}</span>
                      <span className="text-gray-500 ml-1">({shop.reviewCount})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <FaMapMarkerAlt className="text-teal-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{shop.address}</p>
                  </div>
                  
                  <p className="text-gray-700 mb-5 text-sm">{shop.description}</p>
                  
                  <div className="flex gap-3">
                    <button 
                      className="flex-1 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium rounded-xl hover:opacity-90 transition text-sm sm:text-base"
                    >
                      Visit Shop
                    </button>
                    <button 
                      className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-xl hover:bg-gray-50 transition"
                    >
                      <FaShoppingCart className="text-teal-600 hover:text-teal-800 transition" />
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block p-3 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 mb-4"
            >
              <Gift className="text-teal-600" size={28} />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Limited time deals from your favorite local shops. Hurry before they expire!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialOffers.map((offer) => (
              <motion.div
                key={offer.id}
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                    {offer.discount}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{offer.title}</h3>
                    <div className="bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 px-2 py-1 rounded text-xs font-semibold">
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
                    className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium rounded-xl hover:opacity-90 transition shadow-md"
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
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full -mt-32 -mr-32 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full -mb-48 -ml-48 opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community Today</h2>
          <p className="text-teal-100 max-w-2xl mx-auto mb-10">
            Become part of the movement supporting local businesses and discover unique products in your neighborhood
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-white text-teal-700 font-medium rounded-xl hover:bg-gray-100 transition shadow-lg flex items-center">
              <ShoppingBag className="mr-2" /> Sign Up Now
            </button>
            <button className="px-8 py-3.5 border-2 border-white text-white font-medium rounded-xl hover:bg-white/10 transition flex items-center">
              <Award className="mr-2" /> Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full shadow-lg hover:opacity-90 transition"
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
    <span className="font-semibold text-teal-600">
      {timeLeft.days > 0 && `${timeLeft.days}d `}
      {timeLeft.hours}h {timeLeft.minutes}m
    </span>
  );
};

export default BuyerHomePage;