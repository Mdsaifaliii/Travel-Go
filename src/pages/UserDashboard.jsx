import BookingForm from "../components/BookingForm";
import UserBookings from "../components/UserBookings";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <BookingForm />
      <hr />
      <UserBookings />
    </div>
  );
};

export default Dashboard;
