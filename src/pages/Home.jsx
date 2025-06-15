import React, { useState, useEffect } from 'react';
import Destinations from './Destinations'; 
import Packages from './Packages';

const countries = [
  {
    name: 'India',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    description: 'India is a land of diverse cultures, rich traditions, colorful festivals, and historical landmarks like the Taj Mahal.'
  },
  {
    name: 'Japan',
    image: 'https://images.pexels.com/photos/19081788/pexels-photo-19081788/free-photo-of-autumn-wallpapers.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Japan blends ancient traditions with modern technology, famous for cherry blossoms, sushi, and Zen philosophy.'
  },
  {
    name: 'France',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&auto=format&fit=crop&q=60',
    description: 'France is known for its romantic cities, art, fashion, cuisine, and landmarks like the Eiffel Tower and Louvre.'
  },
  {
    name: 'Brazil',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=500&auto=format&fit=crop&q=60',
    description: 'Brazil is famous for its vibrant culture, Carnival festival, samba dance, and the Amazon rainforest.'
  },
  {
    name: 'Egypt',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=500&auto=format&fit=crop&q=60',
    description: 'Egypt holds ancient wonders like the Pyramids of Giza and a history rooted in one of the world’s oldest civilizations.'
  },
  {
    name: 'Italy',
    image: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=500&auto=format&fit=crop&q=60',
    description: 'Italy is home to rich Renaissance history, world-class cuisine, iconic cities like Rome, Venice, and Florence.'
  },
  {
    name: 'Australia',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=500&auto=format&fit=crop&q=60',
    description: 'Australia boasts the Great Barrier Reef, diverse wildlife, and laid-back beach culture.'
  },
  {
    name: 'South Africa',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=500&auto=format&fit=crop&q=60',
    description: 'South Africa features stunning landscapes, cultural richness, safaris, and the iconic Table Mountain.'
  }
];

const CountrySlider = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoaded(false);
      setCurrent((prev) => (prev + 1) % countries.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <section className="relative h-screen overflow-hidden text-white">
          <img
            key={countries[current].image}
            src={countries[current].image}
            alt={countries[current].name}
            onLoad={() => setLoaded(true)}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />

          <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center px-6 text-center z-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{countries[current].name}</h2>
              <p className="text-lg md:text-xl mb-6">{countries[current].description}</p>
              <div className="space-x-4">
                <a href="/destinations" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded">Explore More</a>
                <a href="/culture" className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-2 rounded">Learn Culture</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-10 bg-gray-50">
        <Destinations />
      </section>
      
      <section className="py-10 bg-gray-50">
        <Packages />
      </section>
    </>
  );
};

export default CountrySlider;
