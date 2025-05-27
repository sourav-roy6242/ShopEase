// import React, { useState } from "react";
// import { FaCreditCard, FaUniversity, FaMobileAlt } from "react-icons/fa";

// const PaymentPage = () => {
//   const [paymentMethod, setPaymentMethod] = useState("card");

//   const renderForm = () => {
//     switch (paymentMethod) {
//       case "card":
//         return (
//           <div className="space-y-4">
//             <input
//               type="text"
//               placeholder="Card Number"
//               className="input-style"
//             />
//             <div className="flex gap-4">
//               <input
//                 type="text"
//                 placeholder="MM/YY"
//                 className="input-style w-1/2"
//               />
//               <input
//                 type="text"
//                 placeholder="CVV"
//                 className="input-style w-1/2"
//               />
//             </div>
//             <input
//               type="text"
//               placeholder="Cardholder Name"
//               className="input-style"
//             />
//           </div>
//         );
//       case "upi":
//         return (
//           <div className="space-y-4">
//             <input
//               type="text"
//               placeholder="Enter your UPI ID"
//               className="input-style"
//             />
//           </div>
//         );
//       case "netbanking":
//         return (
//           <div className="space-y-4">
//             <select className="input-style">
//               <option>Select your Bank</option>
//               <option>State Bank of India</option>
//               <option>HDFC Bank</option>
//               <option>ICICI Bank</option>
//               <option>Axis Bank</option>
//             </select>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Select Payment Method
//         </h2>

//         <div className="grid grid-cols-3 gap-4 mb-6">
//           <button
//             className={`payment-btn ${paymentMethod === "card" ? "selected" : ""}`}
//             onClick={() => setPaymentMethod("card")}
//           >
//             <FaCreditCard size={24} />
//             <span className="text-xs">Card</span>
//           </button>
//           <button
//             className={`payment-btn ${paymentMethod === "upi" ? "selected" : ""}`}
//             onClick={() => setPaymentMethod("upi")}
//           >
//             <FaMobileAlt size={24} />
//             <span className="text-xs">UPI</span>
//           </button>
//           <button
//             className={`payment-btn ${paymentMethod === "netbanking" ? "selected" : ""}`}
//             onClick={() => setPaymentMethod("netbanking")}
//           >
//             <FaUniversity size={24} />
//             <span className="text-xs">Net Banking</span>
//           </button>
//         </div>

//         {renderForm()}

//         <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300">
//           Pay Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;



import React, { useState } from "react";
import { FaCreditCard, FaUniversity, FaMobileAlt } from "react-icons/fa";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const renderForm = () => {
    switch (paymentMethod) {
      case "card":
        return (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="input-style"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="input-style w-1/2"
              />
              <input
                type="text"
                placeholder="CVV"
                className="input-style w-1/2"
              />
            </div>
            <input
              type="text"
              placeholder="Cardholder Name"
              className="input-style"
            />
          </div>
        );
      case "upi":
        return (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter your UPI ID"
              className="input-style"
            />
          </div>
        );
      case "netbanking":
        return (
          <div className="space-y-4">
            <select className="input-style">
              <option>Select your Bank</option>
              <option>State Bank of India</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>Axis Bank</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full transition-all">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Choose Your Payment Method
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <button
            className={`payment-btn ${
              paymentMethod === "card" ? "selected" : ""
            }`}
            onClick={() => setPaymentMethod("card")}
          >
            <FaCreditCard size={28} className="text-indigo-500" />
            <span className="text-sm font-medium mt-1">Card</span>
          </button>
          <button
            className={`payment-btn ${
              paymentMethod === "upi" ? "selected" : ""
            }`}
            onClick={() => setPaymentMethod("upi")}
          >
            <FaMobileAlt size={28} className="text-green-500" />
            <span className="text-sm font-medium mt-1">UPI</span>
          </button>
          <button
            className={`payment-btn ${
              paymentMethod === "netbanking" ? "selected" : ""
            }`}
            onClick={() => setPaymentMethod("netbanking")}
          >
            <FaUniversity size={28} className="text-yellow-500" />
            <span className="text-sm font-medium mt-1">Net Bank</span>
          </button>
        </div>

        {renderForm()}

        <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
