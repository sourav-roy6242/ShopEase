import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const ProductForm = () => {
  const [products, setProducts] = useState([
    {
      productName: "",
      productDescription: "",
      productPrice: "",
      productImage: null,
      imagePreview: null,
    },
  ]);

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    const newProducts = [...products];
    if (file) {
      newProducts[index].productImage = file;
      newProducts[index].imagePreview = URL.createObjectURL(file);
    }
    setProducts(newProducts);
  };

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setProducts(newProducts);
  };

  const handleAddProduct = () => {
    setProducts([
      ...products,
      {
        productName: "",
        productDescription: "",
        productPrice: "",
        productImage: null,
        imagePreview: null,
      },
    ]);
  };

  const handleRemoveProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const valid = products.every(
      (product) =>
        product.productName &&
        product.productDescription &&
        product.productPrice &&
        product.productImage
    );

    if (valid) {
      const formData = new FormData();
      products.forEach((product) => {
        formData.append("productName", product.productName);
        formData.append("productDescription", product.productDescription);
        formData.append("productPrice", product.productPrice);
        formData.append("productImage", product.productImage);
      });

      try {
        const response = await fetch(
          "http://localhost:5000/api/shops/{SHOP_ID}/products",
          {
            method: "POST",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            body: formData,
          }
        );

        const data = await response.json();
        if (response.ok) {
          alert("Products added successfully!");
        } else {
          alert(data.message || "Error adding products");
        }
      } catch (error) {
        alert("An error occurred: " + error.message);
      }
    } else {
      alert("Please fill all fields before submitting.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-30 p-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-xl max-w-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-white">
          Add Your Products
        </h2>

        <form onSubmit={handleSubmit}>
          {products.map((product, index) => (
            <div
              key={index}
              className="mb-8 p-6 bg-white rounded-lg shadow-lg space-y-4"
            >
              <h3 className="text-xl font-medium mb-4 text-gray-800">
                Product #{index + 1}
              </h3>

              {/* Product Name */}
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  value={product.productName}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter product name"
                />
              </div>

              {/* Product Description */}
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Product Description
                </label>
                <textarea
                  name="productDescription"
                  value={product.productDescription}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter product description"
                />
              </div>

              {/* Product Price */}
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Product Price
                </label>
                <input
                  type="number"
                  name="productPrice"
                  value={product.productPrice}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter product price"
                />
              </div>

              {/* Product Image */}
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Product Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(index, e)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                {product.imagePreview && (
                  <div className="mt-4">
                    <img
                      src={product.imagePreview}
                      alt="Product Preview"
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>

              {/* Remove Product Button */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => handleRemoveProduct(index)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Remove this Product
                </button>
              </div>
            </div>
          ))}

          {/* Add More Product Button */}
          <div className="flex justify-center mb-6">
            <button
              type="button"
              onClick={handleAddProduct}
              className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 focus:outline-none transition duration-300 ease-in-out"
            >
              Add Another Product
            </button>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out"
            >
              Submit Products
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
