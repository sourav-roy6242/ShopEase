import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";

const SellerDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { shopName, ownerName, shopAddress } = location.state || {
    shopName: "My Shop",
    ownerName: "Owner Name",
    shopAddress: "Shop Address",
  }; // Default values if not passed

  const [shopDetails, setShopDetails] = useState({
    shopName,
    ownerName,
    shopAddress,
  });

  const [subscription, setSubscription] = useState({
    plan: "Silver Plan",
    status: "Active",
    validity: "2025-07-30", // Ensure this is a valid future date
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
  const [progressWidth, setProgressWidth] = useState(100); // Initial width (100%)

  // Fetch shop details from the backend
  useEffect(() => {
    const fetchShopDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/shops/${shopName}`
        );
        setShopDetails(response.data);
      } catch (error) {
        console.error("Error fetching shop details:", error);
      }
    };

    fetchShopDetails();
  }, [shopName]);

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
        const totalDays = Math.floor(
          (new Date(subscription.validity) -
            new Date(
              subscription.validity -
                subscription.daysRemaining * 24 * 60 * 60 * 1000
            )) /
            (1000 * 60 * 60 * 24)
        );
        const remainingPercentage = (days / totalDays) * 100;
        setProgressWidth(remainingPercentage);
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setProgressWidth(0); // Set progress to 0 when subscription expires
      }
    };

    // Update the timer every second
    const timer = setInterval(calculateTimeRemaining, 1000);

    // Clear the timer on component unmount
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

  return (
    <div>
      <Navbar />
      <div className="min-h-screen  flex flex-col bg-gray-50">
        {/* Main Content with Sidebar */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <div className="w-64 bg-white mt-20 shadow-lg h-190 fixed inset-y-0 left-0 z-40 overflow-y-auto">
            <div className="p-6">
              {/* Shop Information */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800">
                  {shopDetails.shopName}
                </h2>
                <p className="text-sm text-gray-600">
                  Owner: {shopDetails.ownerName}
                </p>
                <p className="text-sm text-gray-600">
                  Address: {shopDetails.shopAddress}
                </p>
              </div>

              {/* Subscription Status */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800">
                  Subscription
                </h3>
                <p className="text-sm text-gray-600">
                  Plan: <span className="font-medium">{subscription.plan}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Status:{" "}
                  <span
                    className={`font-medium ${
                      subscription.status === "Active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {subscription.status}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  Validity:{" "}
                  <span className="font-medium">{subscription.validity}</span>
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800">
                  Time Remaining
                </h3>
                <div className="flex space-x-2">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {timeRemaining.days}
                    </span>
                    <span className="block text-sm text-gray-600">Days</span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {timeRemaining.hours}
                    </span>
                    <span className="block text-sm text-gray-600">Hours</span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {timeRemaining.minutes}
                    </span>
                    <span className="block text-sm text-gray-600">Minutes</span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {timeRemaining.seconds}
                    </span>
                    <span className="block text-sm text-gray-600">Seconds</span>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <nav>
                <ul className="space-y-4">
                  <li>
                    <button
                      onClick={handleUploadVideo}
                      className="w-full text-left text-gray-700 hover:text-blue-400 hover:bg-blue-50 p-3 rounded-lg transition duration-300"
                    >
                      Upload Video
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleUploadItems}
                      className="w-full text-left text-gray-700 hover:text-blue-400 hover:bg-blue-50 p-3 rounded-lg transition duration-300"
                    >
                      Upload Items
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleManageSubscription}
                      className="w-full text-left text-gray-700 hover:text-blue-400 hover:bg-blue-50 p-3 rounded-lg transition duration-300"
                    >
                      Manage Subscription
                    </button>
                  </li>
                </ul>
              </nav>

              {/* Logout Button */}
              <div className="mt-8">
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-red-600 hover:text-red-700 hover:bg-red-50 p-3 rounded-lg transition duration-300"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 ml-64">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-300 to-indigo-400 mt-20 rounded-xl p-8 text-white">
              <h1 className="text-4xl font-bold">
                Welcome, {shopDetails.shopName}!
              </h1>
              <p className="mt-2 text-lg">
                Manage your shop, upload videos, and track your subscription.
              </p>
            </div>

            {/* Subscription Details Card */}
            <div className="mt-8 bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800">
                  Subscription Details
                </h2>
                <div className="mt-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Plan:</span>
                    <span className="font-medium text-gray-800">
                      {subscription.plan}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status:</span>
                    <span
                      className={`font-medium ${
                        subscription.status === "Active"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {subscription.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Validity:</span>
                    <span className="font-medium text-gray-800">
                      {subscription.validity}
                    </span>
                  </div>
                  <div className="pt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${progressWidth}%` }} // Dynamic width
                      ></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {timeRemaining.days} days remaining
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upload Video and Items Section */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800">
                    Upload Video
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Showcase your shop and products with a professionally
                    recorded video.
                  </p>
                  <button
                    onClick={handleUploadVideo}
                    className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
                  >
                    Upload Video
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800">
                    Upload Items
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Add new products or services to your shop inventory.
                  </p>
                  <button
                    onClick={handleUploadItems}
                    className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
                  >
                    Upload Items
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default SellerDashboard;






