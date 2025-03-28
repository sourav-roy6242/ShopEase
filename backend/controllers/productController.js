// import Product from "../models/productModel.js";
// import Shop from "../models/shopModel.js";

// // ✅ Upload Multiple Products
// export const addMultipleProducts = async (req, res) => {
//   try {
//     const { shopId } = req.params;
//     const products = req.body.products; // Expecting an array of products from frontend
//     const images = req.files; // Uploaded images array

//     // Check if shop exists
//     const shop = await Shop.findById(shopId);
//     if (!shop) return res.status(404).json({ message: "Shop not found" });

//     if (!Array.isArray(products) || products.length === 0) {
//       return res.status(400).json({ message: "At least one product is required" });
//     }

//     // Map through products and attach shop details
//     const newProducts = products.map((product, index) => ({
//       shopId,
//       shopName: shop.shopName,
//       ownerName: shop.ownerName,
//       shopAddress: shop.shopAddress,
//       productName: product.productName,
//       productDescription: product.productDescription,
//       productPrice: product.productPrice,
//       productImage: images[index] ? `/uploads/${images[index].filename}` : "",
//     }));

//     // Insert all products at once
//     const savedProducts = await Product.insertMany(newProducts);
//     res.status(201).json({ message: "Products added successfully", products: savedProducts });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding products", error: error.message });
//   }
// };

// // ✅ Get Products of a Shop (Now includes shop details)
// export const getProducts = async (req, res) => {
//   try {
//     const { shopId } = req.params;
//     const products = await Product.find({ shopId });

//     res.status(200).json({ products });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching products", error: error.message });
//   }
// };



// import Product from "../models/productModel.js";
// import Shop from "../models/shopModel.js";

// export const addMultipleProducts = async (req, res) => {
//   try {
//     const { shopId } = req.params;
//     const products = JSON.parse(req.body.products);
//     const images = req.files;

//     const shop = await Shop.findById(shopId);
//     if (!shop) return res.status(404).json({ message: "Shop not found" });

//     if (!Array.isArray(products) || products.length === 0) {
//       return res.status(400).json({ message: "At least one product required" });
//     }

//     const newProducts = products.map((product, index) => ({
//       shop: shopId,
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       image: images[index] ? `/uploads/${images[index].filename}` : ""
//     }));

//     const savedProducts = await Product.insertMany(newProducts);
    
//     await Shop.findByIdAndUpdate(shopId, {
//       $push: { products: { $each: savedProducts.map(p => p._id) }
//     }});

//     res.status(201).json({
//       message: `${products.length} products added to ${shop.shopName}`,
//       products: savedProducts
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error adding products",
//       error: error.message
//     });
//   }
// };

// export const getProducts = async (req, res) => {
//   try {
//     const { shopId } = req.params;
//     const shop = await Shop.findById(shopId)
//       .select('shopName ownerName shopAddress')
//       .lean();

//     if (!shop) return res.status(404).json({ message: "Shop not found" });

//     const products = await Product.find({ shop: shopId })
//       .select('name description price image -_id')
//       .lean();

//     res.status(200).json({
//       shop: {
//         name: shop.shopName,
//         owner: shop.ownerName,
//         address: shop.shopAddress
//       },
//       products
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error fetching products",
//       error: error.message
//     });
//   }
// };

import Product from "../models/productModel.js";
import Shop from "../models/shopModel.js";

// ✅ Add Multiple Products
export const addMultipleProducts = async (req, res) => {
  try {
    const { shopId } = req.params;
    const products = JSON.parse(req.body.products);
    const images = req.files;

    // Find shop
    const shop = await Shop.findById(shopId);
    if (!shop) return res.status(404).json({ message: "Shop not found" });

    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: "At least one product required" });
    }

    // Prepare new products
    const newProducts = products.map((product, index) => ({
      shopId,
      productName: product.productName,
      productDescription: product.productDescription,
      productPrice: product.productPrice,
      productImage: images[index] ? `/uploads/${images[index].filename}` : "",
    }));

    // Insert products into DB
    const savedProducts = await Product.insertMany(newProducts);

    // Update shop with product references
    await Shop.findByIdAndUpdate(shopId, {
      $push: { products: { $each: savedProducts.map(p => p._id) } },
    });

    // Send response in required format
    res.status(201).json({
      shop: {
        name: shop.shopName,
        owner: shop.ownerName,
        address: shop.shopAddress,
      },
      products: savedProducts.map(p => ({
        name: p.productName,
        description: p.productDescription,
        price: p.productPrice,
        image: p.productImage,
      })),
    });
  } catch (error) {
    res.status(500).json({ message: "Error adding products", error: error.message });
  }
};

// ✅ Get Products
export const getProducts = async (req, res) => {
  try {
    const { shopId } = req.params;

    // Find shop
    const shop = await Shop.findById(shopId).select("shopName ownerName shopAddress").lean();
    if (!shop) return res.status(404).json({ message: "Shop not found" });

    // Find products
    const products = await Product.find({ shopId })
      .select("productName productDescription productPrice productImage -_id")
      .lean();

    // Send response in required format
    res.status(200).json({
      shop: {
        name: shop.shopName,
        owner: shop.ownerName,
        address: shop.shopAddress,
      },
      products: products.map(p => ({
        name: p.productName,
        description: p.productDescription,
        price: p.productPrice,
        image: p.productImage,
      })),
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};
