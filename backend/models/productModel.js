// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   shopId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Shop",
//     required: true,
//   },
//   productName: {
//     type: String,
//     required: true,
//   },
//   productDescription: {
//     type: String,
//     required: true,
//   },
//   productPrice: {
//     type: Number,
//     required: true,
//   },
//   productImage: {
//     type: String, // Will store the image filename
//     required: true,
//   },
// });

// const Product = mongoose.model("Product", productSchema);

// export default Product;

// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   shop: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Shop",
//     required: true
//   },
//   name: {  // Changed from productName
//     type: String,
//     required: true
//   },
//   description: {  // Changed from productDescription
//     type: String,
//     required: true
//   },
//   price: {  // Changed from productPrice
//     type: Number,
//     required: true
//   },
//   image: {  // Changed from productImage
//     type: String,
//     required: true
//   }
// });

// export default mongoose.model("Product", productSchema);



import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String, // Stores the image filename
    required: true,
  },
});

export default mongoose.model("Product", productSchema);
