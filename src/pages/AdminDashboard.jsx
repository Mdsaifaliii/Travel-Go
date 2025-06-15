import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/Firebase';
import { CSVLink } from 'react-csv';

import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { currentUser } = useAuth(); // Ensure currentUser.role === 'admin'

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'bookings'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBookings(data);
      } catch (err) {
        setError('Failed to fetch bookings');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const deleteBooking = async (id) => {
    try {
      await deleteDoc(doc(db, 'bookings', id));
      setBookings(prev => prev.filter(booking => booking.id !== id));
    } catch (err) {
      console.error('Error deleting booking:', err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const bookingRef = doc(db, 'bookings', id);
      await updateDoc(bookingRef, { status });
      setBookings(prev =>
        prev.map(b => (b.id === id ? { ...b, status } : b))
      );
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const csvHeaders = [
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Destination', key: 'destination' },
    { label: 'Date', key: 'date' },
    { label: 'People', key: 'people' },
    { label: 'Status', key: 'status' },
  ];

  // Role-based check (optional)
  if (!currentUser || currentUser.role !== 'admin') {
    return (
      <div className="p-6 text-red-500 text-center text-xl font-semibold">
        🚫 Access Denied: Admins Only
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">📋 Booking Dashboard</h2>

      <CSVLink
        data={bookings}
        headers={csvHeaders}
        filename="bookings.csv"
        className="bg-green-600 text-white px-4 py-2 rounded shadow mb-4 inline-block"
      >
        Export to CSV
      </CSVLink>

      {loading ? (
        <p>Loading bookings...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="w-full border shadow">
          <thead>
            <tr className="bg-blue-100 text-center">
              <th>Name</th>
              <th>Email</th>
              <th>Destination</th>
              <th>Date</th>
              <th>People</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b.id} className="text-center border-b">
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.destination}</td>
                <td>{b.date}</td>
                <td>{b.people}</td>
                <td>
                  <select
                    value={b.status || 'Pending'}
                    onChange={(e) => updateStatus(b.id, e.target.value)}
                    className="px-2 py-1 border rounded"
                  >
                    <option>Pending</option>
                    <option>Confirmed</option>
                    <option>Cancelled</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => deleteBooking(b.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {bookings.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
