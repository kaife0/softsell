import React, { useState, useRef, useEffect } from 'react';
import { FaCommentDots, FaTimes, FaPaperPlane } from 'react-icons/fa';
import type { ChatMessage } from './types';
import { generateAIResponse } from './aiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      id: '1', 
      text: 'Hello! I\'m your AI assistant. How can I help you with your license selling questions today?', 
      sender: 'ai' 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLTextAreaElement>(null);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    // Focus input field when opening chat
    setTimeout(() => {
      if (!isOpen && chatInputRef.current) {
        chatInputRef.current.focus();
      }
    }, 100);
  };
  
  const handleSend = async () => {
    if (inputText.trim() === '') return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user'
    };
    
    setMessages([...messages, userMessage]);
    setInputText('');
    setIsLoading(true);
    
    try {
      const aiResponse = await generateAIResponse(inputText, messages);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'ai'
      }]);
    } catch (error) {
      console.error('Error generating AI response:', error);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'ai'
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Auto resize textarea as user types
  const autoResizeTextarea = () => {
    if (chatInputRef.current) {
      chatInputRef.current.style.height = 'auto';
      chatInputRef.current.style.height = 
        Math.min(chatInputRef.current.scrollHeight, 120) + 'px';
    }
  };

  // Example questions
  const exampleQuestions = [
    "How do I sell my license?",
    "What's the process for transferring ownership?",
    "How much can I sell my license for?",
    "Is there a fee for selling a license?"
  ];

  const handleExampleClick = (question: string) => {
    setInputText(question);
    if (chatInputRef.current) {
      chatInputRef.current.focus();
    }
  };
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden', 'md:overflow-auto');
    } else {
      document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
    };
  }, [isOpen]);
  
  useEffect(() => {
    autoResizeTextarea();
  }, [inputText]);
  
  return (
    <div>
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 md:p-4 shadow-lg flex items-center justify-center transition-all duration-200 z-50 w-12 h-12 md:w-14 md:h-14"
          aria-label="Open chat"
        >
          <FaCommentDots className="text-lg md:text-xl" />
        </button>
      )}
      
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-4 md:right-4 bg-white md:rounded-lg shadow-xl flex flex-col md:w-96 md:h-[32rem] h-full w-full border border-gray-200 z-[9999]">
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center md:rounded-t-lg shadow-sm sticky top-0">
            <h3 className="font-medium text-base md:text-lg">CredEx Assistant</h3>
            <button 
              onClick={toggleChat} 
              className="text-white hover:text-gray-200 p-2 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Close chat"
            >
              <FaTimes size={18} />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto" style={{ height: 'calc(100% - 120px)' }}>
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-3 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`inline-block p-3 rounded-lg max-w-[90%] break-words ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left mb-3">
                <div className="inline-block p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef}></div>
          </div>
          
          {messages.length === 1 && (
            <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {exampleQuestions.map((q, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleExampleClick(q)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 px-3 py-1.5 rounded-full text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="p-3 border-t border-gray-200 dark:border-gray-700 sticky bottom-0 bg-white dark:bg-gray-900 md:rounded-b-lg">
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-2xl">
              <textarea 
                ref={chatInputRef}
                className="flex-1 bg-transparent px-3 py-2 focus:outline-none resize-none min-h-[40px] max-h-[120px] text-gray-800 dark:text-gray-200"
                placeholder="Type your message..."
                rows={1}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button 
                onClick={handleSend} 
                disabled={inputText.trim() === '' || isLoading}
                className="p-2 mx-1 text-blue-600 hover:text-blue-800 disabled:text-gray-400 transition-colors dark:text-blue-400 dark:hover:text-blue-300"
                aria-label="Send message"
              >
                <FaPaperPlane size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;