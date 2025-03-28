import { useState, useEffect } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const offers = [
  "Get 50% Off on Groceries!",
  "Buy 1 Get 1 Free on Electronics!",
  "Flat 30% Off on Medicines!",
  "Exclusive Gold Jewellery Discounts!",
  "Sports Gear at Unbeatable Prices!",
  "Trendy Clothes at 40% Off!",
];

const categories = [
  { name: "Grocery", image: "https://via.placeholder.com/150" },
  { name: "Electronics", image: "https://via.placeholder.com/150" },
  { name: "Medicine", image: "https://via.placeholder.com/150" },
  { name: "Jewellery", image: "https://via.placeholder.com/150" },
  { name: "Sports", image: "https://via.placeholder.com/150" },
  { name: "Clothes", image: "https://via.placeholder.com/150" },
];

export default function UserHomePage() {
  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">ShopEase</h1>
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-md text-black w-1/3"
        />
        <div className="flex gap-4">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
          <FaShoppingCart className="text-2xl cursor-pointer" />
          <button className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-md shadow hover:bg-gray-200">
            <FaUser /> Login / Signup
          </button>
        </div>
      </nav>

      {/* Offer Slider */}
      <header className="bg-yellow-400 text-center text-xl font-bold p-4 transition-opacity duration-500">
        {offers[currentOffer]}
      </header>

      {/* Categories */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {categories.map((category, index) => (
          <div key={index} className="shadow-lg p-4 text-center bg-white rounded-md">
            <img src={category.image} alt={category.name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-lg font-semibold mt-2">{category.name}</h2>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        &copy; {new Date().getFullYear()} ShopEase. All Rights Reserved.
      </footer>
    </div>
  );
}
