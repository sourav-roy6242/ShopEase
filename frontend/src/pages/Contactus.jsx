// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function ContactUs() {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div>
     
//     <div className="min-h-screen bg-gray-400 text-white">
//       {/* Header Section */}
      

//       {/* Contact Form or Thank You Message */}
//       <div className="flex flex-col items-center justify-center px-6 md:px-20">
//         {submitted ? (
//           <div className="text-center mt-12">
//             <h2 className="text-5xl font-bold">
//               <span className="text-red-500">Thank you</span> for contacting us!
//             </h2>
//             <p className="mt-6 text-gray-300">
//               We have received your message and will contact you shortly. If you
//               need immediate assistance, feel free to call us.
//             </p>
//             <button className="mt-6 border px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
//               Back to home
//             </button>
//           </div>
//         ) : (
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col w-full max-w-lg mt-12"
//           >
//             <label className="mb-2 font-semibold">Your Name</label>
//             <input
//               type="text"
//               required
//               className="p-3 rounded-lg bg-gray-800 focus:outline-none mb-4"
//               placeholder="Enter your name"
//             />

//             <label className="mb-2 font-semibold">Email Address</label>
//             <input
//               type="email"
//               required
//               className="p-3 rounded-lg bg-gray-800 focus:outline-none mb-4"
//               placeholder="Enter your email"
//             />

//             <label className="mb-2 font-semibold">Message</label>
//             <textarea
//               required
//               className="p-3 rounded-lg bg-gray-800 focus:outline-none mb-6"
//               placeholder="Type your message here..."
//               rows="5"
//             ></textarea>

//             <button
//               type="submit"
//               className="w-full bg-red-500 py-3 rounded-lg hover:bg-red-600 transition"
//             >
//               Send Message →
//             </button>
//           </form>
//         )}
//       </div>

//       {/* Footer Section */}
//       <footer className=" p-8 mt-50 bg-gradient-to-r from-black via-gray-900 to-black text-gray-400">
//         <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-xl font-bold">Sight</h3>
//             <p className="mt-2">
//               Get valuable insights straight to your inbox.
//             </p>
//             <div className="relative mt-4">
//               <input
//                 type="email"
//                 placeholder="Your email here"
//                 className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none"
//               />
//               <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
//                 →
//               </button>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold">Pages</h3>
//             <ul className="mt-2 space-y-2">
//               <li>
//                 <a href="#" className="hover:underline">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Service
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Work
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold">Follow Us</h3>
//             <ul className="mt-2 space-y-2">
//               <li>
//                 <a href="#" className="hover:underline">
//                   Behance
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Instagram
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Facebook
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   LinkedIn
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="text-center mt-8">
//           <p>Copyright © 2025 SSA Design Studio</p>
//           <a href="#" className="hover:underline mt-2 inline-block">
//             Back to top
//           </a>
//         </div>
//       </footer>
//       </div>
//     </div>
//   );
// }



import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaPaperPlane, FaMapMarker, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-purple-900 overflow-hidden">
  
      
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

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        {/* Contact Section */}
        <motion.section
          className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-3xl p-12 backdrop-blur-sm border border-cyan-400/20 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400 mb-8">
                Get In Touch
              </h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg py-4 px-6 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg py-4 px-6 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <textarea
                  id="message"
                  required
                  rows="5"
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg py-4 px-6 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-lg transition-all"
              >
                <FaPaperPlane className="text-lg" />
                <span>Send Message</span>
              </motion.button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-8"
            >
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400 mb-8">
                Contact Information
              </h2>
              
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 group"
              >
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 group-hover:border-cyan-400 transition-colors">
                  <FaMapMarker className="text-2xl text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-300">Our Office</h3>
                  <p className="text-gray-400">123 Business Street<br/>New Delhi, India</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 group"
              >
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 group-hover:border-cyan-400 transition-colors">
                  <FaEnvelope className="text-2xl text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-300">Email</h3>
                  <p className="text-gray-400">support@shopease.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 group"
              >
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 group-hover:border-cyan-400 transition-colors">
                  <FaPhone className="text-2xl text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-300">Phone</h3>
                  <p className="text-gray-400">(987) 654-3210</p>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-lg font-semibold text-gray-300 mb-4">Follow Us</h3>
                <div className="flex space-x-6">
                  {[
                    { icon: FaLinkedin, link: "#" },
                    { icon: FaGithub, link: "#" },
                    { icon: FaTwitter, link: "#" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </motion.main>

      <Footer />
    </div>
  );
};

export default ContactUs;