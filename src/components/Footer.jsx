import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-900 text-white mt-12">
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
      {/* Branding */}
      <div>
        <h2 className="text-2xl font-bold mb-4">TravelGo</h2>
        <p className="text-gray-400">
          Your trusted partner for unforgettable journeys. Let us turn your dream destinations into reality.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-gray-400">
          <li><a href="/" className="hover:text-white transition">Home</a></li>
          <li><a href="/packages" className="hover:text-white transition">Packages</a></li>
          <li><a href="/booking" className="hover:text-white transition">Booking</a></li>
          <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <p className="text-gray-400">123 Explorer Street<br />Lucknow, UP, India</p>
        <p className="text-gray-400 mt-2">Phone: +91 9876543210<br />Email: hello@travelgo.com</p>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
        <p className="text-gray-400 mb-3">Get updates on new packages and discounts.</p>
        <form className="flex flex-col space-y-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <span>&copy; {new Date().getFullYear()} TravelGo. All rights reserved.</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-white transition"><FaInstagram /></a>
          <a href="#" className="hover:text-white transition"><FaTwitter /></a>
          <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
