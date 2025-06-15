import React from "react";

const BookingConfirmationModal = ({ show, message, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full text-center animate-fadeIn">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Booking Confirmed ✅</h2>
        <p className="text-gray-700">{message}</p>
        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmationModal;
