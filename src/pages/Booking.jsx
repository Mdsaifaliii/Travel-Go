import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import BookingConfirmationModal from "./BookingConfirmationModal";



const destinations = ['Paris', 'Bali', 'Tokyo', 'Egypt', 'Manali', 'Kerala'];

const Booking = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
    people: 1,
    notes: '',
    paymentMethod: '',
  });

  const [showToast, setShowToast] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePeopleChange = (val) => {
    setForm({ ...form, people: Math.max(1, form.people + val) });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.destination || !form.date || !form.paymentMethod) {
    alert('Please fill all required fields including payment method!');
    return;
  }

  try {
    await addDoc(collection(db, 'bookings'), {
      ...form,
      timestamp: new Date().toISOString(),
    });

    setSuccessMessage(
      `✅ Booking Confirmed for ${form.destination} with ${form.paymentMethod} payment!`
    );
    setShowToast(true);
    setShowModal(true);

    setTimeout(() => {
      setShowToast(false);
      setSuccessMessage('');
    }, 4000);

    
    setForm({
      name: '',
      email: '',
      destination: '',
      date: '',
      people: 1,
      notes: '',
      paymentMethod: '',
    });
  } catch (error) {
    console.error('Error submitting booking:', error);
    alert('❌ Booking failed. Please try again later.');
  }
};
const initiateCashfreePayment = () => {
  const cashfree = new window.Cashfree({
    mode: "TEST", // or "PROD" for live
  });

  const initiateCashfreePayment = () => {
  const cashfree = new window.Cashfree({
    mode: "TEST", // or "PROD"
  });

  const paymentData = {
    orderId: "order_" + new Date().getTime(),
    orderAmount: 1000, 
    customerName: form.name,
    customerEmail: form.email,
    customerPhone: "9999999999", 
    orderCurrency: "INR",
    appId: "TEST106436440d6801d31ea92b5ce14544634601",
    notifyUrl: "https://yourdomain.com/notify",
    returnUrl: "https://yourdomain.com/return", 
  };

  cashfree.checkout(paymentData);
};

};


  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-10 animate-fadeIn">
      {/* Booking Form */}
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl relative mb-12">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-6">
          Book Your Dream Trip ✈️
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              name="name"
              value={form.name}
              placeholder="John Doe"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email Address</label>
            <input
              name="email"
              type="email"
              value={form.email}
              placeholder="john@example.com"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Destination</label>
            <select
              name="destination"
              value={form.destination}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Destination</option>
              {destinations.map((dest, index) => (
                <option key={index} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-semibold">Travel Date</label>
              <input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block mb-1 font-semibold">People</label>
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => handlePeopleChange(-1)}
                  className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-lg"
                >
                  -
                </button>
                <input
                  name="people"
                  type="number"
                  value={form.people}
                  readOnly
                  min="1"
                  className="w-full text-center border-l border-r p-2"
                />
                <button
                  type="button"
                  onClick={() => handlePeopleChange(1)}
                  className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-lg"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Additional Notes</label>
            <textarea
              name="notes"
              rows="3"
              value={form.notes}
              placeholder="Any special requests or info?"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
           <div>
  <label className="block mb-1 font-semibold">Payment Method</label>
  <select
    name="paymentMethod"
    value={form.paymentMethod}
    onChange={handleChange}
    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
    required
  >
    <option value="">Choose a payment method</option>
    <option value="Credit Card">Credit Card</option>
    <option value="PayPal">PayPal</option>
    <option value="UPI">UPI</option>
    <option value="Net Banking">Net Banking</option>
    <option value="Cash on Arrival">Cash on Arrival</option>
  </select>
</div>

          {showModal && (
  <div className="mt-6 flex justify-center">
    <button
      onClick={initiateCashfreePayment}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
    >
      Pay via Cashfree
    </button>
  </div>
)}


          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md"
          >
            Confirm Booking
          </button>
        </form>

        {showToast && successMessage && (
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-500 animate-bounce">
    {successMessage}
  </div>
)}

<BookingConfirmationModal
  show={showModal}
  message={successMessage}
  onClose={() => setShowModal(false)}
/>

      </div>
    </div>
  );
};

export default Booking;
