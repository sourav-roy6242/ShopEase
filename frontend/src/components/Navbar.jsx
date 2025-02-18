import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedIn } =
    useContext(AppContext);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(
        backendUrl + "/api/auth/send-verify-otp"
      );

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
      data.success && setIsLoggedIn(false);
      data.success && setUserData(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (


    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-12 absolute top-0">
      <div className="flex items-center gap-12">
        <h2 className="text-2xl font-bold w-28 sm:w-32">ShopEase</h2>
        <ul className="flex ml-110 font-bold text-2xl list-none gap-10">
          <li className="hover:text-indigo-400 cursor-pointer transition duration-300">
            Home
          </li>
          <li className="hover:text-indigo-400 cursor-pointer transition duration-300">
            About Us
          </li>
          <li className="hover:text-indigo-400 cursor-pointer transition duration-300">
            Contact Us
          </li>
        </ul>
      </div>

      {userData ? (
        <div className="w-8 h-8 flex justify-center items-center bg-black rounded-full text-white relative group">
          {userData.name[0].toUpperCase()}
          <div className="absolute hidden group-hover:block z-10 text-black pt-10 top-0 right-0  rounded-full">
            <ul className="list-none m-0 p-2 bg-gray-100 text-sm">
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
                className="py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/userRegister")}
          className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2
      text-gray-800 hover:bg-gray-100 transition-all "
        >
          Login / Sign Up
        </button>
      )}
    </div>
  );
};

export default Navbar;
