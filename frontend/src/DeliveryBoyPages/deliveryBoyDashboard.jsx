// import React, { useState } from "react";
// import { FaBox, FaMapMarkerAlt, FaCheckCircle, FaMoneyBillWave, FaClock, FaShieldAlt, FaMotorcycle } from "react-icons/fa";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// export default function DeliveryBoyHome() {
//   const generateOrderId = () => Math.floor(100000 + Math.random() * 900000); // Unique 6-digit order ID

//   const [orders, setOrders] = useState([
//     { id: generateOrderId(), customer: "John Doe", address: "123 Main St", status: "Not Accepted", otp: "1234", enteredOtp: "" },
//     { id: generateOrderId(), customer: "Jane Smith", address: "456 Elm St", status: "Not Accepted", otp: "5678", enteredOtp: "" },
//   ]);

//   const handleAccept = (id) => {
//     setOrders(orders.map(order => order.id === id ? { ...order, status: "Pending" } : order));
//   };

//   const handlePickUp = (id) => {
//     setOrders(orders.map(order => order.id === id ? { ...order, status: "Picked Up" } : order));
//   };

//   const handleDeliver = (id) => {
//     setOrders(orders.map(order => order.id === id ? { ...order, status: "Delivered" } : order));
//   };

//   const handleOtpChange = (id, value) => {
//     setOrders(orders.map(order => order.id === id ? { ...order, enteredOtp: value } : order));
//   };

//   return (
//     <div>
//       <Navbar />
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 mt-20">
//       {/* Header Section */}
//       <div className="bg-white shadow-lg rounded-2xl p-8 text-center mb-6 w-full max-w-4xl">
//         <h1 className="text-4xl font-extrabold text-gray-800">Delivery Dashboard</h1>
//         <p className="text-lg text-gray-600 mt-2">Manage your orders efficiently and maximize your earnings!</p>
//       </div>

//       {/* Orders Section */}
//       <div className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-6">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Active Orders</h2>
//         {orders.map((order) => (
//           <div key={order.id} className="p-4 mb-3 bg-gray-50 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between">
//             <div>
//               <h3 className="text-lg font-semibold flex items-center gap-2">
//                 <FaBox className="text-blue-500" /> Order #{order.id}
//               </h3>
//               <p className="text-gray-600 flex items-center gap-2">
//                 <FaMapMarkerAlt className="text-red-500" /> {order.address}
//               </p>
//               <p className="text-sm text-gray-500">Customer: {order.customer}</p>
//             </div>
//             <div className="mt-2 md:mt-0">
//               <p className={`text-sm font-medium ${order.status === "Picked Up" ? "text-yellow-600" : order.status === "Delivered" ? "text-green-600" : "text-red-600"}`}>
//                 {order.status}
//               </p>
//               {order.status === "Not Accepted" && (
//                 <button 
//                   onClick={() => handleAccept(order.id)}
//                   className="mt-2 w-full md:w-auto bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-all">
//                   Accept Order
//                 </button>
//               )}
//               {order.status === "Pending" && (
//                 <button 
//                   onClick={() => handlePickUp(order.id)}
//                   className="mt-2 w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all">
//                   Picked Up
//                 </button>
//               )}
//               {order.status === "Picked Up" && (
//                 <div className="mt-2">
//                   <input 
//                     type="text" 
//                     placeholder="Enter OTP"
//                     value={order.enteredOtp}
//                     onChange={(e) => handleOtpChange(order.id, e.target.value)}
//                     className="px-3 py-2 border rounded-md text-gray-700"
//                   />
//                   <button 
//                     onClick={() => handleDeliver(order.id)}
//                     disabled={order.enteredOtp !== order.otp}
//                     className={`mt-2 w-full md:w-auto px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${order.enteredOtp === order.otp ? "bg-green-500 text-white hover:bg-green-700" : "bg-gray-400 text-gray-600 cursor-not-allowed"}`}>
//                     <FaCheckCircle /> Mark as Delivered
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Benefits Section */}
//       <div className="grid md:grid-cols-2 gap-6 mt-8 w-full max-w-4xl">
//         <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4">
//           <FaMoneyBillWave className="text-green-500 text-4xl" />
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800">High Earnings</h2>
//             <p className="text-gray-600 text-md">Earn competitive payouts with weekly deposits.</p>
//           </div>
//         </div>

//         <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4">
//           <FaClock className="text-blue-500 text-4xl" />
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800">Flexible Hours</h2>
//             <p className="text-gray-600 text-md">Work at your own convenience with no fixed shifts.</p>
//           </div>
//         </div>

//         <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4">
//           <FaMotorcycle className="text-red-500 text-4xl" />
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800">Exclusive Incentives</h2>
//             <p className="text-gray-600 text-md">Get extra bonuses for peak hour deliveries.</p>
//           </div>
//         </div>

//         <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4">
//           <FaShieldAlt className="text-yellow-500 text-4xl" />
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800">Safety & Support</h2>
//             <p className="text-gray-600 text-md">We ensure your safety with insurance coverage.</p>
//           </div>
//         </div>
//       </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }



import React, { useState } from "react";
import { FaBox, FaMapMarkerAlt, FaCheckCircle, FaMoneyBillWave, FaClock, FaShieldAlt, FaMotorcycle, FaUser, FaRoute, FaChartLine, FaBell } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";

export default function DeliveryBoyHome() {
  const generateOrderId = () => Math.floor(100000 + Math.random() * 900000);
  
  const [orders, setOrders] = useState([
    { 
      id: generateOrderId(), 
      customer: "John Doe", 
      address: "123 Main St, Apt 4B, New York", 
      status: "Not Accepted", 
      otp: "1234", 
      enteredOtp: "",
      items: 3,
      distance: "2.4 km",
      time: "15 min",
      value: "$24.50"
    },
    { 
      id: generateOrderId(), 
      customer: "Jane Smith", 
      address: "456 Elm St, Floor 5, Brooklyn", 
      status: "Not Accepted", 
      otp: "5678", 
      enteredOtp: "",
      items: 5,
      distance: "3.1 km",
      time: "20 min",
      value: "$38.75"
    },
  ]);
  
  const [activeTab, setActiveTab] = useState('active');
  const [completedOrders] = useState(42);
  const [earnings] = useState(1245.75);
  const [rating] = useState(4.8);
  const [notifications] = useState(3);

  const handleAccept = (id) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: "Pending" } : order));
  };

  const handlePickUp = (id) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: "Picked Up" } : order));
  };

  const handleDeliver = (id) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: "Delivered" } : order));
  };

  const handleOtpChange = (id, value) => {
    setOrders(orders.map(order => order.id === id ? { ...order, enteredOtp: value } : order));
  };

  // Stats for dashboard
  const stats = [
    { label: "Completed Orders", value: completedOrders, icon: <FaCheckCircle />, color: "bg-green-100 text-green-700" },
    { label: "Total Earnings", value: `$${earnings.toFixed(2)}`, icon: <FaMoneyBillWave />, color: "bg-blue-100 text-blue-700" },
    { label: "Avg. Rating", value: rating, icon: <FaChartLine />, color: "bg-yellow-100 text-yellow-700" },
    { label: "Active Orders", value: orders.filter(o => o.status !== "Delivered").length, icon: <FaRoute />, color: "bg-purple-100 text-purple-700" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <GiDeliveryDrone className="text-3xl" />
            <h1 className="text-2xl font-bold">SwiftDrop</h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <FaBell className="text-xl cursor-pointer" />
              {notifications > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {notifications}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
              <span className="font-medium">Alex Rider</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 flex items-center">
              <div className={`rounded-full p-3 mr-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              {/* Tab Navigation */}
              <div className="flex border-b">
                <button 
                  className={`py-4 px-6 font-medium ${activeTab === 'active' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('active')}
                >
                  Active Orders
                </button>
                <button 
                  className={`py-4 px-6 font-medium ${activeTab === 'completed' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('completed')}
                >
                  Completed Orders
                </button>
              </div>
              
              {/* Orders Section */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Active Orders</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-xl overflow-hidden">
                      {/* Order Header */}
                      <div className="bg-gray-50 px-6 py-4 border-b flex justify-between items-center">
                        <div className="flex items-center">
                          <FaBox className="text-indigo-600 mr-2" />
                          <h3 className="font-bold text-lg">Order #{order.id}</h3>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === "Not Accepted" ? "bg-red-100 text-red-800" : 
                          order.status === "Pending" ? "bg-yellow-100 text-yellow-800" : 
                          order.status === "Picked Up" ? "bg-blue-100 text-blue-800" : 
                          "bg-green-100 text-green-800"
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      
                      {/* Order Details */}
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <div className="flex items-start mb-4">
                              <FaUser className="text-gray-500 mt-1 mr-3" />
                              <div>
                                <p className="text-gray-500 text-sm">Customer</p>
                                <p className="font-medium">{order.customer}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <FaMapMarkerAlt className="text-gray-500 mt-1 mr-3" />
                              <div>
                                <p className="text-gray-500 text-sm">Delivery Address</p>
                                <p className="font-medium">{order.address}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-gray-500 text-sm">Items</p>
                                <p className="font-medium">{order.items}</p>
                              </div>
                              <div>
                                <p className="text-gray-500 text-sm">Distance</p>
                                <p className="font-medium">{order.distance}</p>
                              </div>
                              <div>
                                <p className="text-gray-500 text-sm">Est. Time</p>
                                <p className="font-medium">{order.time}</p>
                              </div>
                              <div>
                                <p className="text-gray-500 text-sm">Order Value</p>
                                <p className="font-medium">{order.value}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4">
                          {order.status === "Not Accepted" && (
                            <button 
                              onClick={() => handleAccept(order.id)}
                              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all shadow-md hover:shadow-lg"
                            >
                              Accept Order
                            </button>
                          )}
                          
                          {order.status === "Pending" && (
                            <button 
                              onClick={() => handlePickUp(order.id)}
                              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all shadow-md hover:shadow-lg"
                            >
                              Confirm Pickup
                            </button>
                          )}
                          
                          {order.status === "Picked Up" && (
                            <div className="flex flex-col md:flex-row md:space-x-4 w-full">
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-700 mb-2">Enter OTP to Deliver</p>
                                <input 
                                  type="text" 
                                  placeholder="Enter 4-digit OTP"
                                  value={order.enteredOtp}
                                  onChange={(e) => handleOtpChange(order.id, e.target.value)}
                                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                  maxLength={4}
                                />
                              </div>
                              <button 
                                onClick={() => handleDeliver(order.id)}
                                disabled={order.enteredOtp !== order.otp}
                                className={`mt-4 md:mt-0 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all shadow-md hover:shadow-lg ${
                                  order.enteredOtp === order.otp 
                                    ? "bg-green-600 hover:bg-green-700 text-white" 
                                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                                }`}
                              >
                                <FaCheckCircle className="mr-2" /> Mark as Delivered
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4">Delivery Benefits</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                      <FaMoneyBillWave className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold">High Earnings</h3>
                      <p className="text-indigo-100">Earn competitive payouts with weekly deposits and bonuses</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                      <FaClock className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold">Flexible Hours</h3>
                      <p className="text-indigo-100">Work when you want with no fixed schedules or commitments</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                      <FaMotorcycle className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold">Exclusive Incentives</h3>
                      <p className="text-indigo-100">Extra bonuses for peak hour deliveries and customer ratings</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                      <FaShieldAlt className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold">Safety First</h3>
                      <p className="text-indigo-100">Insurance coverage and 24/7 support for your safety</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Today's Performance</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Order Completion</span>
                      <span className="font-bold">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">On-Time Delivery</span>
                      <span className="font-bold">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Customer Rating</span>
                      <span className="font-bold">4.8/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{width: '96%'}}></div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition-all">
                      View Detailed Stats
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Delivery Progress</h2>
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  <div className="flex items-start relative mb-8">
                    <div className="bg-indigo-100 text-indigo-700 rounded-full p-2 mr-4 z-10">
                      <FaBox />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Order Accepted</h3>
                      <p className="text-gray-600 text-sm">You've accepted the order and are heading to the restaurant</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start relative mb-8">
                    <div className="bg-indigo-100 text-indigo-700 rounded-full p-2 mr-4 z-10">
                      <FaMotorcycle />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Order Picked Up</h3>
                      <p className="text-gray-600 text-sm">You've picked up the order and are on the way to the customer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start relative">
                    <div className="bg-gray-200 text-gray-500 rounded-full p-2 mr-4 z-10">
                      <FaCheckCircle />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Order Delivered</h3>
                      <p className="text-gray-500 text-sm">Deliver the order and complete the process</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold">Earnings Summary</h2>
                  <p className="text-cyan-100">Today's performance</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-full p-2">
                  <FaMoneyBillWave className="text-xl" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Completed Orders</span>
                  <span className="font-bold">7</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Base Pay</span>
                  <span className="font-bold">$42.50</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Tips</span>
                  <span className="font-bold">$18.75</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Bonuses</span>
                  <span className="font-bold">$12.00</span>
                </div>
                
                <div className="pt-4 border-t border-cyan-400 mt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Earnings</span>
                    <span>$73.25</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-white text-indigo-600 py-3 rounded-lg font-bold transition-all hover:bg-opacity-90">
                Withdraw Earnings
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <GiDeliveryDrone className="text-2xl mr-2" />
              <h3 className="text-xl font-bold">SwiftDrop Delivery</h3>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2023 SwiftDrop Delivery. All rights reserved.</p>
              <p className="text-gray-500 text-sm mt-1">24/7 Support: support@swiftdrop.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}