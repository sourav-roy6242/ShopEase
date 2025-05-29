import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaFilter,
  FaShoppingCart,
  FaTshirt,
  FaShoePrints,
  FaSearch,
  FaTags,
  FaHeart,
  FaRegHeart,
  FaUser,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaMinus
} from "react-icons/fa";

const productsData = [
  {
    id: 1,
    name: "Nike Air Max 270",
    category: "Shoes",
    price: 120,
    company: "Nike",
    gender: "Male",
    image: "https://via.placeholder.com/300x200?text=Nike+Air+Max",
    rating: 4.5,
    discount: 20,
    color: "Black/White",
    size: ["8", "9", "10", "11"],
    description: "Revolutionary comfort meets iconic style with Nike Air Max 270."
  },
  {
    id: 2,
    name: "Adidas Ultra Boost 21",
    category: "Shoes",
    price: 150,
    company: "Adidas",
    gender: "Female",
    image: "https://via.placeholder.com/300x200?text=Adidas+Ultra+Boost",
    rating: 4.7,
    discount: 15,
    color: "White/Pink",
    size: ["6", "7", "8", "9"],
    description: "Experience ultimate comfort with Adidas Ultra Boost running shoes."
  },
  {
    id: 3,
    name: "Puma Essentials T-Shirt",
    category: "Clothing",
    price: 35,
    company: "Puma",
    gender: "Male",
    image: "https://via.placeholder.com/300x200?text=Puma+T-Shirt",
    rating: 4.2,
    discount: 10,
    color: "Black",
    size: ["S", "M", "L", "XL"],
    description: "Premium cotton t-shirt for everyday comfort and style."
  },
  {
    id: 4,
    name: "Zara Floral Summer Dress",
    category: "Clothing",
    price: 70,
    company: "Zara",
    gender: "Female",
    image: "https://via.placeholder.com/300x200?text=Zara+Dress",
    rating: 4.8,
    discount: 25,
    color: "Floral Print",
    size: ["XS", "S", "M"],
    description: "Elegant floral dress perfect for summer occasions."
  },
  {
    id: 5,
    name: "Nike Sport Shorts",
    category: "Clothing",
    price: 45,
    company: "Nike",
    gender: "Male",
    image: "https://via.placeholder.com/300x200?text=Nike+Shorts",
    rating: 4.3,
    discount: 5,
    color: "Blue",
    size: ["M", "L", "XL"],
    description: "Lightweight and breathable shorts for sports and casual wear."
  },
  {
    id: 6,
    name: "Adidas Superstar Shoes",
    category: "Shoes",
    price: 100,
    company: "Adidas",
    gender: "Unisex",
    image: "https://via.placeholder.com/300x200?text=Adidas+Superstar",
    rating: 4.9,
    discount: 0,
    color: "White/Black",
    size: ["7", "8", "9", "10", "11"],
    description: "Classic shell-toe design with timeless style."
  },
];

const categories = [
  { name: "All", icon: <FaFilter /> },
  { name: "Shoes", icon: <FaShoePrints /> },
  { name: "Clothing", icon: <FaTshirt /> },
];
const companies = ["All", "Nike", "Adidas", "Puma", "Zara"];
const genders = ["All", "Male", "Female", "Unisex"];
const sortOptions = ["Default", "Low to High", "High to Low", "Top Rated"];
const colors = ["All", "Black", "White", "Blue", "Red", "Green", "Multicolor"];

const EcommercePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [sortOrder, setSortOrder] = useState("Default");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  // Initialize cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Filter products
  const filteredProducts = productsData
    .filter(
      (p) =>
        (selectedCategory === "All" || p.category === selectedCategory) &&
        (selectedCompany === "All" || p.company === selectedCompany) &&
        (selectedGender === "All" || p.gender === selectedGender) &&
        (selectedColor === "All" || p.color.includes(selectedColor)) &&
        p.price >= priceRange[0] && p.price <= priceRange[1] &&
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "Low to High") return a.price - b.price;
      if (sortOrder === "High to Low") return b.price - a.price;
      if (sortOrder === "Top Rated") return b.rating - a.rating;
      return 0;
    });

  // Toggle wishlist
  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  // Add to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id && item.size === selectedSize);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id && item.size === selectedSize 
          ? {...item, quantity: item.quantity + quantity} 
          : item
      ));
    } else {
      setCartItems([...cartItems, {...product, quantity, size: selectedSize}]);
    }
    
    setSelectedProduct(null);
    setQuantity(1);
    setSelectedSize("");
  };

  // Cart total
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Render stars for rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar 
          key={i} 
          className={i <= Math.floor(rating) ? "text-yellow-400" : "text-gray-300"} 
        />
      );
    }
    return <div className="flex">{stars}</div>;
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedCompany("All");
    setSelectedGender("All");
    setSelectedColor("All");
    setPriceRange([0, 200]);
    setSortOrder("Default");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo and Menu */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-blue-600">StyleHub</div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-blue-600">Home</a>
              <a href="#" className="hover:text-blue-600">New Arrivals</a>
              <a href="#" className="hover:text-blue-600">Categories</a>
              <a href="#" className="hover:text-blue-600">Deals</a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow w-1/3">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-full outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FaShoppingCart className="text-xl cursor-pointer" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </div>
            <div className="relative hidden md:block">
              <FaHeart className="text-xl cursor-pointer" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </div>
            <div className="hidden md:block">
              <FaUser className="text-xl cursor-pointer" />
            </div>
            <button 
              className="md:hidden text-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden bg-white p-4 rounded shadow">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg mb-4">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full outline-none bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <a href="#" className="block py-2 hover:text-blue-600">Home</a>
              <a href="#" className="block py-2 hover:text-blue-600">New Arrivals</a>
              <a href="#" className="block py-2 hover:text-blue-600">Categories</a>
              <a href="#" className="block py-2 hover:text-blue-600">Deals</a>
            </div>
          </div>
        )}
      </nav>

      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Summer Sale is Live!</h1>
          <p className="text-lg mb-6">Up to 50% off on selected items. Limited time offer.</p>
          <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Mobile Filter Button */}
        <div className="md:hidden flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Products</h2>
          <button 
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <FaFilter /> Filters
            {isFilterOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left: Filters - Hidden on mobile when not open */}
          <div 
            className={`lg:col-span-1 bg-white shadow-lg rounded-xl p-4 text-sm transition-all duration-300 ${
              isFilterOpen ? "block" : "hidden lg:block"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <FaFilter /> Filter
              </h2>
              <button 
                className="text-blue-600 text-sm"
                onClick={resetFilters}
              >
                Reset
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block font-medium mb-2">Sort By</label>
                <select
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  {sortOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-medium mb-2">Price Range</label>
                <div className="mb-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    step="10"
                    className="w-full accent-blue-600"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  />
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              <div>
                <label className="block font-medium mb-2">Company</label>
                <div className="space-y-2">
                  {companies.map((comp) => (
                    <button
                      key={comp}
                      onClick={() => setSelectedCompany(comp)}
                      className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-md ${
                        selectedCompany === comp 
                          ? "bg-blue-600 text-white" 
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {comp}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-medium mb-2">Gender</label>
                <div className="space-y-2">
                  {genders.map((gen) => (
                    <button
                      key={gen}
                      onClick={() => setSelectedGender(gen)}
                      className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-md ${
                        selectedGender === gen 
                          ? "bg-blue-600 text-white" 
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {gen}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-medium mb-2">Color</label>
                <div className="space-y-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-md ${
                        selectedColor === color 
                          ? "bg-blue-600 text-white" 
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-medium mb-2">Category</label>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-md ${
                        selectedCategory === cat.name 
                          ? "bg-blue-600 text-white" 
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {cat.icon} {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg">
                <label className="block font-medium mb-2 flex items-center gap-2">
                  <FaTags className="text-green-600" /> Special Offers
                </label>
                <div className="text-green-600">
                  <p>• Upto 50% Off on Clothing</p>
                  <p>• Free Shipping on orders over $100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Products */}
          <div className="lg:col-span-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                {selectedCategory === "All" ? "All Products" : selectedCategory} 
                <span className="text-gray-500 text-base font-normal ml-2">
                  ({filteredProducts.length} products)
                </span>
              </h2>
              <div className="hidden md:block text-sm">
                Sort: 
                <select
                  className="ml-2 border border-gray-300 px-2 py-1 rounded-md"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  {sortOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-xl shadow p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search term</p>
                <button 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  onClick={resetFilters}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 transition-all duration-300 hover:-translate-y-1 relative"
                  >
                    {product.discount > 0 && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        -{product.discount}%
                      </div>
                    )}
                    <button 
                      className="absolute top-3 right-3 text-xl z-10"
                      onClick={() => toggleWishlist(product.id)}
                    >
                      {wishlist.includes(product.id) 
                        ? <FaHeart className="text-red-500" /> 
                        : <FaRegHeart className="text-gray-400 hover:text-red-500" />
                      }
                    </button>
                    <div className="overflow-hidden rounded-lg mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-105 cursor-pointer"
                        onClick={() => setSelectedProduct(product)}
                      />
                    </div>
                    <h3 className="text-md font-bold text-gray-800 mb-1">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">{product.company}</span>
                      <div className="flex items-center">
                        {renderStars(product.rating)}
                        <span className="ml-1 text-sm text-gray-500">({product.rating})</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        {product.discount > 0 ? (
                          <div className="flex items-baseline gap-2">
                            <span className="text-blue-600 font-bold text-lg">
                              ${(product.price * (1 - product.discount/100)).toFixed(2)}
                            </span>
                            <span className="text-gray-400 text-sm line-through">
                              ${product.price}
                            </span>
                          </div>
                        ) : (
                          <span className="text-blue-600 font-bold text-lg">
                            ${product.price}
                          </span>
                        )}
                      </div>
                      <button 
                        className="flex items-center gap-2 text-sm bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition"
                        onClick={() => {
                          setSelectedProduct(product);
                          setSelectedSize("");
                        }}
                      >
                        <FaShoppingCart /> Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">StyleHub</h3>
            <p className="text-gray-400">
              Your one-stop destination for the latest fashion trends and styles.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Men</a></li>
              <li><a href="#" className="hover:text-white">Women</a></li>
              <li><a href="#" className="hover:text-white">Kids</a></li>
              <li><a href="#" className="hover:text-white">New Arrivals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Help</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Customer Service</a></li>
              <li><a href="#" className="hover:text-white">Track Order</a></li>
              <li><a href="#" className="hover:text-white">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white">Shipping Info</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-3">
              Subscribe to get special offers, free giveaways, and new arrivals.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 rounded-l text-gray-800 w-full"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2023 StyleHub. All rights reserved.</p>
        </div>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
                <button 
                  className="text-gray-500 hover:text-gray-700 text-xl"
                  onClick={() => setSelectedProduct(null)}
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div>
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-gray-500 mr-4">{selectedProduct.company}</span>
                    <div className="flex items-center">
                      {renderStars(selectedProduct.rating)}
                      <span className="ml-2 text-gray-500">({selectedProduct.rating})</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{selectedProduct.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Color</h4>
                    <div className="flex gap-2">
                      <button className="border-2 border-blue-500 rounded-full w-8 h-8 focus:ring-2 focus:ring-blue-300"></button>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Size</h4>
                    <div className="flex gap-2 flex-wrap">
                      {selectedProduct.size.map(s => (
                        <button 
                          key={s}
                          className={`px-4 py-2 border rounded ${
                            selectedSize === s 
                              ? "bg-blue-600 text-white border-blue-600" 
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                          onClick={() => setSelectedSize(s)}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <h4 className="font-bold mr-4">Quantity</h4>
                    <div className="flex items-center border rounded">
                      <button 
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <FaMinus />
                      </button>
                      <span className="px-4 py-1">{quantity}</span>
                      <button 
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      {selectedProduct.discount > 0 ? (
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-blue-600">
                            ${(selectedProduct.price * (1 - selectedProduct.discount/100)).toFixed(2)}
                          </span>
                          <span className="text-gray-400 line-through">
                            ${selectedProduct.price}
                          </span>
                        </div>
                      ) : (
                        <span className="text-2xl font-bold text-blue-600">
                          ${selectedProduct.price}
                        </span>
                      )}
                    </div>
                    
                    <button 
                      className={`px-6 py-3 rounded-lg font-bold ${
                        selectedSize 
                          ? "bg-blue-600 text-white hover:bg-blue-700" 
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                      disabled={!selectedSize}
                      onClick={() => addToCart(selectedProduct)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {cartItems.length > 0 && (
        <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-lg z-50">
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Your Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})</h3>
              <button className="text-gray-500 hover:text-gray-700">
                <FaTimes />
              </button>
            </div>
            
            <div className="flex-grow overflow-auto mb-4">
              {cartItems.map(item => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4 py-4 border-b">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-grow">
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-gray-600 text-sm">{item.company}</p>
                    <p className="text-gray-600 text-sm">Size: {item.size}</p>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border rounded">
                        <button className="px-2 text-gray-600 hover:bg-gray-100">
                          <FaMinus />
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button className="px-2 text-gray-600 hover:bg-gray-100">
                          <FaPlus />
                        </button>
                      </div>
                      <span className="font-bold">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EcommercePage;
