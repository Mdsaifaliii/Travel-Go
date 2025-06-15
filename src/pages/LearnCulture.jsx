import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LearnCulture = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const country = location.state?.country;

  if (!country) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <p className="text-xl font-semibold mb-4">Country information missing!</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">{country.name} Culture</h1>
        <img
          src={country.image}
          alt={country.name}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <p className="text-lg">{country.description}</p>
      </div>
    </div>
  );
};

export default LearnCulture;
