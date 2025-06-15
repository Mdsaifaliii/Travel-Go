import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuth } from "../context/AuthContext";

const UserBookings = () => {
  const { currentUser } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!currentUser) return;
    const q = query(
      collection(db, "bookings"),
      where("userEmail", "==", currentUser.email)
    );
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setBookings(data);
    });
    return () => unsub();
  }, [currentUser]);

  return (
    <div>
      <h2>Your Bookings</h2>
      {bookings.map((b) => (
        <div key={b.id}>
          <p><strong>Destination:</strong> {b.destination}</p>
          <p><strong>Date:</strong> {b.date}</p>
        </div>
      ))}
    </div>
  );
};

export default UserBookings;
