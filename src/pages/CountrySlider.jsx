import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const countries = [
  {
    name: 'India',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    description: 'India is a land of diverse cultures, rich traditions, colorful festivals, and historical landmarks like the Taj Mahal.'
  },
  {
    name: 'Japan',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500&auto=format&fit=crop&q=60',
    description: 'Japan blends ancient traditions with modern technology, famous for cherry blossoms, sushi, and Zen philosophy.'
  }
];

const CountrySlider = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoaded(false);
      setCurrent((prev) => (prev + 1) % countries.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden text-white">
      <img
        key={countries[current].image}
        src={countries[current].image}
        alt={countries[current].name}
        onLoad={() => setLoaded(true)}
        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-6 text-center z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{countries[current].name}</h2>
          <p className="text-lg md:text-xl mb-6">{countries[current].description}</p>
          <div className="space-x-4">
            <Link
              to="/culture"
              state={{ country: countries[current] }}
              className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-2 rounded"
            >
              Learn Culture
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountrySlider;
