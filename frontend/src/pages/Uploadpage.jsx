// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";


// const ProductForm = () => {

 

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
//     const newProducts = [...products];
//     if (file) {
//       newProducts[index].productImage = file;
//       newProducts[index].imagePreview = URL.createObjectURL(file);
//     }
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
//     const newProducts = products.filter((_, i) => i !== index);
//     setProducts(newProducts);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const valid = products.every(
//       (product) =>
//         product.productName &&
//         product.productDescription &&
//         product.productPrice &&
//         product.productImage
//     );

//     if (valid) {
//       const formData = new FormData();
//       products.forEach((product) => {
//         formData.append("productName", product.productName);
//         formData.append("productDescription", product.productDescription);
//         formData.append("productPrice", product.productPrice);
//         formData.append("productImage", product.productImage);
//       });

//       try {
//         const response = await fetch(
//           "http://localhost:4000/api/shops/{SHOP_ID}/products",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//             body: formData,
//           }
//         );

//         const data = await response.json();
//         if (response.ok) {
//           alert("Products added successfully!");
//         } else {
//           alert(data.message || "Error adding products");
//         }
//       } catch (error) {
//         alert("An error occurred: " + error.message);
//       }
//     } else {
//       alert("Please fill all fields before submitting.");
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="container mx-auto my-30 p-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-xl max-w-lg">
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

//               {/* Product Name */}
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

//               {/* Product Description */}
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

//               {/* Product Price */}
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

//               {/* Product Image */}
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

//               {/* Remove Product Button */}
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

//           {/* Add More Product Button */}
//           <div className="flex justify-center mb-6">
//             <button
//               type="button"
//               onClick={handleAddProduct}
//               className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 focus:outline-none transition duration-300 ease-in-out"
//             >
//               Add Another Product
//             </button>
//           </div>

//           {/* Submit Button */}
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
  
//     </div>
//   );
// };

// export default ProductForm;


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductForm = () => {
  const navigate = useNavigate();
  const [shopId, setShopId] = useState(null);

  // Fetch the Shop ID from localStorage
  // useEffect(() => {
  //   const storedShopId = localStorage.getItem("shopId");
    
  //   console.log("Retrieved shopId from localStorage:", storedShopId); // Debugging
  //   console.log(localStorage.getItem("shopId"));

  //   if (storedShopId) {
  //     setShopId(storedShopId);
  //   } else {
  //     alert("Shop ID not found. Please register your shop first.");
  //     // Redirect if shopId is missing
  //   }
  // }, [navigate]);

  useEffect(() => {
    const storedShopId = localStorage.getItem("shopId");
    console.log("Retrieved shopId from localStorage:", storedShopId);
  
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
    
    const newProducts = [...products];
    newProducts[index].productImage = file;
    newProducts[index].imagePreview = URL.createObjectURL(file);
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
    setProducts(products.filter((_, i) => i !== index));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!shopId) {
  //     alert("Shop ID is missing. Please register your shop first.");
  //     return;
  //   }

  //   const valid = products.every(
  //     (product) =>
  //       product.productName &&
  //       product.productDescription &&
  //       product.productPrice &&
  //       product.productImage
  //   );

  //   if (!valid) {
  //     alert("Please fill all fields before submitting.");
  //     return;
  //   }

  //   const formData = new FormData();
  //   products.forEach((product, index) => {
  //     formData.append(`products[${index}][productName]`, product.productName);
  //     formData.append(
  //       `products[${index}][productDescription]`,
  //       product.productDescription
  //     );
  //     formData.append(`products[${index}][productPrice]`, product.productPrice);
  //     formData.append(`products[${index}][productImage]`, product.productImage);
  //   });

  //   try {
  //     console.log("Submitting products to shopId:", shopId); // Debugging
  //     const response = await fetch(
  //       `http://localhost:4000/api/shops/${shopId}/products`,
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     const data = await response.json();
  //     if (response.ok) {
  //       alert("Products added successfully!");
  //       navigate("/dashboard"); // Redirect after successful upload
  //     } else {
  //       alert(data.message || "Error adding products");
  //     }
  //   } catch (error) {
  //     alert("An error occurred: " + error.message);
  //   }
  // };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   if (!shopId) {
  //     alert("Shop ID is missing. Please register your shop first.");
  //     return;
  //   }
  
  //   const formData = new FormData();
    
  //   products.forEach((product, index) => {
  //     formData.append("productName", product.productName);
  //     formData.append("productDescription", product.productDescription);
  //     formData.append("productPrice", product.productPrice);
  //     formData.append("productImage", product.productImage);
  //   });
  
  //   try {
  //     console.log("Submitting products to shopId:", shopId);
  //     const response = await fetch(
  //       `http://localhost:4000/api/shops/${shopId}/products`,
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );
  
  //     const data = await response.json();
  //     console.log("Server Response:", data);
  
  //     if (response.ok) {
  //       alert("Products added successfully!");
  //       navigate("/dashboard");
  //     } else {
  //       alert(data.message || "Error adding products");
  //     }
  //   } catch (error) {
  //     alert("An error occurred: " + error.message);
  //   }
  // };
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   if (!shopId) {
  //     alert("Shop ID is missing. Please register your shop first.");
  //     return;
  //   }
  
  //   for (const product of products) {
  //     const formData = new FormData();
  //     formData.append("productName", product.productName);
  //     formData.append("productDescription", product.productDescription);
  //     formData.append("productPrice", product.productPrice);
  //     formData.append("productImage", product.productImage); // Ensure image is sent correctly
  
  //     try {
  //       console.log("Submitting product to shopId:", shopId);
  //       const response = await fetch(
  //         `http://localhost:4000/api/shops/${shopId}/products`,
  //         {
  //           method: "POST",
  //           body: formData,
  //         }
  //       );
  
  //       const data = await response.json();
  //       console.log("Server Response:", data);
  
  //       if (!response.ok) {
  //         throw new Error(data.message || "Error adding products");
  //       }
  //     } catch (error) {
  //       alert("An error occurred: " + error.message);
  //     }
  //   }
  
  //   alert("Products added successfully!");
  //   navigate("/dashboard");
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!shopId) {
      alert("Shop ID is missing. Please register your shop first.");
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
      alert("Please fill all fields for all products before submitting.");
      return;
    }
  
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
  
    try {
      const response = await fetch(
        `http://localhost:4000/api/shops/${shopId}/products`,
        {
          method: "POST",
          body: formData,
        }
      );
  
      const data = await response.json();
      if (response.ok) {
        alert(`${products.length} products added successfully!`);
        navigate("/dashboard");
      } else {
        alert(data.message || "Error adding products");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-10 p-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-xl max-w-lg">
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
                Product {index + 1}
              </h3>

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

          <div className="flex justify-center mb-6">
            <button
              type="button"
              onClick={handleAddProduct}
              className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 focus:outline-none transition duration-300 ease-in-out"
            >
              Add Another Product
            </button>
          </div>

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
      <Footer />
    </div>
  );
};

export default ProductForm;
