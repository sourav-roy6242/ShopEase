import React from "react";
import ChatbotIcon from "./ChatbotIcon";
import "./Chatbot.css";
import ChatForm from "./ChatForm";
import { useState } from "react";
import ChatMessage from "./ChatMessage";

const ChatBot = () => {

    const [chatHistory, setChatHistory] = useState([]);

  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* Chat header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded">
            keyboard_arrow_down{" "}
          </button>
        </div>

        {/* Chatbot body */}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">Hi there! How can I help you today?</p>
          </div>

        {/* Render the chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}

          
        </div>

        {/* Chat footer */}

        <div className="chat-footer">
          <ChatForm setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
