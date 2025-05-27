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
    // <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-black">
      <div className="min-h-screen bg-white text-black">
  
      
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
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover our comprehensive business solutions designed to elevate your digital presence and drive growth.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid   md:grid-cols-3 gap-8 mb-20">
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
              className="bg-gradient-to-br from-cyan-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              {card.icon}
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.content}</p>
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
          className="bg-gray-500 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400 hover:border-cyan-400/50 transition-all"
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
                  background: 'rgba(0,0,0,0)',
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