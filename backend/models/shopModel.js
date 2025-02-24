import { Schema, model } from "mongoose";

const shopSchema = new Schema({
  ownerName: {
    type: String,
    required: true,
  },
  shopName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    // Updated from "phone"
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  shopAddress: {
    // Updated from "address"
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

export default model("Shop", shopSchema);
