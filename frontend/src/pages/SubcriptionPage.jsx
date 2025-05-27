import { motion } from "framer-motion";
import { FaCrown, FaCheck, FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import payment from "./PaymentPage.jsx"

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const plans = [
    { 
      duration: "1 Month", 
      price: "₹999", 
      highlight: false,
      features: ["Basic Features", "24/7 Support", "5GB Storage", "Analytics Dashboard", "Customization"]
    },
    { 
      duration: "3 Months", 
      price: "₹2499", 
      highlight: false,
      features: ["All Basic Features", "10GB Storage", "Advanced Analytics", "Priority Support,", "Customization"]
    },
    { 
      duration: "6 Months", 
      price: "₹4999", 
      highlight: true,
      features: ["All Pro Features", "Unlimited Storage", "Team Access", "Premium Support", "Custom Domain"]
    },
    { 
      duration: "12 Months", 
      price: "₹9999", 
      highlight: false,
      features: ["All Premium Features", "Unlimited Users", "White Labeling", "API Access", "Personal Manager"]
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 120 }
    }
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 overflow-hidden">
          <div className="min-h-screen bg-white overflow-hidden">
      
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 mb-6">
            Power Up Your Experience
          </h1>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            Choose the perfect plan that fits your needs and unlock premium features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`relative group p-8 rounded-3xl backdrop-blur-sm border bg-gradient-to-br from-blue-500/40 to-indigo-500/20 ${
                plan.highlight 
                  ? "bg-gradient-to-br from-purple-600/40 to-indigo-600/30 border-cyan-400/50 shadow-2xl shadow-purple-500/20"
                  : "bg-white/5 border-white/10 hover:border-cyan-400/30"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full text-sm flex items-center gap-2">
                  <FaCrown className="text-yellow-300" />
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {plan.duration}
                  </h2>
                  <p className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                    {plan.price}
                  </p>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-black">
                      <FaCheck className="text-cyan-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/payment")}
                  className={`w-full py-4 rounded-xl text-white  font-semibold transition-all bg-gradient-to-br from-purple-400 to-indigo-500  hover:from-cyan-400 hover:to-purple-500   ${
                    plan.highlight
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center border-t border-white/10 pt-12"
        >
          <div className="inline-block bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
            <div className="flex items-center gap-3 text-gray-700">
              <FaRocket className="text-cyan-400 animate-pulse" />
              <span>All plans include 30-day money back guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SubscriptionPage;