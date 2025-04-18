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
