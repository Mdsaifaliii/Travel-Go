import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

const BookingForm = () => {
  const [formData, setFormData] = useState({ destination: "", date: "" });
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "bookings"), {
        ...formData,
        userEmail: currentUser?.email,
        createdAt: Timestamp.now()
      });
      alert("Booking successful");
      setFormData({ destination: "", date: "" });
    } catch (err) {
      console.error("Booking error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Destination"
        value={formData.destination}
        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
        required
      />
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
