

import React from "react";
import ChatbotIcon from "./ChatbotIcon";

const ChatMessage = ({ chat }) => {
  const isBot = chat.role === "model";

  return (
    <div className={`flex ${isBot ? "items-start gap-3" : "justify-end"}`}>
      {isBot && <ChatbotIcon />}
      <p
        className={`p-3 text-sm rounded-lg max-w-[75%] whitespace-pre-wrap ${
          isBot
            ? "bg-indigo-100 text-indigo-800"
            : "bg-indigo-600 text-white self-end"
        }`}
      >
        {chat.text}
      </p>
    </div>
  );
};

export default ChatMessage;
