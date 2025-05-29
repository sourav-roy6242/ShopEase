
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import { 
  FaVideo, FaBox, FaShoppingCart, FaChartLine, 
  FaBell, FaCog, FaSignOutAlt, FaPlay, FaStop,
  FaCheckCircle, FaTruck, FaClock, FaTimesCircle,
  FaPlus, FaEdit, FaTrash, FaSearch, FaDollarSign 
} from "react-icons/fa";

const SellerDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isStreaming, setIsStreaming] = useState(false);
  const [viewers, setViewers] = useState(0);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [shopDetails, setShopDetails] = useState({
    shopName: "My Shop",
    ownerName: "Owner Name",
    shopAddress: "Shop Address",
  });

  const [subscription, setSubscription] = useState({
    plan: "Silver Plan",
    status: "Active",
    validity: "2025-07-30",
    daysRemaining: 120,
  });

  // State for the countdown timer
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // State for the progress bar width
  const [progressWidth, setProgressWidth] = useState(100);

  // Fetch shop details from the backend
  useEffect(() => {
    const fetchShopDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/shops/${shopDetails.shopName}`
        );
        setShopDetails({
          ...response.data,
          ownerName: response.data.ownerName || "Owner Name",
          shopAddress: response.data.shopAddress || "Shop Address"
        });
      } catch (error) {
        console.error("Error fetching shop details:", error);
      }
    };

    fetchShopDetails();
  }, [shopDetails.shopName]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Replace with actual API call
        setProducts([
          { id: 1, name: "Wireless Headphones", price: 129.99, stock: 15, status: "Published", category: "Electronics" },
          { id: 2, name: "Smart Watch", price: 199.99, stock: 8, status: "Published", category: "Wearables" },
          { id: 3, name: "Cotton T-Shirt", price: 24.99, stock: 42, status: "Published", category: "Apparel" },
          { id: 4, name: "Coffee Maker", price: 89.99, stock: 5, status: "Draft", category: "Home & Kitchen" },
        ]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Fetch orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Replace with actual API call
        setOrders([
          { id: "ORD-123", customer: "John Smith", date: "May 15, 2023", amount: 125.00, status: "Delivered" },
          { id: "ORD-124", customer: "Sarah Johnson", date: "May 14, 2023", amount: 89.50, status: "Shipped" },
          { id: "ORD-125", customer: "Michael Brown", date: "May 14, 2023", amount: 245.75, status: "Processing" },
          { id: "ORD-126", customer: "Emily Davis", date: "May 13, 2023", amount: 67.30, status: "Cancelled" },
        ]);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  // Countdown timer logic
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const validityDate = new Date(subscription.validity);
      const now = new Date();
      const difference = validityDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });

        // Calculate progress bar width
        const totalDays = subscription.daysRemaining;
        const remainingPercentage = (days / totalDays) * 100;
        setProgressWidth(remainingPercentage);
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setProgressWidth(0);
      }
    };

    const timer = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(timer);
  }, [subscription.validity, subscription.daysRemaining]);

  // Handle video upload
  const handleUploadVideo = () => {
    navigate("/videos");
  };

  // Handle upload items
  const handleUploadItems = () => {
    navigate("/uploadpage");
  };

  // Handle manage subscription
  const handleManageSubscription = () => {
    navigate("/subscription");
  };

  // Handle logout
  const handleLogout = () => {
    navigate("/login");
  };

  // Toggle live stream
  const toggleStream = () => {
    setIsStreaming(!isStreaming);
    if (!isStreaming) {
      // Simulate viewers joining
      const viewerInterval = setInterval(() => {
        setViewers(prev => {
          if (prev < 50) return prev + Math.floor(Math.random() * 5) + 1;
          return prev;
        });
      }, 3000);
      
      setTimeout(() => {
        clearInterval(viewerInterval);
      }, 30000);
    } else {
      setViewers(0);
    }
  };

  // Render content based on active tab
  const renderContent = () => {
    switch(activeTab) {
      case "products":
        return <ProductList products={products} />;
      case "orders":
        return <OrderList orders={orders} />;
      case "live":
        return <LiveStream isStreaming={isStreaming} toggleStream={toggleStream} viewers={viewers} />;
      default:
        return <DashboardHome 
          shopDetails={shopDetails} 
          subscription={subscription} 
          progressWidth={progressWidth}
          timeRemaining={timeRemaining}
          handleUploadVideo={handleUploadVideo}
          handleUploadItems={handleUploadItems}
        />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-1 mt-20">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg h-[calc(100vh-5rem)] fixed inset-y-20 left-0 z-30 overflow-y-auto hidden md:block">
          <div className="p-6">
            {/* Shop Information */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-gray-800 truncate max-w-[150px]">
                    {shopDetails.shopName}
                  </h2>
                  <p className="text-sm text-gray-600 truncate max-w-[150px]">
                    {shopDetails.ownerName}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 truncate">
                <span className="font-medium">Address:</span> {shopDetails.shopAddress}
              </p>
            </div>

            {/* Navigation */}
            <nav>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className={`w-full flex items-center p-3 rounded-lg transition duration-300 ${
                      activeTab === "dashboard" 
                        ? "bg-indigo-50 text-indigo-600" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <FaChartLine className="mr-3" />
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("live")}
                    className={`w-full flex items-center p-3 rounded-lg transition duration-300 ${
                      activeTab === "live" 
                        ? "bg-indigo-50 text-indigo-600" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <FaVideo className="mr-3" />
                    Live Stream
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("products")}
                    className={`w-full flex items-center p-3 rounded-lg transition duration-300 ${
                      activeTab === "products" 
                        ? "bg-indigo-50 text-indigo-600" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <FaBox className="mr-3" />
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("orders")}
                    className={`w-full flex items-center p-3 rounded-lg transition duration-300 ${
                      activeTab === "orders" 
                        ? "bg-indigo-50 text-indigo-600" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <FaShoppingCart className="mr-3" />
                    Orders
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleUploadVideo}
                    className="w-full flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300"
                  >
                    <FaVideo className="mr-3" />
                    Upload Video
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleUploadItems}
                    className="w-full flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300"
                  >
                    <FaBox className="mr-3" />
                    Upload Items
                  </button>
                </li>
              </ul>
            </nav>

            {/* Subscription Section */}
            <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold text-indigo-700 flex items-center">
                <FaChartLine className="mr-2" /> Subscription
              </h3>
              <p className="text-sm mt-2">
                <span className="font-medium">{subscription.plan}</span>
              </p>
              <p className="text-sm">
                Status:{" "}
                <span className={`font-medium ${
                  subscription.status === "Active" ? "text-green-600" : "text-red-600"
                }`}>
                  {subscription.status}
                </span>
              </p>
              <button 
                onClick={handleManageSubscription}
                className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 px-3 rounded-lg transition"
              >
                Manage
              </button>
            </div>

            {/* Logout Button */}
            <div className="mt-8">
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center text-red-600 hover:bg-red-50 p-3 rounded-lg transition duration-300"
              >
                <FaSignOutAlt className="mr-2" />
                Log Out
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:ml-64 md:p-6">
          {/* Mobile Top Bar */}
          <div className="md:hidden bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center">
            <button 
              className="p-2 rounded-lg hover:bg-gray-100"
              onClick={() => document.getElementById('mobile-sidebar').classList.toggle('hidden')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h2 className="text-xl font-bold text-gray-800">{shopDetails.shopName}</h2>
            <div className="w-10"></div>
          </div>

          {/* Mobile Sidebar */}
          <div id="mobile-sidebar" className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 hidden">
            <div className="w-64 bg-white h-full p-4">
              <div className="flex justify-end">
                <button 
                  className="p-2"
                  onClick={() => document.getElementById('mobile-sidebar').classList.add('hidden')}
                >
                  <FaTimesCircle className="text-gray-500 text-xl" />
                </button>
              </div>
              {/* Mobile Navigation */}
              <nav className="mt-4">
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => { setActiveTab("dashboard"); document.getElementById('mobile-sidebar').classList.add('hidden'); }}
                      className={`w-full flex items-center p-3 rounded-lg transition duration-300 ${
                        activeTab === "dashboard" 
                          ? "bg-indigo-50 text-indigo-600" 
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <FaChartLine className="mr-3" />
                      Dashboard
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { setActiveTab("live"); document.getElementById('mobile-sidebar').classList.add('hidden'); }}
                      className={`w-full flex items-center p-3 rounded-lg transition duration-300 ${
                        activeTab === "live" 
                          ? "bg-indigo-50 text-indigo-600" 
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <FaVideo className="mr-3" />
                      Live Stream
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { setActiveTab("products"); document.getElementById('mobile-sidebar').classList.add('hidden'); }}
                      className={`w-full flex items-center p-3 rounded-lg transition duration-300 ${
                        activeTab === "products" 
                          ? "bg-indigo-50 text-indigo-600" 
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <FaBox className="mr-3" />
                      Products
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { setActiveTab("orders"); document.getElementById('mobile-sidebar').classList.add('hidden'); }}
                      className={`w-full flex items-center p-3 rounded-lg transition duration-300 ${
                        activeTab === "orders" 
                          ? "bg-indigo-50 text-indigo-600" 
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <FaShoppingCart className="mr-3" />
                      Orders
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex overflow-x-auto mb-6 pb-1 scrollbar-hide">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-4 py-2 rounded-t-lg font-medium mr-2 whitespace-nowrap ${
                activeTab === "dashboard" 
                  ? "bg-white border-t border-l border-r text-indigo-600" 
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("live")}
              className={`px-4 py-2 rounded-t-lg font-medium mr-2 whitespace-nowrap ${
                activeTab === "live" 
                  ? "bg-white border-t border-l border-r text-indigo-600" 
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Live Stream
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`px-4 py-2 rounded-t-lg font-medium mr-2 whitespace-nowrap ${
                activeTab === "products" 
                  ? "bg-white border-t border-l border-r text-indigo-600" 
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`px-4 py-2 rounded-t-lg font-medium whitespace-nowrap ${
                activeTab === "orders" 
                  ? "bg-white border-t border-l border-r text-indigo-600" 
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Orders
            </button>
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-lg shadow p-4 md:p-6">
            {renderContent()}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// Dashboard Home Component
const DashboardHome = ({ 
  shopDetails, 
  subscription, 
  progressWidth, 
  timeRemaining,
  handleUploadVideo,
  handleUploadItems
}) => (
  <div>
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white mb-6">
      <h1 className="text-2xl md:text-3xl font-bold">
        Welcome, {shopDetails.shopName}!
      </h1>
      <p className="mt-2">
        Manage your shop, upload videos, and track your subscription.
      </p>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg border p-4 shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <h3 className="text-xl font-bold mt-1">$12,345</h3>
          </div>
          <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
            <FaDollarSign className="text-lg" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-4 shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Orders</p>
            <h3 className="text-xl font-bold mt-1">567</h3>
          </div>
          <div className="p-2 rounded-lg bg-amber-50 text-amber-500">
            <FaShoppingCart className="text-lg" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-4 shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Products</p>
            <h3 className="text-xl font-bold mt-1">42</h3>
          </div>
          <div className="p-2 rounded-lg bg-green-50 text-green-500">
            <FaBox className="text-lg" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-4 shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Conversion Rate</p>
            <h3 className="text-xl font-bold mt-1">89%</h3>
          </div>
          <div className="p-2 rounded-lg bg-blue-50 text-blue-500">
            <FaChartLine className="text-lg" />
          </div>
        </div>
      </div>
    </div>

    {/* Subscription Card */}
    <div className="bg-white rounded-xl border p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Subscription Details</h2>
        <span className={`px-3 py-1 rounded-full text-sm ${
          subscription.status === "Active" 
            ? "bg-green-100 text-green-800" 
            : "bg-red-100 text-red-800"
        }`}>
          {subscription.status}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Plan:</span>
            <span className="font-medium">{subscription.plan}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Validity:</span>
            <span className="font-medium">{subscription.validity}</span>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-3">Time Remaining</h3>
          <div className="flex space-x-2">
            <div className="text-center">
              <span className="text-xl font-bold text-blue-600">{timeRemaining.days}</span>
              <span className="block text-xs text-gray-600">Days</span>
            </div>
            <div className="text-center">
              <span className="text-xl font-bold text-blue-600">{timeRemaining.hours}</span>
              <span className="block text-xs text-gray-600">Hours</span>
            </div>
            <div className="text-center">
              <span className="text-xl font-bold text-blue-600">{timeRemaining.minutes}</span>
              <span className="block text-xs text-gray-600">Minutes</span>
            </div>
            <div className="text-center">
              <span className="text-xl font-bold text-blue-600">{timeRemaining.seconds}</span>
              <span className="block text-xs text-gray-600">Seconds</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full" 
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          {timeRemaining.days} days remaining
        </p>
      </div>
    </div>

    {/* Quick Actions */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Upload Video</h2>
        <p className="text-gray-600 mb-4">
          Showcase your shop and products with a professionally recorded video.
        </p>
        <button
          onClick={handleUploadVideo}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow transition"
        >
          Upload Video
        </button>
      </div>

      <div className="bg-green-50 border border-green-100 rounded-xl p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Upload Items</h2>
        <p className="text-gray-600 mb-4">
          Add new products or services to your shop inventory.
        </p>
        <button
          onClick={handleUploadItems}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg shadow transition"
        >
          Upload Items
        </button>
      </div>
    </div>
  </div>
);

// Product List Component
const ProductList = ({ products }) => (
  <div>
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
      <h2 className="text-xl font-bold">Product Inventory</h2>
      <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input 
            type="text" 
            className="block pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
            placeholder="Search products..."
          />
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition flex items-center">
          <FaPlus className="mr-2" /> Add Product
        </button>
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3 px-4">Product</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3 px-4">Category</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3 px-4">Stock</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3 px-4">Price</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3 px-4">Status</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="py-4 px-4">
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-sm text-gray-500">{product.category}</td>
              <td className="py-4 px-4">
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-2">{product.stock}</span>
                  {product.stock < 10 && (
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Low</span>
                  )}
                </div>
              </td>
              <td className="py-4 px-4 text-sm font-medium text-gray-700">${product.price}</td>
              <td className="py-4 px-4">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  product.status === "Published" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-gray-100 text-gray-800"
                }`}>
                  {product.status}
                </span>
              </td>
              <td className="py-4 px-4">
                <div className="flex space-x-2">
                  <button className="text-indigo-600 hover:text-indigo-900">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
      <p className="text-sm text-gray-500 mb-4 sm:mb-0">Showing {products.length} products</p>
      <div className="flex space-x-2">
        <button className="px-3 py-1 border border-gray-300 rounded text-sm">Previous</button>
        <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">1</button>
        <button className="px-3 py-1 border border-gray-300 rounded text-sm">2</button>
        <button className="px-3 py-1 border border-gray-300 rounded text-sm">Next</button>
      </div>
    </div>
  </div>
);

// Order List Component
const OrderList = ({ orders }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case "Delivered": return "bg-green-100 text-green-800";
      case "Shipped": return "bg-blue-100 text-blue-800";
      case "Processing": return "bg-amber-100 text-amber-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case "Delivered": return <FaCheckCircle className="mr-1" />;
      case "Shipped": return <FaTruck className="mr-1" />;
      case "Processing": return <FaClock className="mr-1" />;
      case "Cancelled": return <FaTimesCircle className="mr-1" />;
      default: return null;
    }
  };

  return (
  <div>
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
      <h2 className="text-xl font-bold">Order Management</h2>
      <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <option>All Orders</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Cancelled</option>
        </select>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input 
            type="text" 
            className="block pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
            placeholder="Search orders..."
          />
        </div>
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3 px-4">Order ID</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3 px-4">Customer</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3 px-4">Date</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3 px-4">Amount</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3 px-4">Status</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="py-4 px-4 text-sm font-medium text-gray-900">#{order.id}</td>
              <td className="py-4 px-4 text-sm text-gray-500">{order.customer}</td>
              <td className="py-4 px-4 text-sm text-gray-500">{order.date}</td>
              <td className="py-4 px-4 text-sm font-medium text-gray-700">${order.amount}</td>
              <td className="py-4 px-4">
                <span className={`px-2 py-1 text-xs rounded-full flex items-center ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)} {order.status}
                </span>
              </td>
              <td className="py-4 px-4">
                <button className="text-indigo-600 hover:text-indigo-900 text-sm">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
      <p className="text-sm text-gray-500 mb-4 sm:mb-0">Showing {orders.length} orders</p>
      <div className="flex space-x-2">
        <button className="px-3 py-1 border border-gray-300 rounded text-sm">Previous</button>
        <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">1</button>
        <button className="px-3 py-1 border border-gray-300 rounded text-sm">2</button>
        <button className="px-3 py-1 border border-gray-300 rounded text-sm">Next</button>
      </div>
    </div>
  </div>
);
};

// Live Stream Component
const LiveStream = ({ isStreaming, toggleStream, viewers }) => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold">Live Streaming</h2>
      <button 
        onClick={toggleStream}
        className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center ${
          isStreaming 
            ? 'bg-red-600 text-white hover:bg-red-700' 
            : 'bg-green-600 text-white hover:bg-green-700'
        }`}
      >
        {isStreaming ? <FaStop className="mr-2" /> : <FaPlay className="mr-2" />}
        {isStreaming ? 'End Stream' : 'Go Live'}
      </button>
    </div>

    {isStreaming ? (
      <div className="space-y-6">
        <div className="relative bg-black rounded-xl overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <div className="bg-gray-900 w-full h-64 md:h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
                    <FaVideo className="text-white text-2xl" />
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold">Live Streaming Active</h3>
                <p className="text-gray-400 mt-2">Streaming to {viewers} viewers</p>
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            LIVE
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-3">Stream Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500">Title</p>
                <p className="font-medium">Product Launch Event</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Scheduled Time</p>
                <p className="font-medium">Now Live</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Description</p>
                <p className="font-medium">Introducing our new product line with special discounts</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-3">Live Comments</h3>
            <div className="h-48 overflow-y-auto space-y-3">
              <div className="flex">
                <div className="mr-3">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                </div>
                <div className="bg-white p-3 rounded-lg flex-1">
                  <p className="font-medium text-sm">Alex Johnson</p>
                  <p className="text-sm mt-1">Excited for the new products! When will they be available?</p>
                  <p className="text-xs text-gray-500 mt-1">2 min ago</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-3">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                </div>
                <div className="bg-white p-3 rounded-lg flex-1">
                  <p className="font-medium text-sm">Sarah Miller</p>
                  <p className="text-sm mt-1">The design looks amazing! Can we get it in different colors?</p>
                  <p className="text-xs text-gray-500 mt-1">4 min ago</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-3">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                </div>
                <div className="bg-white p-3 rounded-lg flex-1">
                  <p className="font-medium text-sm">Mike Peterson</p>
                  <p className="text-sm mt-1">Will there be an early bird discount?</p>
                  <p className="text-xs text-gray-500 mt-1">5 min ago</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex">
              <input 
                type="text" 
                placeholder="Add a comment..." 
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
              />
              <button className="bg-indigo-600 text-white px-4 rounded-r-lg">Send</button>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
          <FaVideo className="text-gray-400 text-3xl" />
        </div>
        <h3 className="text-xl font-bold mt-6">Start a Live Stream</h3>
        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          Go live to interact with your audience in real-time. Share updates, showcase products, or host Q&A sessions.
        </p>
        <button 
          onClick={toggleStream}
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition flex items-center mx-auto"
        >
          <FaPlay className="mr-2" /> Start Streaming
        </button>
      </div>
    )}
  </div>
);

export default SellerDashboard;