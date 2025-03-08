import { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual EmailJS credentials
    const serviceID = "service_h8fotui";  // Get this from EmailJS ** dont change, it's me azi :)
    const templateID = "template_hblzjmo";  // Get this from EmailJS
    const publicKey = "k6FlUWYcSs6faf8om";  // Get this from EmailJS

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-400 text-white">
        <div className="flex flex-col items-center justify-center px-6 md:px-20">
          {submitted ? (
            <div className="text-center mt-12">
              <h2 className="text-5xl font-bold">
                <span className="text-red-500">Thank you</span> for contacting us!
              </h2>
              <p className="mt-6 text-gray-300">
                We have received your message and will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-lg mt-12">
              <label className="mb-2 font-semibold">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 rounded-lg bg-gray-800 focus:outline-none mb-4"
                placeholder="Enter your name"
              />

              <label className="mb-2 font-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 rounded-lg bg-gray-800 focus:outline-none mb-4"
                placeholder="Enter your email"
              />

              <label className="mb-2 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-3 rounded-lg bg-gray-800 focus:outline-none mb-6"
                placeholder="Type your message here..."
                rows="5"
              ></textarea>

              <button type="submit" className="w-full bg-red-500 py-3 rounded-lg hover:bg-red-600 transition">
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
