import { useState } from 'react';
import axios from 'axios';

const TravelChatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [aiReply, setAiReply] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!userMessage.trim()) return;

    setLoading(true);

    try {
      const response = await axios.post('https://us-central1-traveller-43fbe.cloudfunctions.net/chatWithAI', {
        message: userMessage
      });

      setAiReply(response.data.reply);
    } catch (error) {
      console.error(error);
      setAiReply('❌ Error communicating with travel assistant.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow-md max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Ask Travel Assistant ✈️</h2>

      <input
        type="text"
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        placeholder="Where should I travel in May?"
        className="w-full border p-3 rounded-lg mb-4"
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
      >
        {loading ? 'Thinking...' : 'Ask'}
      </button>

      {aiReply && (
        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <p><strong>Travel Assistant:</strong> {aiReply}</p>
        </div>
      )}
    </div>
  );
};

export default TravelChatbot;
