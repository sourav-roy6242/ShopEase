// import React from 'react'
// import { useRef } from 'react'

// const ChatForm = ({setChatHistory}) => {

//     const inputRef = useRef();

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         const userMessage = inputRef.current.value.trim();
//         if (!userMessage) return;

//              //update chat history with the user's message
//         setChatHistory((history) => [...history, { role: 'user', text: userMessage }]); 


//         setTimeout(() => setChatHistory((history) => [...history, { role: 'user', text: userMessage }]),600); 
        
//       };

//   return (
//     <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
//     <input
//     ref={inputRef}
//       type="text"
//       placeholder="Type your message..."
//       className="message-input" required
//     />
//     <button  className="material-symbols-rounded">
//       arrow_upward
//     </button>
//   </form>
//   )
// }

// export default ChatForm






import React, { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    setChatHistory((prev) => [...prev, { role: "user", text: userMessage }]);

    setTimeout(() => {
      setChatHistory((prev) => [...prev, { role: "model", text: "Thinking..." }]);
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
        className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition"
      >
        <span className="material-symbols-rounded">arrow_upward</span>
      </button>
    </form>
  );
};

export default ChatForm;
