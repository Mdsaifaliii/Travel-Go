import { FaGlobeAsia } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6 md:px-12">
    <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
      <FaGlobeAsia className="text-5xl text-blue-600 mb-4 animate-bounce" />
      <h2 className="text-4xl font-extrabold text-blue-800 mb-6">
        About <span className="text-blue-500">TravelGo</span>
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
        <span className="font-semibold">TravelGo</span> was founded with a deep passion for exploration and a mission to make world-class travel experiences accessible to everyone.
        Our diverse team of seasoned travelers, destination experts, and dedicated travel planners work together to bring you thoughtfully curated travel packages that blend comfort, adventure, and cultural richness.
        <br /><br />
        Whether you're chasing sunrises in Bali, cruising the Seine in Paris, or wandering Tokyo’s neon streets, <span className="text-blue-600 font-semibold">TravelGo</span> is your trusted companion in discovering the world’s most breathtaking destinations.
      </p>

      <div className="mt-10">
        <Link to="/packages">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
            Explore Packages
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default About;
