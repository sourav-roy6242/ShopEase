// import React, { useState, useRef, useEffect } from "react";
// import ChatbotIcon from "./ChatbotIcon";
// import ChatForm from "./ChatForm";
// import ChatMessage from "./ChatMessage";
// import "./Chatbot.css";

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

//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ contents: formattedHistory }),
//     };

//     try {
//       const response = await fetch(
//         import.meta.env.VITE_API_KEY,
//         requestOptions
//       );
//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error?.message || "Failed to fetch");
//       }

//       const apiResponseText = data.candidates[0].content.parts[0].text
//         .replace(/\*\*(.*?)\*\*/g, "$1")
//         .trim();

//       updateHistory(apiResponseText);
//     } catch (error) {
//       console.error(error);
//       updateHistory("Sorry, something went wrong.");
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
//     <div className={`container ${showChatbot ? "show-chatbot" : " "}`}>
//       <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler">
//         <span className="material-symbols-rounded">mode_comment</span>
//         <span className="material-symbols-rounded">close</span>
//       </button>
//       <div className="chatbot-popup">
//         {/* Chat header */}
//         <div className="chat-header">
//           <div className="header-info">
//             <ChatbotIcon />
//             <h2 className="logo-text">Chatbot</h2>
//           </div>
//           <button onClick={() => setShowChatbot((prev) => !prev)} className="material-symbols-rounded">
//             keyboard_arrow_down
//           </button>
//         </div>

//         {/* Chatbot body */}
//         <div ref={chatBodyRef} className="chat-body">
//           <div className="message bot-message">
//             <ChatbotIcon />
//             <p className="message-text">Hi there! How can I help you today?</p>
//           </div>

//           {/* Render chat history */}
//           {chatHistory.map((chat, index) => (
//             <ChatMessage key={index} chat={chat} />
//           ))}
//         </div>

//         {/* Chat footer */}
//         <div className="chat-footer">
//           <ChatForm
//             chatHistory={chatHistory}
//             setChatHistory={setChatHistory}
//             generateBotResponse={generateBotResponse}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatBot;



import React, { useState, useRef, useEffect } from "react";
import ChatbotIcon from "./ChatbotIcon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";

const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };

    const formattedHistory = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    try {
      const response = await fetch(import.meta.env.VITE_API_KEY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: formattedHistory }),
      });
      const data = await response.json();

      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
        ?.replace(/\*\*(.*?)\*\*/g, "$1")
        ?.trim();

      updateHistory(text || "Sorry, something went wrong.");
    } catch (err) {
      console.error(err);
      updateHistory("Something went wrong. Try again.");
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    <>
      {/* Toggle Button */}
      {!showChatbot && (
        <button
          onClick={() => setShowChatbot(true)}
          className="fixed bottom-4 right-4 bg-indigo-700 text-white mb-20 mr-2 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50"
        >
          <span className="material-symbols-rounded text-3xl">sms</span>
        </button>
      )}

      {/* Chat Box */}
      {showChatbot && (
        <div className="fixed bottom-20 right-4 z-40 w-[380px] sm:w-[420px] h-[600px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-700 text-white px-5 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <ChatbotIcon />
              <h2 className="text-lg font-semibold">Jinny</h2>
            </div>
            <button
              onClick={() => setShowChatbot(false)}
              className="hover:bg-indigo-600 p-1  rounded-full transition"
            >
              <span className="material-symbols-rounded text-xl">arrow_downward</span>
            </button>
          </div>

          {/* Chat Body */}
          <div
            ref={chatBodyRef}
            className="flex-1 p-5 overflow-y-auto space-y-4 bg-gray-50 scroll-smooth"
          >
            <div className="flex gap-3 items-start">
              <ChatbotIcon />
              <p className="bg-indigo-100 text-indigo-800 p-3 rounded-lg max-w-[75%] text-sm">
                Hi there! How can I help you today?
              </p>
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
        </div>
      )}
    </>
  );
};

export default ChatBot;
