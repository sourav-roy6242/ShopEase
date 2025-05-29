

// import React, { useRef } from "react";

// const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
//   const inputRef = useRef();

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const userMessage = inputRef.current.value.trim();
//     if (!userMessage) return;

//     setChatHistory((prev) => [...prev, { role: "user", text: userMessage }]);

//     setTimeout(() => {
//       setChatHistory((prev) => [...prev, { role: "model", text: "Thinking..." }]);
//       generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
//     }, 600);

//     inputRef.current.value = "";
//   };

//   return (
//     <form
//       onSubmit={handleFormSubmit}
//       className="flex items-center gap-2 border rounded-full px-4 py-2 shadow"
//     >
//       <input
//         ref={inputRef}
//         type="text"
//         placeholder="Type your message..."
//         className="flex-1 border-none outline-none text-sm placeholder-gray-400"
//         required
//       />
//       <button
//         type="submit"
//         className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition"
//       >
//         <span className="material-symbols-rounded">arrow_upward</span>
//       </button>
//     </form>
//   );


// export default ChatForm;



import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import arrow up icon

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    setChatHistory((prev) => [...prev, { role: "user", text: userMessage }]);

    setTimeout(() => {
      generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
    }, 600);

    inputRef.current.value = "";
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex items-center gap-2 border rounded-full px-4 py-2 shadow"
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Type your message..."
        className="flex-1 border-none outline-none text-sm placeholder-gray-400"
        required
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition flex items-center justify-center"
      >
        <FaArrowUp className="text-sm" /> {/* Replaced with Font Awesome icon */}
      </button>
    </form>
  );
};

export default ChatForm;