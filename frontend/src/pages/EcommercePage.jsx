import React, { useState } from "react";
import {
  FaStar,
  FaFilter,
  FaShoppingCart,
  FaTshirt,
  FaShoePrints,
  FaSearch,
  FaTags,
  FaHeart
} from "react-icons/fa";

const productsData = [
  {
    id: 1,
    name: "Nike Air Max",
    category: "Shoes",
    price: 120,
    company: "Nike",
    gender: "Male",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Adidas Ultra Boost",
    category: "Shoes",
    price: 150,
    company: "Adidas",
    gender: "Female",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Puma T-Shirt",
    category: "Clothing",
    price: 35,
    company: "Puma",
    gender: "Male",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Zara Dress",
    category: "Clothing",
    price: 70,
    company: "Zara",
    gender: "Female",
    image: "https://via.placeholder.com/300x200",
  },
];

const categories = [
  { name: "All", icon: <FaFilter /> },
  { name: "Shoes", icon: <FaShoePrints /> },
  { name: "Clothing", icon: <FaTshirt /> },
];
const companies = ["All", "Nike", "Adidas", "Puma", "Zara"];
const genders = ["All", "Male", "Female"];
const sortOptions = ["Default", "Low to High", "High to Low"];

const EcommercePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [sortOrder, setSortOrder] = useState("Default");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = productsData
    .filter(
      (p) =>
        (selectedCategory === "All" || p.category === selectedCategory) &&
        (selectedCompany === "All" || p.company === selectedCompany) &&
        (selectedGender === "All" || p.gender === selectedGender) &&
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "Low to High") return a.price - b.price;
      if (sortOrder === "High to Low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6">
      {/* Search Bar */}
      <div className="mb-6 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow w-full">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {/* Left: Filters */}
        <div className="lg:col-span-1 bg-white shadow-md rounded-xl p-4 text-sm">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FaFilter /> Filter
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Sort By</label>
              <select
                className="w-full border px-2 py-1 rounded-md"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                {sortOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Company</label>
              <select
                className="w-full border px-2 py-1 rounded-md"
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
              >
                {companies.map((comp) => (
                  <option key={comp}>{comp}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Gender</label>
              <select
                className="w-full border px-2 py-1 rounded-md"
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
              >
                {genders.map((gen) => (
                  <option key={gen}>{gen}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Category</label>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`flex items-center gap-2 w-full text-left px-2 py-1 rounded-md ${
                      selectedCategory === cat.name ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Offers</label>
              <div className="flex items-center gap-2 text-green-600">
                <FaTags /> Upto 50% Off
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Wishlist</label>
              <div className="flex items-center gap-2 text-pink-500">
                <FaHeart /> View Wishlist
              </div>
            </div>
          </div>
        </div>

        {/* Center: Products */}
        <div className="lg:col-span-5 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h3 className="text-md font-semibold text-gray-800 mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{product.company}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold text-lg">
                  ${product.price}
                </span>
                <button className="flex items-center gap-2 text-sm bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700">
                  <FaShoppingCart /> Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcommercePage;
