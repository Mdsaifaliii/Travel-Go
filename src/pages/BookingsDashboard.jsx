import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';
import { FaMapMarkerAlt, FaUsers, FaStickyNote, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

const BookingsDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'bookings'), (snapshot) => {
      const allBookings = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      const userBookings = allBookings.filter(
        booking => booking.email === auth.currentUser?.email
      );

      setBookings(userBookings);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-blue-700 text-center mb-8">
          📋 Bookings Dashboard
        </h1>

        {/* Cards for mobile, table for desktop */}
        <div className="space-y-6 lg:hidden">
          {bookings.length === 0 && (
            <div className="text-center text-gray-500">No bookings found.</div>
          )}
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-xl shadow-md p-4 space-y-2 border border-gray-200"
            >
              <h2 className="text-lg font-semibold text-gray-800">{booking.name}</h2>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaEnvelope className="text-blue-500" /> {booking.email}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" /> {booking.destination}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaCalendarAlt className="text-green-600" /> {booking.date}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaUsers className="text-purple-600" /> {booking.people} People
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaStickyNote className="text-yellow-500" /> {booking.notes}
              </p>
            </div>
          ))}
        </div>

        {/* Table for larger screens */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="min-w-full bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Destination</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">People</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No bookings found.
                  </td>
                </tr>
              )}
              {bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4">{booking.name}</td>
                  <td className="py-3 px-4">{booking.email}</td>
                  <td className="py-3 px-4">{booking.destination}</td>
                  <td className="py-3 px-4">{booking.date}</td>
                  <td className="py-3 px-4">{booking.people}</td>
                  <td className="py-3 px-4">{booking.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingsDashboard;
