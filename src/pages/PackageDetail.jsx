import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { packageData } from "../data/packageData";
import { FaMapMarkerAlt, FaClock, FaDollarSign, FaStar } from "react-icons/fa";
import Chatbot from "../components/ChatBot"; 

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = packageData.find((pkg) => pkg.id === id);

  if (!tour) return <div className="text-center p-10">Package not found.</div>;

  const handleBooking = () => {
    navigate("/booking");
  };

  return (
    <>
      <section className="p-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded shadow-lg">
          <img
            src={tour.image}
            alt={tour.destination}
            className="w-full h-96 object-cover rounded"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">{tour.title}</h2>
            <p className="text-gray-600 mb-4">{tour.description}</p>

            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-600" /> {tour.destination}
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2 text-blue-600" /> {tour.duration}
              </li>
              <li className="flex items-center">
                <FaDollarSign className="mr-2 text-blue-600" /> {tour.price}
              </li>
              <li className="flex items-center">
                <FaStar className="mr-2 text-yellow-500" /> {tour.rating} / 5
              </li>
            </ul>

            <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {tour.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <button
              onClick={handleBooking}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      <Chatbot />
    </>
  );
};

export default PackageDetail;
