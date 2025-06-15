import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const japan = {
    name: 'Japan',
    image:
      'https://images.unsplash.com/photo-1582979511733-2a4dd6e94081?auto=format&fit=crop&w=1350&q=80',
    description:
      'Japan is known for its harmonious blend of ancient traditions and modern innovations. It’s a land of temples, samurai culture, and high-tech cities.',
    festivals: ['Hanami (Cherry Blossom)', 'Gion Matsuri', 'Obon'],
    food: ['Sushi', 'Ramen', 'Okonomiyaki'],
    clothing: 'Traditional clothing includes the kimono, yukata, and hakama.',
    language: 'The official language is Japanese. Religions include Shinto and Buddhism.',
    facts: [
      'Japan has more than 6,800 islands.',
      'The country has the world’s oldest monarchy.',
      'It’s the birthplace of anime and karaoke.',
    ],
  };

  const handleLearnMore = () => {
    navigate('/learn', { state: { country: japan } });
  };

  return (
    <div className="p-8">
      <div className="bg-white rounded shadow p-6 max-w-xl mx-auto text-center">
        <img
          src={japan.image}
          alt="Japan"
          className="w-full h-60 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{japan.name}</h2>
        <p className="mb-4">{japan.description.slice(0, 100)}...</p>
        <button
          onClick={handleLearnMore}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
