import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Otpverify = () => {
  axios.defaults.withCredentials = true;
  const { backendUrl, setIsRegistered, setUserData, getuserData, userData } =
    useContext(AppContext);
  const navigate = useNavigate();

  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);

  const handleInput = (e, index) => {
    const nextInput = inputRefs.current[index + 1];
    if (e.target.value.length > 0 && nextInput) {
      nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (index > 0 && e.target.value === "") {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text").slice(0, 6);
    if (pastedData.length === 6) {
      inputRefs.current.forEach((input, index) => {
        input.value = pastedData[index] || "";
      });
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const otp = inputRefs.current.map((input) => input.value).join("");

      if (otp.length !== 6) {
        toast.error("Please enter a valid 6-digit OTP.");
        setLoading(false);
        return;
      }

      const { data } = await axios.post(
        `${backendUrl}/api/auth/verify-otp`,
        { otp },
        { headers: { "Content-Type": "application/json" } }
      );

      if (data.success) {
        toast.success(data.message);
        setUserData(data.user);
        getuserData();
        navigate("/");
      } else {
        toast.error(data.message || "Invalid OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error.response?.data || error);
      toast.error(error.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={onSubmitHandler}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-semibold text-center mb-6 text-blue-500">
          Enter OTP
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Please enter the 6-digit OTP sent to your email.
        </p>
        <div className="flex justify-center gap-2 mb-6" onPaste={handlePaste}>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <input
                type="text"
                maxLength="1"
                key={index}
                required
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                ref={(el) => (inputRefs.current[index] = el)}
                onInput={(e) => handleInput(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 text-white font-medium rounded-lg transition-all duration-200 ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
    </div>
  );
};

export default Otpverify;
