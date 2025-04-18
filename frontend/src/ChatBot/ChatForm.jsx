import React from 'react'
import { useRef } from 'react'

const ChatForm = ({setChatHistory}) => {

    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;

             //update chat history with the user's message
        setChatHistory((history) => [...history, { role: 'user', text: userMessage }]); 


        setTimeout(() => setChatHistory((history) => [...history, { role: 'user', text: userMessage }]),600); 
        
      };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
    <input
    ref={inputRef}
      type="text"
      placeholder="Type your message..."
      className="message-input" required
    />
    <button  className="material-symbols-rounded">
      arrow_upward
    </button>
  </form>
  )
}

export default ChatForm