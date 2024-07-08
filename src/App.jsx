import { useState } from 'react';
import axios from 'axios';
import './App.css';
import ChatBox from './components/ChatBox';
import InputForm from './components/InputForm';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    try {
      setInput('');
      const response = await axios.post('https://api-hotelbot.onrender.com/api/gemini/chat', { message: input });
      const botMessage = { sender: 'bot', text: await response.data.result.content.parts[0].text };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error communicating with the chatbot:', error);
    }

  };

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-slate-800">
      <h1 className="text-3xl font-bold mb-4 text-orange-500">HotelBot HotelBooking Assistant.</h1>
      <ChatBox messages={messages} />
      <InputForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
