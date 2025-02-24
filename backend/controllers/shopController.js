import Shop from "../models/shopModel.js"; // Ensure correct model import
import routes from "../routes/shopRoute.js"; // Ensure correct route import

export const registerShop = async (req, res) => {
  try {
    const { ownerName, shopName, phoneNumber, email, shopAddress, category } =
      req.body;

    // Validate required fields
    if (
      !ownerName ||
      !shopName ||
      !phoneNumber ||
      !email ||
      !shopAddress ||
      !category
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if shop already exists
    const existingShop = await Shop.findOne({ email });
    if (existingShop) {
      return res
        .status(400)
        .json({ message: "Shop already registered with this email" });
    }

    // Create new shop
    const newShop = new Shop({
      ownerName,
      shopName,
      phoneNumber,
      email,
      shopAddress,
      category,
    });

    await newShop.save();
    res
      .status(201)
      .json({ message: "Shop registered successfully", shop: newShop });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
