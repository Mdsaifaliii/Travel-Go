import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';
import LearnCulture from './pages/LearnCulture';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PackageDetail from './pages/PackageDetail';
import BookingsDashboard from "./pages/BookingsDashboard";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import FloatingContactButton from "./components/FloatingContactButton";
import DarkModeToggle from "./components/DarkModeToggle";
import Testimonials from "./components/Testimonials";
import NewsletterSignup from "./components/NewsletterSignup";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/culture" element={<LearnCulture />} />
            <Route path="/packages/:id" element={<PackageDetail />} />
            <Route path="/dashboard" element={<BookingsDashboard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
      
          </Routes>

          {/* Global Components to Render on All Pages */}
          <Testimonials />
          <NewsletterSignup />
          <FloatingContactButton />
          <DarkModeToggle />


        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
