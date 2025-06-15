import { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);

    try {
      const res = await axios.post('https://us-central1-traveller-43fbe.cloudfunctions.net/chatWithAI', {
        message: input,
      });

      setMessages([...newMessages, { role: 'assistant', content: res.data.reply }]);
      setInput('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg w-80">
      <div className="h-20 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-2 rounded ${msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>
            {msg.content}
          </div>
        ))}
      </div>

      <div className="flex mt-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border flex-grow p-2 rounded-l"
          placeholder="Ask about the tour..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
