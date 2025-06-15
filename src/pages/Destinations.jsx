import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    city: "Paris",
    country: "France",
    image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8fDA%3D",
    description: "Romantic streets, Eiffel Tower views, and world-class cuisine.",
    rating: 4.8,
    reviews: 120,
  },
  {
    city: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Tropical beaches, spiritual vibes, and stunning sunsets.",
    rating: 4.7,
    reviews: 200,
  },
  {
    city: "New York",
    country: "USA",
    image: "https://plus.unsplash.com/premium_photo-1672082422409-879d79636902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    description: "The city that never sleeps—skyscrapers, Broadway, and diversity.",
    rating: 4.9,
    reviews: 350,
  },
  {
    city: "Tokyo",
    country: "Japan",
    image: "https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9reW98ZW58MHx8MHx8fDA%3D",
    description: "A perfect blend of ancient traditions and futuristic tech.",
    rating: 4.6,
    reviews: 180,
  },
  {
    city: "Rome",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Walk through ancient ruins and embrace timeless culture.",
    rating: 4.8,
    reviews: 140,
  },
  {
    city: "Cape Town",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1529528070131-eda9f3e90919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FwZSUyMHRvd258ZW58MHx8MHx8fDA%3D",
    description: "Breathtaking landscapes, beaches, and vibrant city life.",
    rating: 4.7,
    reviews: 210,
  },
];

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDestinations = destinations.filter((destination) =>
    destination.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 bg-white-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Explore Popular Destinations
        </h2>
        
        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search for a city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-3 w-1/3 text-lg rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map(({ city, country, image, description, rating, reviews }) => (
            <div
              key={city}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 relative"
            >
              <img
                src={image}
                alt={`Scenic view of ${city}`}
                className="w-full h-56 object-cover transition-all duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-white text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                {city}
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-800">{city}</h3>
                <p className="text-sm text-blue-500 font-medium mb-2">{country}</p>
                <p className="text-gray-600 text-sm mb-4">{description}</p>
                <div className="flex items-center text-sm text-yellow-500 mb-4">
                  {/* Star Rating */}
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${index < rating ? "fill-current" : "text-gray-300"}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  <span className="ml-2">{rating} ({reviews} reviews)</span>
                </div>
                <Link
                  to={`/destinations/${city.toLowerCase()}`}
                  className="inline-block text-sm font-medium text-blue-600 hover:underline"
                >
                  Discover {city} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
