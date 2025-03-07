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
  console.error("MongoDB connection failed:", err);
});

checkDiskSpace();

// ✅ Allow multiple origins for development
const allowedOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];

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
  console.error("Unhandled Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// ✅ Start Server
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));



