// import express from "express";
// import { uploadProduct, getShopProducts, deleteProduct, upload } from "../controllers/productController.js";

// const router = express.Router();

// // Route to upload a product (with image)
// router.post("/:shopId/products", upload.single("productImage"), uploadProduct);

// // Route to get all products for a shop
// router.get("/:shopId/products", getShopProducts);

// // Route to delete a product
// router.delete("/products/:productId", deleteProduct);

// export default router;


// import express from "express";
// import multer from "multer";
// import { addProduct, getProducts } from "../controllers/productController.js"; // ✅ Ensure correct import

// const router = express.Router();

// // ✅ Set up Multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Ensure this folder exists
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// // ✅ Route to add a product
// router.post("/:shopId/products", upload.single("productImage"), addProduct);

// // ✅ Route to get all products of a shop
// router.get("/:shopId/products", getProducts);

// export default router;



// import express from "express";
// import multer from "multer";
// import { addMultipleProducts, getProducts } from "../controllers/productController.js";

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });

// const upload = multer({ storage });

// router.post(
//   "/:shopId/products",
//   upload.array("images"),
//   addMultipleProducts
// );

// router.get("/:shopId/products", getProducts);

// export default router;


import express from "express";
import multer from "multer";
import { addMultipleProducts, getProducts } from "../controllers/productController.js";

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Routes
router.post("/:shopId/products", upload.array("images"), addMultipleProducts);
router.get("/:shopId/products", getProducts);

export default router;
