import React from "react";
import { Link } from "react-router-dom";
import { packageData } from "../data/packageData"; // Import the data

const Packages = () => {
  return (
    <section className="p-10 max-w-8xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Tour Packages</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packageData.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="overflow-hidden rounded">
              <img
                src={pkg.image}
                alt={pkg.destination}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{pkg.title}</h3>
            <p className="text-gray-600 mt-2">{pkg.description}</p>
            <div className="flex items-center mt-4 text-gray-700 text-sm">
              <span className="mr-2 font-medium">{pkg.price}</span>
              <span className="mr-2">| {pkg.duration}</span>
              <span className="mr-2">| {pkg.rating} ⭐</span>
            </div>
            <Link
              to={`/packages/${pkg.id}`}
              className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
