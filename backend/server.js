import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
import videoRoute from "./routes/videoRoute.js";
import checkDiskSpace from "./utils/diskSpace.js";
import shopRoute from "./routes/shopRoute.js";
import shopRoute from "./routes/shopRoute.js";
import axios from "axios"; // ✅ Fixed missing import

import productRoutes from "./routes/productRoute.js";
import DeliveryboyRouter from "./routes/deliveryboyRoute.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// ✅ Connect to MongoDB with error handling
connectDB().catch((err) => {
  console.error("❌ MongoDB connection failed:", err);
});

checkDiskSpace();

// ✅ Allow multiple origins for development
const allowedOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];

// ✅ Apply middleware before defining routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);




// ✅ Serve uploaded videos
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Geocode API Route
app.get("/geocode", async (req, res) => {
  const address = req.query.address;

  if (!address) {
    console.log("❌ No address provided!");
    return res.status(400).json({ error: "Address is required" });
  }

  try {
    console.log(`🔍 Searching for address: ${address}`);

    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
    );

    console.log("📍 API Response:", response.data);

    if (response.data.length === 0) {
      console.log("❌ Location not found!");
      return res.status(404).json({ error: "Location not found" });
    }

    res.json(response.data);
  } catch (error) {
    console.error("❌ Error fetching location:", error.message);
    console.error("⚠️ Full error:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});

// ✅ Routes
app.use("/api/videos", videoRoute);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/shops", shopRoute);
app.use("/api/shops", productRoutes);
app.use("/api/deliveryboy", DeliveryboyRouter);

// ✅ API Test Route
app.get("/", (req, res) => res.send("API Working"));

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Unhandled Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// ✅ Start Server
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));



