import { useState } from "react";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <header className="flex justify-between items-center p-6 md:px-12">
        <h1 className="text-2xl font-bold">Sight</h1>
        <button className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
          Make an enquiry
        </button>
      </header>

      {/* Contact Form or Thank You Message */}
      <div className="flex flex-col items-center justify-center px-6 md:px-20">
        {submitted ? (
          <div className="text-center mt-12">
            <h2 className="text-5xl font-bold">
              <span className="text-red-500">Thank you</span> for contacting us!
            </h2>
            <p className="mt-6 text-gray-300">
              We have received your message and will contact you shortly. If you
              need immediate assistance, feel free to call us.
            </p>
            <button className="mt-6 border px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Back to home
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-lg mt-12"
          >
            <label className="mb-2 font-semibold">Your Name</label>
            <input
              type="text"
              required
              className="p-3 rounded-lg bg-gray-800 focus:outline-none mb-4"
              placeholder="Enter your name"
            />

            <label className="mb-2 font-semibold">Email Address</label>
            <input
              type="email"
              required
              className="p-3 rounded-lg bg-gray-800 focus:outline-none mb-4"
              placeholder="Enter your email"
            />

            <label className="mb-2 font-semibold">Message</label>
            <textarea
              required
              className="p-3 rounded-lg bg-gray-800 focus:outline-none mb-6"
              placeholder="Type your message here..."
              rows="5"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-500 py-3 rounded-lg hover:bg-red-600 transition"
            >
              Send Message →
            </button>
          </form>
        )}
      </div>

      {/* Footer Section */}
      <footer className="mt-16 p-8 bg-gradient-to-r from-black via-gray-900 to-black text-gray-400">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold">Sight</h3>
            <p className="mt-2">
              Get valuable insights straight to your inbox.
            </p>
            <div className="relative mt-4">
              <input
                type="email"
                placeholder="Your email here"
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                →
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Pages</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Behance
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <p>Copyright © 2025 Sight Design Studio</p>
          <a href="#" className="hover:underline mt-2 inline-block">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
