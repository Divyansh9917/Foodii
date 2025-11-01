import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("http://localhost:4000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, feedback }),
      });

      if (res.ok) {
        setStatus("✅ Thank you for your feedback!");
        setEmail("");
        setFeedback("");
      } else {
        setStatus("❌ Failed to send feedback. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Network error. Please try again.");
    }
  };

  return (
    <footer className="bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 text-gray-800 py-12 mt-16 border-t border-orange-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Branding */}
        <h2 className="text-3xl font-extrabold text-orange-600 mb-2">
          Foodii 🍔
        </h2>
        <p className="text-gray-600 mb-6">
          Deliciously delivered — straight from your favorite restaurants.
        </p>

        {/* Feedback form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-orange-100"
        >
          <h3 className="text-lg font-semibold mb-3 text-orange-600">
            Share your feedback 💬
          </h3>

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mb-3 px-4 py-2 rounded-lg text-gray-900 focus:outline-none border border-gray-300 focus:ring-2 focus:ring-orange-300"
          />

          <textarea
            placeholder="Your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            className="w-full mb-3 px-4 py-2 rounded-lg text-gray-900 focus:outline-none border border-gray-300 focus:ring-2 focus:ring-orange-300 h-24 resize-none"
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full text-white font-semibold transition-colors shadow-md"
          >
            Submit Feedback
          </button>

          {status && (
            <p className="text-sm mt-3 text-gray-700 font-medium">{status}</p>
          )}
        </form>

        {/* Copyright */}
        <p className="text-gray-500 mt-8 text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-orange-500">Foodii</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
