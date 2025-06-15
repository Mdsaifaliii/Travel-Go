import { useEffect, useState } from 'react';
import { db } from '../firebase/Firebase';
import { collection, getDocs } from 'firebase/firestore';

const AdminPanel = () => {
  const [packages, setPackages] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      const querySnapshot = await getDocs(collection(db, 'packages'));
      setPackages(querySnapshot.docs.map(doc => doc.data()));
    };

    const fetchBookings = async () => {
      const querySnapshot = await getDocs(collection(db, 'bookings'));
      setBookings(querySnapshot.docs.map(doc => doc.data()));
    };

    fetchPackages();
    fetchBookings();
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Packages</h2>
      {/* Display packages */}
      <h2>Bookings</h2>
      {/* Display bookings */}
    </div>
  );
};

export default AdminPanel;
