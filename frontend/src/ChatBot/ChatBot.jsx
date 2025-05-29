
// import React, { useState, useRef, useEffect } from "react";
// import ChatbotIcon from "./ChatbotIcon";
// import ChatForm from "./ChatForm";
// import ChatMessage from "./ChatMessage";

// const ChatBot = () => {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [showChatbot, setShowChatbot] = useState(false);
//   const chatBodyRef = useRef();

//   const generateBotResponse = async (history) => {
//     const updateHistory = (text) => {
//       setChatHistory((prev) => [
//         ...prev.filter((msg) => msg.text !== "Thinking..."),
//         { role: "model", text },
//       ]);
//     };

//     const formattedHistory = history.map(({ role, text }) => ({
//       role,
//       parts: [{ text }],
//     }));

//     try {
//       const response = await fetch(import.meta.env.VITE_API_KEY, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ contents: formattedHistory }),
//       });
//       const data = await response.json();

//       const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
//         ?.replace(/\*\*(.*?)\*\*/g, "$1")
//         ?.trim();

//       updateHistory(text || "Sorry, something went wrong.");
//     } catch (err) {
//       console.error(err);
//       updateHistory("Something went wrong. Try again.");
//     }
//   };

//   useEffect(() => {
//     if (chatBodyRef.current) {
//       chatBodyRef.current.scrollTo({
//         top: chatBodyRef.current.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   }, [chatHistory]);

//   return (
//     <>
//       {/* Toggle Button */}
//       {!showChatbot && (
//         <button
//           onClick={() => setShowChatbot(true)}
//           className="fixed bottom-4 right-4 bg-indigo-700 text-white mb-20 mr-2 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50"
//         >
//           <span className="material-symbols-rounded text-3xl">sms</span>
//         </button>
//       )}

//       {/* Chat Box */}
//       {showChatbot && (
//         <div className="fixed bottom-20 right-4 z-40 w-[380px] sm:w-[420px] h-[600px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
//           {/* Header */}
//           <div className="bg-indigo-700 text-white px-5 py-4 flex justify-between items-center">
//             <div className="flex items-center gap-3">
//               <ChatbotIcon />
//               <h2 className="text-lg font-semibold">Jinny</h2>
//             </div>
//             <button
//               onClick={() => setShowChatbot(false)}
//               className="hover:bg-indigo-600 p-1  rounded-full transition"
//             >
//               <span className="material-symbols-rounded text-xl">arrow_downward</span>
//             </button>
//           </div>

//           {/* Chat Body */}
//           <div
//             ref={chatBodyRef}
//             className="flex-1 p-5 overflow-y-auto space-y-4 bg-gray-50 scroll-smooth"
//           >
//             <div className="flex gap-3 items-start">
//               <ChatbotIcon />
//               <p className="bg-indigo-100 text-indigo-800 p-3 rounded-lg max-w-[75%] text-sm">
//                 Hi there! How can I help you today?
//               </p>
//             </div>
//             {chatHistory.map((chat, index) => (
//               <ChatMessage key={index} chat={chat} />
//             ))}
//           </div>

//           {/* Footer */}
//           <div className="p-4 bg-white border-t">
//             <ChatForm
//               chatHistory={chatHistory}
//               setChatHistory={setChatHistory}
//               generateBotResponse={generateBotResponse}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ChatBot;



import React, { useState, useRef, useEffect } from "react";
import ChatbotIcon from "./ChatbotIcon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import { FaTimes, FaArrowDown, FaArrowUp, FaRobot } from "react-icons/fa";

const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const chatBodyRef = useRef();

  // Debugging: Log environment variables on component mount
  useEffect(() => {
    console.log("Current API endpoint:", import.meta.env.VITE_API_KEY);
    console.log("Environment mode:", import.meta.env.MODE);
  }, []);

  const generateBotResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };

    // Add "Thinking..." message immediately
    setChatHistory((prev) => [...prev, { role: "model", text: "Thinking..." }]);

    const formattedHistory = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    try {
      // 1. Verify API endpoint exists
      const API_ENDPOINT = import.meta.env.VITE_API_KEY;
      if (!API_ENDPOINT) {
        throw new Error(
          "API endpoint is undefined. Please check your environment variables."
        );
      }

      console.log("Sending request to:", API_ENDPOINT);
      console.log("Request payload:", {
        contents: formattedHistory,
      });

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: formattedHistory }),
      });
      
      // 2. Handle non-OK responses
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `API returned ${response.status}: ${errorText || "No error message"}`
        );
      }

      const data = await response.json();
      console.log("API response:", data);
      
      // 3. Improved error handling for response structure
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
        ?.replace(/\*\*(.*?)\*\*/g, "$1")
        ?.trim();

      if (!text) {
        throw new Error(
          "Unexpected API response structure: " + JSON.stringify(data)
        );
      }

      updateHistory(text);
    } catch (err) {
      console.error("API Error Details:", err);
      updateHistory(
        "I'm having trouble connecting right now. " +
          "Please try again later or contact support if the problem persists." +
          (import.meta.env.DEV ? `\n(Error: ${err.message})` : "")
      );
    }
  };

  useEffect(() => {
    if (chatBodyRef.current && !isMinimized) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory, isMinimized]);

  return (
    <>
      {/* Floating Chat Button */}
      {!showChatbot && (
        <button
          onClick={() => setShowChatbot(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50 hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105"
        >
          <FaRobot className="text-2xl" />
        </button>
      )}

      {/* Chat Box */}
      {showChatbot && (
        <div
          className={`fixed bottom-20 right-6 z-40 w-[380px] sm:w-[420px] ${
            isMinimized ? "h-[60px]" : "h-[600px]"
          } bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-full">
                <ChatbotIcon />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Jinny Assistant</h2>
                <p className="text-xs opacity-80">Online • Ready to help</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-indigo-700 p-2 rounded-full transition"
              >
                {isMinimized ? (
                  <FaArrowUp className="text-sm" />
                ) : (
                  <FaArrowDown className="text-sm" />
                )}
              </button>
              <button
                onClick={() => setShowChatbot(false)}
                className="hover:bg-indigo-700 p-2 rounded-full transition"
              >
                <FaTimes className="text-base" />
              </button>
            </div>
          </div>

          {/* Chat Body - Only show when not minimized */}
          {!isMinimized && (
            <>
              <div
                ref={chatBodyRef}
                className="flex-1 p-5 overflow-y-auto space-y-4 bg-gray-50 scroll-smooth"
              >
                <div className="flex gap-3 items-start">
                  <div className="bg-indigo-100 rounded-full p-2">
                    <ChatbotIcon />
                  </div>
                  <div className="bg-indigo-100 text-indigo-800 p-4 rounded-xl rounded-tl-none max-w-[80%] text-sm shadow-sm">
                    <p>
                      Hi there! I'm Jinny, your AI assistant. How can I help you
                      today?
                    </p>
                    <div className="mt-2 text-xs text-indigo-600">
                      <p>• Ask about orders</p>
                      <p>• Get delivery updates</p>
                      <p>• Solve account issues</p>
                    </div>
                  </div>
                </div>
                {chatHistory.map((chat, index) => (
                  <ChatMessage key={index} chat={chat} />
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 bg-white border-t">
                <ChatForm
                  chatHistory={chatHistory}
                  setChatHistory={setChatHistory}
                  generateBotResponse={generateBotResponse}
                />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;