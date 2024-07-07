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
      const response = await axios.post('http://localhost:3000/api/openai/chat', { message: input });
      console.log(response);
      const botMessage = { sender: 'bot', text: response.data.retMessage[0].text.value };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error communicating with the chatbot:', error);
    }

    setInput('');
  };

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ChatBox messages={messages} />
      <InputForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
