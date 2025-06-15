import { useEffect, useState } from "react";
import { db, auth } from "../firebase/Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const q = query(
        collection(db, "bookings"),
        where("userId", "==", user.uid)
      );

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setBookings(data);
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      {bookings.map((booking) => (
        <div key={booking.id} className="border p-4 mb-2 rounded">
          <p><strong>Trip:</strong> {booking.trip}</p>
          <p><strong>Amount:</strong> ₹{booking.amountPaid}</p>
          <p><strong>Status:</strong> {booking.status}</p>
          <p><strong>Date:</strong> {new Date(booking.bookedAt?.seconds * 1000).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default AllBookings;
