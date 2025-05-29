// import React from "react";
// import Navbar from "../components/Navbar";
// import { useNavigate } from "react-router-dom";
// import {
//   FaMotorcycle,
//   FaMoneyBillAlt,
//   FaClock,
//   FaHandshake,
//   FaChartLine,
// } from "react-icons/fa"; // Icons for opportunities
// import { GiCheckMark } from "react-icons/gi"; // Icons for terms and conditions

// const DeliveryBoyHome = () => {
//   const navigate = useNavigate();
//   return (
//   <div>
//     <Navbar />

//     <div className="min-h-screen mt-20 bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
//       {/* Header Section */}
//       <header className="text-center mb-16">
//         <h1 className="text-5xl font-bold text-gray-800 mb-4">
//           Welcome to Our <span className="text-blue-600">Delivery Team</span>
//         </h1>
//         <p className="text-xl text-gray-600">
//           Join us and start earning today!
//         </p>
//       </header>

//       {/* Opportunities Section */}
//       <section className="bg-white p-8 rounded-2xl shadow-lg mb-12">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//           Opportunities Provided
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Opportunity 1 */}
//           <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl text-center">
//             <FaMotorcycle className="text-5xl text-blue-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Flexible Hours
//             </h3>
//             <p className="text-gray-600">Work whenever it suits you.</p>
//           </div>
//           {/* Opportunity 2 */}
//           <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl text-center">
//             <FaMoneyBillAlt className="text-5xl text-blue-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Weekly Payments
//             </h3>
//             <p className="text-gray-600">Get paid every week without delays.</p>
//           </div>
//           {/* Opportunity 3 */}
//           <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl text-center">
//             <FaClock className="text-5xl text-blue-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Incentives
//             </h3>
//             <p className="text-gray-600">Earn extra for more deliveries.</p>
//           </div>
//           {/* Opportunity 4 */}
//           <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl text-center">
//             <FaHandshake className="text-5xl text-blue-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Supportive Team
//             </h3>
//             <p className="text-gray-600">We’re here to help you succeed.</p>
//           </div>
//           {/* Opportunity 5 */}
//           <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl text-center">
//             <FaChartLine className="text-5xl text-blue-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Growth Opportunities
//             </h3>
//             <p className="text-gray-600">Climb the ladder with us.</p>
//           </div>
//         </div>
//       </section>

//       {/* Terms and Conditions Section */}
//       <section className="bg-white p-8 rounded-2xl shadow-lg mb-12">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//           Terms and Conditions
//         </h2>
//         <div className="space-y-6">
//           {/* Term 1 */}
//           <div className="flex items-start space-x-4">
//             <GiCheckMark className="text-2xl text-green-500 mt-1" />
//             <p className="text-gray-700">
//               You must have a valid ID and vehicle.
//             </p>
//           </div>
//           {/* Term 2 */}
//           <div className="flex items-start space-x-4">
//             <GiCheckMark className="text-2xl text-green-500 mt-1" />
//             <p className="text-gray-700">
//               Deliveries must be completed on time.
//             </p>
//           </div>
//           {/* Term 3 */}
//           <div className="flex items-start space-x-4">
//             <GiCheckMark className="text-2xl text-green-500 mt-1" />
//             <p className="text-gray-700">
//               You are responsible for your own safety and vehicle maintenance.
//             </p>
//           </div>
//           {/* Term 4 */}
//           <div className="flex items-start space-x-4">
//             <GiCheckMark className="text-2xl text-green-500 mt-1" />
//             <p className="text-gray-700">
//               Any misconduct will result in termination.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Earnings Section */}
//       <section className="bg-white p-8 rounded-2xl shadow-lg mb-12">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//           Earnings per Delivery
//         </h2>
//         <div className="text-center">
//           <p className="text-4xl font-bold text-blue-600 mb-4">₹50 - ₹100</p>
//           <p className="text-gray-700">
//             per delivery, depending on distance and order size.
//           </p>
//           <p className="text-gray-700 mt-2">
//             Additional incentives for completing more than 20 deliveries in a
//             week.
//           </p>
//         </div>
//       </section>

//       {/* Register Button */}
//       <section className="text-center">
//         <button
//           className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
//           onClick={() => navigate("/deliveryregister")}
//         >
//           Register Now
//         </button>
//       </section>

//       {/* Footer Section */}
//       <footer className="mt-16 text-center text-gray-600">
//         <p>Contact us: support@deliveryapp.com | +91 9876543210</p>
//         <p>© 2024 Delivery App. All rights reserved.</p>
//       </footer>
//     </div>
//     </div>
//   );
// };

// export default DeliveryBoyHome;






import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMotorcycle,
  FaMoneyBillAlt,
  FaClock,
  FaHandshake,
  FaChartLine,
  FaCheck,
  FaMapMarkerAlt,
  FaWallet,
  FaShieldAlt
} from "react-icons/fa";

const DeliveryBoyHome = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Modern Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="bg-blue-600 text-white font-bold text-xl p-2 rounded-lg">
                  DELIVERY<span className="text-yellow-400">PRO</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#opportunities" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Opportunities</a>
              <a href="#terms" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Terms</a>
              <a href="#earnings" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Earnings</a>
            </div>
            <div className="flex items-center">
              <button 
                onClick={() => navigate("/deliveryregister")}
                className="ml-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-2 rounded-full font-medium text-sm hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                Become a Partner
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Earn <span className="text-blue-600">₹15,000 - ₹35,000</span> per month as a Delivery Partner
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join India's fastest growing delivery network. Flexible hours, great earnings, and growth opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate("/deliveryregister")}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Earning Today
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="bg-blue-600 rounded-2xl p-6 transform rotate-3">
              <div className="bg-white rounded-2xl p-6 transform -rotate-3 shadow-2xl">
                <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Current Delivery</p>
                    <p className="font-semibold">Pizza Hut to MG Road</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-gray-500 text-sm">Estimated Earnings</p>
                    <p className="text-2xl font-bold">₹85</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Distance</p>
                    <p className="text-xl font-bold">3.2 km</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-4 text-white">
                  <div className="flex justify-between mb-2">
                    <span>Pickup</span>
                    <span>Delivery</span>
                  </div>
                  <div className="h-2 bg-blue-400 rounded-full mb-3">
                    <div className="h-2 bg-yellow-400 rounded-full w-3/4"></div>
                  </div>
                  <div className="flex justify-between">
                    <span>12:15 PM</span>
                    <span>12:35 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-full w-24 h-24 flex items-center justify-center shadow-xl">
              <FaWallet className="text-white text-3xl" />
              <span className="absolute text-white font-bold text-xs">+₹150</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold">50,000+</p>
              <p className="text-blue-200 mt-2">Delivery Partners</p>
            </div>
            <div>
              <p className="text-4xl font-bold">₹200Cr+</p>
              <p className="text-blue-200 mt-2">Earned Monthly</p>
            </div>
            <div>
              <p className="text-4xl font-bold">98%</p>
              <p className="text-blue-200 mt-2">On-time Delivery</p>
            </div>
            <div>
              <p className="text-4xl font-bold">24/7</p>
              <p className="text-blue-200 mt-2">Partner Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Opportunities Section */}
      <section id="opportunities" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the best opportunities for delivery partners to grow and earn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaMotorcycle className="text-3xl" />, title: "Flexible Hours", desc: "Work whenever it suits you" },
              { icon: <FaMoneyBillAlt className="text-3xl" />, title: "Weekly Payments", desc: "Get paid every week without delays" },
              { icon: <FaClock className="text-3xl" />, title: "Performance Incentives", desc: "Earn extra for more deliveries" },
              { icon: <FaHandshake className="text-3xl" />, title: "Supportive Team", desc: "We're here to help you succeed" },
              { icon: <FaChartLine className="text-3xl" />, title: "Growth Opportunities", desc: "Climb the ladder with us" },
              { icon: <FaShieldAlt className="text-3xl" />, title: "Insurance Coverage", desc: "Accident insurance for all partners" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Section */}
      <section id="earnings" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Earnings Potential</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Our delivery partners earn competitive rates with opportunities for bonuses and incentives based on performance.
              </p>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">Base Earnings per Delivery</h3>
                  <span className="text-2xl font-bold text-blue-600">₹50 - ₹100</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Based on distance and order size. Minimum guarantee per delivery.
                </p>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-blue-500 w-3/4"></div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">Weekly Incentives</h3>
                  <span className="text-2xl font-bold text-blue-600">Up to ₹5,000</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <p className="text-sm text-gray-600">20+ deliveries</p>
                    <p className="font-bold">₹500</p>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-3 text-center">
                    <p className="text-sm text-gray-600">40+ deliveries</p>
                    <p className="font-bold">₹1,500</p>
                  </div>
                  <div className="bg-blue-600 text-white rounded-lg p-3 text-center">
                    <p className="text-sm">60+ deliveries</p>
                    <p className="font-bold">₹3,000</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Plus ₹50 bonus per delivery after 60 deliveries in a week.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-bold text-xl mb-6 text-center">Estimated Monthly Earnings</h3>
              <div className="space-y-6">
                {[
                  { level: "Standard", deliveries: "15-20/day", earning: "₹18,000 - ₹25,000" },
                  { level: "Active", deliveries: "20-30/day", earning: "₹25,000 - ₹35,000" },
                  { level: "Top Performer", deliveries: "30+ deliveries/day", earning: "₹35,000 - ₹50,000" }
                ].map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
                    <div className="flex justify-between items-center mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        index === 0 ? "bg-blue-100 text-blue-800" : 
                        index === 1 ? "bg-purple-100 text-purple-800" : 
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {item.level}
                      </span>
                      <span className="font-bold text-lg">{item.earning}</span>
                    </div>
                    <p className="text-gray-600">{item.deliveries}</p>
                    <div className="mt-3 flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            index === 0 ? "bg-blue-500 w-1/3" : 
                            index === 1 ? "bg-purple-500 w-2/3" : 
                            "bg-yellow-500 w-full"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button 
                  onClick={() => navigate("/deliveryregister")}
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-xl font-bold text-md hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Join Now to Start Earning
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section id="terms" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Requirements & Terms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple requirements to get started as a delivery partner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <FaCheck className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Age Requirement</h3>
              <p className="text-gray-600">Must be at least 18 years old</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <FaCheck className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Valid ID</h3>
              <p className="text-gray-600">Government-issued ID required</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <FaCheck className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Vehicle</h3>
              <p className="text-gray-600">Two-wheeler with valid documents</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <FaCheck className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Smartphone</h3>
              <p className="text-gray-600">Android or iOS with internet</p>
            </div>
          </div>
          
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Key Terms & Conditions</h3>
            <ul className="space-y-4">
              {[
                "Deliveries must be completed within the estimated time window",
                "Partners are responsible for their own safety and vehicle maintenance",
                "Professional conduct with customers is required at all times",
                "Any misconduct may result in suspension or termination",
                "Weekly payments processed every Monday",
                "All incentives based on completed deliveries only"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Earning?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join thousands of delivery partners who are earning good money with flexible schedules.
          </p>
          <button 
            onClick={() => navigate("/deliveryregister")}
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Register Now - It's Free!
          </button>
          <p className="text-blue-200 mt-6">No registration fees • Start in 24 hours</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="bg-blue-600 text-white font-bold text-xl p-2 rounded-lg inline-block mb-4">
                DELIVERY<span className="text-yellow-400">PRO</span>
              </div>
              <p className="text-gray-400 mb-4">
                India's leading delivery partner network connecting businesses with reliable delivery partners.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Partners</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">How it Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Earnings Calculator</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Partner Resources</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Safety Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Businesses</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Partner with Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Enterprise Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API Integration</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 9876543210</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>support@deliverypro.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Bangalore, Mumbai, Delhi, Hyderabad</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2024 DeliveryPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DeliveryBoyHome;