import React from "react";
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
import Footer from "../components/footer";

const data = [
  { name: "Below ₹10,000", Subscription: 100 },
  { name: "Above ₹10,000", Subscription: 0 },
];

const BusinessPlan = () => {
  return (
    <div>
      <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-teal-300 text-white p-6 md:p-10">
     
      <h1 className="text-4xl mt-20  text-black drop-shadow-lg md:text-5xl font-bold text-center mb-8">
        Our Business Plan
      </h1>

      {/* Vlog Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Card 1 */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition">
          <FaCrown className="text-4xl text-yellow-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Premium Subscription</h2>
          <p>
            Get exclusive access to advanced features with our premium plan.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition">
          <FaCheckCircle className="text-4xl text-green-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
          <p>
            We provide the best platform for local shops to go digital
            effortlessly.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition">
          <FaVideo className="text-4xl text-red-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Business Insights</h2>
          <p>Watch our vlogs to understand how our system works efficiently.</p>
        </div>
      </div>

      {/* Embedded Vlogs */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <iframe
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/example1"
          title="Business Vlog 1"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/example2"
          title="Business Vlog 2"
          allowFullScreen
        ></iframe>
      </div>

      {/* Graph Section */}
      <div className="bg-white text-gray-800 shadow-lg p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Sales vs. Subscription Benefits
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" stroke="#4A90E2" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="Subscription"
              fill="#4A90E2"
              barSize={70}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
   
    </div>
  );
};

export default BusinessPlan;
