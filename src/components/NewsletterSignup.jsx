import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email); // simple regex check
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "newsletter"), {
        email,
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setEmail("");
    } catch (err) {
      console.error("Newsletter signup error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 bg-blue-100 text-center px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6 text-gray-600">Get updates on new destinations, discounts & tips.</p>
      <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2 flex-wrap">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-2 text-white rounded ${loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {success && <p className="mt-4 text-green-600">Thanks for subscribing!</p>}
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </section>
  );
};

export default NewsletterSignup;
