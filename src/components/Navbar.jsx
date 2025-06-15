import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import LogoutButton from "../components/LogoutButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700">TravelGo</h1>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/destinations" className="hover:text-blue-600">Destinations</Link>
          <Link to="/packages" className="hover:text-blue-600">Packages</Link>
          <Link to="/booking" className="hover:text-blue-600">Booking</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/signup" className="hover:text-blue-600 text-blue-700 font-semibold">Sign Up</Link>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 px-2">
          <Link to="/" onClick={toggleMenu} className="block py-2 px-4 rounded hover:bg-blue-50">Home</Link>
          <Link to="/destinations" onClick={toggleMenu} className="block py-2 px-4 rounded hover:bg-blue-50">Destinations</Link>
          <Link to="/packages" onClick={toggleMenu} className="block py-2 px-4 rounded hover:bg-blue-50">Packages</Link>
          <Link to="/booking" onClick={toggleMenu} className="block py-2 px-4 rounded hover:bg-blue-50">Booking</Link>
          <Link to="/about" onClick={toggleMenu} className="block py-2 px-4 rounded hover:bg-blue-50">About</Link>
          <Link to="/contact" onClick={toggleMenu} className="block py-2 px-4 rounded hover:bg-blue-50">Contact</Link>
          <Link to="/signup" onClick={toggleMenu} className="block py-2 px-4 rounded bg-blue-600 text-white text-center">Sign Up</Link>
          <Link to="/logout" onClick={toggleMenu} className="block py-2 px-4 rounded bg-blue-600 text-white text-center">Logout</Link>
        </div>
      )}
      <div className="hidden md:block ml-auto">
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
