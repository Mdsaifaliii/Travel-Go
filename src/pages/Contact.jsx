import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase'; 

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

 const handleSubmit = async e => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "contactMessages"), {
      name: form.name,
      email: form.email,
      message: form.message,
      createdAt: serverTimestamp()
    });

    alert(`Thanks ${form.name}, we’ve received your message!`);
    setForm({ name: '', email: '', message: '' });
  } catch (error) {
    console.error("Error saving message: ", error);
    alert("Something went wrong. Please try again later.");
  }
};


  return (
    <div className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 dark:text-white mb-12 animate-pulse">
          Contact TravelGo
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl mt-1" />
              <p>hello@travelgo.com</p>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-blue-600 dark:text-blue-400 text-xl mt-1" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-xl mt-1" />
              <p>Lucknow, India</p>
            </div>

            {/* Google Map */}
            <div className="mt-6">
              <iframe
                title="TravelGo Location"
                className="w-full h-64 rounded shadow-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.7424900665483!2d80.94227511504434!3d26.846693683158726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd1d1ad38f1b%3A0x7f5ab146d81452d2!2sLucknow!5e0!3m2!1sen!2sin!4v1614596605353!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 placeholder-transparent focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 placeholder-transparent focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                id="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 placeholder-transparent focus:outline-none focus:border-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
