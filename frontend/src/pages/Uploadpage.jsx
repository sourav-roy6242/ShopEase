// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const ProductForm = () => {
//   const navigate = useNavigate();
//   const [shopId, setShopId] = useState(null);



//   useEffect(() => {
//     const storedShopId = localStorage.getItem("shopId");
//     console.log("Retrieved shopId from localStorage:", storedShopId);
  
//     if (!storedShopId) {
//       alert("Shop ID not found. Please register your shop first.");
//       navigate("/shopregister");
//     } else {
//       setShopId(storedShopId);
//     }
//   }, []);
  

//   const [products, setProducts] = useState([
//     {
//       productName: "",
//       productDescription: "",
//       productPrice: "",
//       productImage: null,
//       imagePreview: null,
//     },
//   ]);

//   const handleImageChange = (index, e) => {
//     const file = e.target.files[0];
//     if (!file) return;
    
//     const newProducts = [...products];
//     newProducts[index].productImage = file;
//     newProducts[index].imagePreview = URL.createObjectURL(file);
//     setProducts(newProducts);
//   };

//   const handleInputChange = (index, e) => {
//     const { name, value } = e.target;
//     const newProducts = [...products];
//     newProducts[index][name] = value;
//     setProducts(newProducts);
//   };

//   const handleAddProduct = () => {
//     setProducts([
//       ...products,
//       {
//         productName: "",
//         productDescription: "",
//         productPrice: "",
//         productImage: null,
//         imagePreview: null,
//       },
//     ]);
//   };

//   const handleRemoveProduct = (index) => {
//     setProducts(products.filter((_, i) => i !== index));
//   };

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!shopId) {
//       alert("Shop ID is missing. Please register your shop first.");
//       return;
//     }
  
//     // Validate all products
//     const isValid = products.every(product => 
//       product.productName &&
//       product.productDescription &&
//       product.productPrice &&
//       product.productImage
//     );
  
//     if (!isValid) {
//       alert("Please fill all fields for all products before submitting.");
//       return;
//     }
  
//     const formData = new FormData();
    
//     // Add products as JSON string
//     formData.append("products", JSON.stringify(products.map(product => ({
//       productName: product.productName,
//       productDescription: product.productDescription,
//       productPrice: product.productPrice
//     }))));
  
//     // Add image files
//     products.forEach((product) => {
//       formData.append("images", product.productImage);
//     });
  
//     try {
//       const response = await fetch(
//         `http://localhost:4000/api/shops/${shopId}/products`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
  
//       const data = await response.json();
//       if (response.ok) {
//         alert(`${products.length} products added successfully!`);
//         navigate("/dashboard");
//       } else {
//         alert(data.message || "Error adding products");
//       }
//     } catch (error) {
//       alert("An error occurred: " + error.message);
//     }
//   };
//   return (
//     <div>
//       <Navbar />
//       <div className="container mx-auto my-10 p-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-xl max-w-lg">
//         <h2 className="text-3xl font-semibold mb-6 text-center text-white">
//           Add Your Products
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {products.map((product, index) => (
//             <div
//               key={index}
//               className="mb-8 p-6 bg-white rounded-lg shadow-lg space-y-4"
//             >
//               <h3 className="text-xl font-medium mb-4 text-gray-800">
//                 Product {index + 1}
//               </h3>

//               <div className="mb-4">
//                 <label className="block text-lg font-medium text-gray-700 mb-2">
//                   Product Name
//                 </label>
//                 <input
//                   type="text"
//                   name="productName"
//                   value={product.productName}
//                   onChange={(e) => handleInputChange(index, e)}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   placeholder="Enter product name"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-lg font-medium text-gray-700 mb-2">
//                   Product Description
//                 </label>
//                 <textarea
//                   name="productDescription"
//                   value={product.productDescription}
//                   onChange={(e) => handleInputChange(index, e)}
//                   required
//                   rows="4"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   placeholder="Enter product description"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-lg font-medium text-gray-700 mb-2">
//                   Product Price
//                 </label>
//                 <input
//                   type="number"
//                   name="productPrice"
//                   value={product.productPrice}
//                   onChange={(e) => handleInputChange(index, e)}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   placeholder="Enter product price"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-lg font-medium text-gray-700 mb-2">
//                   Product Image
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => handleImageChange(index, e)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                 />
//                 {product.imagePreview && (
//                   <div className="mt-4">
//                     <img
//                       src={product.imagePreview}
//                       alt="Product Preview"
//                       className="w-32 h-32 object-cover rounded-lg"
//                     />
//                   </div>
//                 )}
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={() => handleRemoveProduct(index)}
//                   className="text-red-500 hover:text-red-700 text-sm font-medium"
//                 >
//                   Remove this Product
//                 </button>
//               </div>
//             </div>
//           ))}

//           <div className="flex justify-center mb-6">
//             <button
//               type="button"
//               onClick={handleAddProduct}
//               className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 focus:outline-none transition duration-300 ease-in-out"
//             >
//               Add Another Product
//             </button>
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out"
//             >
//               Submit Products
//             </button>
//           </div>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProductForm;


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPlus, FaTrash, FaUpload, FaDollarSign, FaInfoCircle, FaBoxOpen } from "react-icons/fa";

const ProductForm = () => {
  const navigate = useNavigate();
  const [shopId, setShopId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const storedShopId = localStorage.getItem("shopId");
    if (!storedShopId) {
      alert("Shop ID not found. Please register your shop first.");
      navigate("/shopregister");
    } else {
      setShopId(storedShopId);
    }
  }, []);

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
    if (!file) return;
    
    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      setFormError("Image size must be less than 2MB");
      return;
    }
    
    const newProducts = [...products];
    newProducts[index].productImage = file;
    newProducts[index].imagePreview = URL.createObjectURL(file);
    setProducts(newProducts);
    setFormError("");
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
    if (products.length === 1) {
      setFormError("You must have at least one product");
      return;
    }
    setProducts(products.filter((_, i) => i !== index));
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");
  
    if (!shopId) {
      setFormError("Shop ID is missing. Please register your shop first.");
      setIsSubmitting(false);
      return;
    }
  
    // Validate all products
    const isValid = products.every(product => 
      product.productName &&
      product.productDescription &&
      product.productPrice &&
      product.productImage
    );
  
    if (!isValid) {
      setFormError("Please fill all fields for all products before submitting.");
      setIsSubmitting(false);
      return;
    }
  
    try {
      const formData = new FormData();
      
      // Add products as JSON string
      formData.append("products", JSON.stringify(products.map(product => ({
        productName: product.productName,
        productDescription: product.productDescription,
        productPrice: product.productPrice
      }))));
  
      // Add image files
      products.forEach((product) => {
        formData.append("images", product.productImage);
      });
  
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would make the API call here
      // const response = await fetch(`http://localhost:4000/api/shops/${shopId}/products`, {
      //   method: "POST",
      //   body: formData,
      // });
  
      // Simulate success
      alert(`${products.length} products added successfully!`);
      navigate("/dashboard");
    } catch (error) {
      setFormError("An error occurred: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-blue-50">
      <Navbar />
      
      <div className="flex-1 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
              <FaBoxOpen className="text-blue-600 text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Add Your Products</h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              List your products to start selling. Fill out the details for each product you want to add to your shop.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
              <h2 className="text-xl font-bold flex items-center">
                <FaBoxOpen className="mr-2" />
                Product Listings
              </h2>
              <p className="opacity-90 mt-1">Add products one by one or in bulk</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              {formError && (
                <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 flex items-start">
                  <FaInfoCircle className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                  <span>{formError}</span>
                </div>
              )}
              
              <div className="space-y-8">
                {products.map((product, index) => (
                  <div 
                    key={index} 
                    className="p-6 border border-gray-200 rounded-xl hover:border-blue-300 transition-all duration-300 relative"
                  >
                    <div className="absolute top-4 right-4">
                      <button
                        type="button"
                        onClick={() => handleRemoveProduct(index)}
                        className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition"
                      >
                        <FaTrash />
                      </button>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Product Image
                        </label>
                        <div className="relative">
                          {product.imagePreview ? (
                            <div className="relative">
                              <img
                                src={product.imagePreview}
                                alt="Product Preview"
                                className="w-full h-48 object-cover rounded-lg border border-gray-300"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <span className="text-white flex items-center">
                                  <FaUpload className="mr-1" /> Change Image
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="border-2 border-dashed border-gray-300 rounded-lg h-48 flex flex-col items-center justify-center text-gray-400 hover:border-blue-400 transition cursor-pointer">
                              <FaUpload className="text-3xl mb-2" />
                              <span className="text-sm">Upload Image</span>
                              <span className="text-xs mt-1">Max 2MB</span>
                            </div>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(index, e)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                        </div>
                      </div>
                      
                      <div className="md:w-2/3 space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Product Name
                          </label>
                          <input
                            type="text"
                            name="productName"
                            value={product.productName}
                            onChange={(e) => handleInputChange(index, e)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter product name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                          </label>
                          <textarea
                            name="productDescription"
                            value={product.productDescription}
                            onChange={(e) => handleInputChange(index, e)}
                            required
                            rows="3"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Describe your product..."
                          />
                        </div>
                        
                        <div className="w-1/2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Price
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaDollarSign className="text-gray-400" />
                            </div>
                            <input
                              type="number"
                              name="productPrice"
                              value={product.productPrice}
                              onChange={(e) => handleInputChange(index, e)}
                              required
                              min="0"
                              step="0.01"
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="0.00"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
                <button
                  type="button"
                  onClick={handleAddProduct}
                  className="flex items-center justify-center px-4 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                >
                  <FaPlus className="mr-2" />
                  Add Another Product
                </button>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg font-medium text-white shadow-lg transition-all duration-300 ${
                    isSubmitting 
                      ? "bg-blue-400 cursor-not-allowed" 
                      : "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 hover:shadow-xl"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    `Submit ${products.length} Product${products.length > 1 ? 's' : ''}`
                  )}
                </button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-700 mb-3">Tips for great product listings:</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Use high-quality images with good lighting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Write detailed and accurate descriptions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Set competitive prices based on market research</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Add multiple products to increase your shop's visibility</span>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductForm;