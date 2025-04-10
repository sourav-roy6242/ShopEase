// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { FaChartLine, FaVideo, FaCrown, FaCheckCircle } from "react-icons/fa";
// import Navbar from "../components/Navbar";

// const data = [
//   { name: "Below ₹10,000", Subscription: 100 },
//   { name: "Above ₹10,000", Subscription: 0 },
// ];

// const BusinessPlan = () => {
//   return (
//     <div>
      
//     <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-teal-300 text-white p-6 md:p-10">
     
//       <h1 className="text-4xl mt-20  text-black drop-shadow-lg md:text-5xl font-bold text-center mb-8">
//         Our Business Plan
//       </h1>

//       {/* Vlog Cards */}
//       <div className="grid md:grid-cols-3 gap-8 mb-12">
//         {/* Card 1 */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition">
//           <FaCrown className="text-4xl text-yellow-500 mb-4" />
//           <h2 className="text-2xl font-semibold mb-2">Premium Subscription</h2>
//           <p>
//             Get exclusive access to advanced features with our premium plan.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition">
//           <FaCheckCircle className="text-4xl text-green-500 mb-4" />
//           <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
//           <p>
//             We provide the best platform for local shops to go digital
//             effortlessly.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition">
//           <FaVideo className="text-4xl text-red-500 mb-4" />
//           <h2 className="text-2xl font-semibold mb-2">Business Insights</h2>
//           <p>Watch our vlogs to understand how our system works efficiently.</p>
//         </div>
//       </div>

//       {/* Embedded Vlogs */}
//       <div className="grid md:grid-cols-2 gap-6 mb-12">
//         <iframe
//           className="w-full h-64 rounded-lg shadow-lg"
//           src="https://www.youtube.com/embed/example1"
//           title="Business Vlog 1"
//           allowFullScreen
//         ></iframe>
//         <iframe
//           className="w-full h-64 rounded-lg shadow-lg"
//           src="https://www.youtube.com/embed/example2"
//           title="Business Vlog 2"
//           allowFullScreen
//         ></iframe>
//       </div>

//       {/* Graph Section */}
//       <div className="bg-white text-gray-800 shadow-lg p-8 rounded-lg">
//         <h2 className="text-2xl font-semibold text-center mb-4">
//           Sales vs. Subscription Benefits
//         </h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart
//             data={data}
//             margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//           >
//             <XAxis dataKey="name" stroke="#4A90E2" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar
//               dataKey="Subscription"
//               fill="#4A90E2"
//               barSize={70}
//               radius={[10, 10, 0, 0]}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
   
//     </div>
//   );
// };

// export default BusinessPlan;




import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaChartLine, FaVideo, FaCrown, FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";

const data = [
  { name: "Below ₹10,000", Subscription: 100 },
  { name: "Above ₹10,000", Subscription: 0 },
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const chartVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const BusinessPlan = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white">
  
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-600"
          >
            Transform Your Business
          </motion.h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Discover our comprehensive business solutions designed to elevate your digital presence and drive growth.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[{
            icon: <FaCrown className="text-5xl mb-4 text-yellow-400" />,
            title: "Premium Plan",
            content: "Unlock advanced features with our exclusive premium subscription"
          }, {
            icon: <FaCheckCircle className="text-5xl mb-4 text-emerald-400" />,
            title: "Why Choose Us?",
            content: "Your complete digital transformation partner"
          }, {
            icon: <FaVideo className="text-5xl mb-4 text-rose-400" />,
            title: "Insights Hub",
            content: "Expert videos & resources to maximize your potential"
          }].map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              {card.icon}
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-300">{card.content}</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 cursor-pointer"
              >
                Learn More
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <div className="relative rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="absolute inset-0 bg-cyan-500/20 animate-pulse" />
            <iframe
              className="w-full h-96 rounded-2xl relative z-10"
              src="https://www.youtube.com/embed/example1"
              title="Business Vlog 1"
              allowFullScreen
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="absolute inset-0 bg-purple-500/20 animate-pulse" />
            <iframe
              className="w-full h-96 rounded-2xl relative z-10"
              src="https://www.youtube.com/embed/example2"
              title="Business Vlog 2"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Chart Section */}
        <motion.div
          variants={chartVariants}
          initial="hidden"
          whileInView="visible"
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-600">
            Subscription Analytics
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                dataKey="name"
                tick={{ fill: '#fff' }}
                axisLine={{ stroke: '#ffffff50' }}
              />
              <YAxis
                tick={{ fill: '#fff' }}
                axisLine={{ stroke: '#ffffff50' }}
              />
              <Tooltip
                contentStyle={{
                  background: 'rgba(0,0,0,0.7)',
                  border: 'none',
                  borderRadius: '8px',
                  backdropFilter: 'blur(5px)'
                }}
              />
              <Legend />
              <Bar
                dataKey="Subscription"
                fill="#22d3ee"
                radius={[15, 15, 0, 0]}
                animationBegin={100}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </div>
  );
};

export default BusinessPlan;