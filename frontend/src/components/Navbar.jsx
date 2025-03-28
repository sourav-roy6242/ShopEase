
// import React, { useContext, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import gsap from "gsap";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { userData, backendUrl, setUserData, setIsLoggedIn } = useContext(AppContext);

//   const logoRef = useRef(null);
//   const navLinksRef = useRef([]);
//   const profileRef = useRef(null);
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     gsap.from(logoRef.current, { x: -100, opacity: 0, duration: 1, ease: "power3.out" });
//     gsap.from(navLinksRef.current, { opacity: 0, y: -20, duration: 0.8, stagger: 0.2, ease: "power3.out" });
//     gsap.from(profileRef.current, { opacity: 0, scale: 0.8, duration: 0.8, ease: "back.out(1.7)" });
//   }, []);

//   const sendVerificationOtp = async () => {
//     try {
//       axios.defaults.withCredentials = true;
//       const { data } = await axios.post(backendUrl + "/api/auth/send-verify-otp");

//       if (data.success) {
//         navigate("/email-verify");
//         toast.success(data.message);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const logout = async () => {
//     try {
//       axios.defaults.withCredentials = true;
//       const { data } = await axios.post(backendUrl + "/api/auth/logout");
//       if (data.success) {
//         setIsLoggedIn(false);
//         setUserData(false);
//         navigate("/");
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="w-full fixed top-0 left-0 z-50">
//       <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-12 bg-transparent backdrop-blur-lg shadow-md">
//         <div className="flex items-center gap-12">
//           {/* Animated Company Name */}
//           <motion.h2
//             ref={logoRef}
//             className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 
//             text-transparent bg-clip-text cursor-pointer"
//             initial={{ color: "#000" }}
//             whileHover={{ color: "#6366F1" }}
//             transition={{ duration: 0.3 }}
//           >
//             {Array.from("ShopEase").map((letter, index) => (
//               <motion.span
//                 key={index}
//                 className="inline-block"
//                 whileHover={{
//                   rotate: [0, 360],
//                   color: "#D946EF",
//                 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//               >
//                 {letter}
//               </motion.span>
//             ))}
//           </motion.h2>
//         </div>

//         {/* Simplified Navigation Links */}
//         <ul className="flex gap-6 sm:gap-10 text-xl font-semibold drop-shadow-sm list-none p-0 m-0">
//           {[
//             { name: "Home", path: "/" },
//             { name: "About Us", path: "/aboutus" },
//             { name: "Contact Us", path: "/contactus" },
//           ].map((item, index) => (
//             <li
//               key={index}
//               ref={(el) => (navLinksRef.current[index] = el)}
//               onClick={() => navigate(item.path)}
//               className="cursor-pointer"
//             >
//               {item.name}
//             </li>
//           ))}
//         </ul>

//         {/* User Avatar with Glow Effect or Login Button */}
//         <div className="flex items-center">
//           {userData ? (
//             <motion.div
//               ref={profileRef}
//               className="w-12 h-12 flex justify-center items-center bg-black text-white font-bold text-lg rounded-full 
//               relative group cursor-pointer shadow-lg animate-glow"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {userData.name[0].toUpperCase()}
//               <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg text-black py-2 px-3 top-12 right-0">
//                 <ul className="list-none text-sm">
//                   {!userData.isAccountVerified && (
//                     <li
//                       onClick={sendVerificationOtp}
//                       className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
//                     >
//                       Verify Email
//                     </li>
//                   )}
//                   <li
//                     onClick={logout}
//                     className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
//                   >
//                     Logout
//                   </li>
//                 </ul>
//               </div>
//             </motion.div>
//           ) : (
//             <motion.button
//               ref={buttonRef}
//               onClick={() => navigate("/userRegister")}
//               className="border border-violet-500 rounded-full px-6 py-2 text-violet-700 hover:bg-orange-300 hover:text-white transition-all"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               Login / Sign Up
//             </motion.button>
//           )}
//         </div>
//       </div>

//       {/* Glow Effect Animation */}
//       <style>
//         {`
//           @keyframes glow {
//             0% {
//               box-shadow: 0 0 10px rgba(255, 165, 0, 0.7);
//             }
//             50% {
//               box-shadow: 0 0 20px rgba(255, 165, 0, 1), 0 0 30px rgba(255, 69, 0, 0.8);
//             }
//             100% {
//               box-shadow: 0 0 10px rgba(255, 165, 0, 0.7);
//             }
//           }

//           .animate-glow {
//             animation: glow 1.5s infinite alternate ease-in-out;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Navbar;


import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import gsap from "gsap";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedIn } = useContext(AppContext);

  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const profileRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.from(logoRef.current, { x: -100, opacity: 0, duration: 1, ease: "power3.out" });
    gsap.from(navLinksRef.current, { opacity: 0, y: -20, duration: 0.8, stagger: 0.2, ease: "power3.out" });
    gsap.from(profileRef.current, { opacity: 0, scale: 0.8, duration: 0.8, ease: "back.out(1.7)" });
  }, []);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/send-verify-otp");

      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      if (data.success) {
        setIsLoggedIn(false);
        setUserData(false);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-12 bg-lightblue backdrop-blur-lg shadow-md">
        <div className="flex items-center gap-12">
          {/* Animated Company Name */}
          <motion.h2
            ref={logoRef}
            className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 
            text-transparent bg-clip-text cursor-pointer"
            initial={{ color: "#000" }}
            whileHover={{ color: "#00C8FF" }}
            transition={{ duration: 0.3 }}
          >
            {Array.from("ShopEase").map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                whileHover={{
                  rotate: [0, 360],
                  color: "#4DFFFF",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        {/* Simplified Navigation Links */}
        <ul className="flex gap-6 sm:gap-10 text-xl font-semibold drop-shadow-sm list-none p-0 m-0">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/aboutus" },
            { name: "Contact Us", path: "/contactus" },
          ].map((item, index) => (
            <li
              key={index}
              ref={(el) => (navLinksRef.current[index] = el)}
              onClick={() => navigate(item.path)}
              className="cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* User Avatar with Blue Glow Effect or Login Button */}
        <div className="flex items-center">
          {userData ? (
            <motion.div
              ref={profileRef}
              className="w-12 h-12 flex justify-center items-center bg-black text-white font-bold text-lg rounded-full 
              relative group cursor-pointer shadow-lg animate-glow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {userData.name[0].toUpperCase()}
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg text-black py-2 px-3 top-12 right-0">
                <ul className="list-none text-sm">
                  {!userData.isAccountVerified && (
                    <li
                      onClick={sendVerificationOtp}
                      className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
                    >
                      Verify Email
                    </li>
                  )}
                  <li
                    onClick={logout}
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </motion.div>
          ) : (
            <motion.button
              ref={buttonRef}
              onClick={() => navigate("/userRegister")}
              className="border border-blue-500 rounded-full px-6 py-2 text-blue-700 hover:bg-cyan-300 hover:text-white transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Login / Sign Up
            </motion.button>
          )}
        </div>
      </div>

      {/* Glow Effect Animation */}
      <style>
        {`
          @keyframes glow {
            0% {
              box-shadow: 0 0 10px rgba(0, 200, 255, 0.7);
            }
            50% {
              box-shadow: 0 0 20px rgba(0, 200, 255, 1), 0 0 30px rgba(77, 255, 255, 0.8);
            }
            100% {
              box-shadow: 0 0 10px rgba(0, 200, 255, 0.7);
            }
          }

          .animate-glow {
            animation: glow 1.5s infinite alternate ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;

