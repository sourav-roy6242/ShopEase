import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Services", url: "/services" },
        { name: "Blog", url: "/blog" },
        { name: "Careers", url: "/careers" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", url: "/contact" },
        { name: "FAQ", url: "/faq" },
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Terms of Service", url: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaLinkedin />, url: "#" },
    { icon: <FaYoutube />, url: "#" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white backdrop-blur-lg border-t border-black mt-24"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              ShopEase
            </h3>
            <p className="text-black text-sm">
              Revolutionizing e-commerce through innovation and customer-centric solutions
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="text-black hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-cyan-400">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.url}
                      className="text-black hover:text-cyan-400 transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-cyan-400">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarker className="text-cyan-400" />
                <span className="text-black text-sm">123 Business Street, New Delhi</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-cyan-400" />
                <span className="text-black text-sm">support@shopease.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-cyan-400" />
                <span className="text-black text-sm">(987) 654-3210</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold text-black mb-4">
              Subscribe to Our Newsletter
            </h4>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/10 backdrop-blur-sm border border-cyan-400 rounded-lg py-3 px-4 text-black placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-12 mr-4">
          <p className="text-black text-sm">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;