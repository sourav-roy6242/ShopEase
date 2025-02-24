import express from "express";
import { registerShop } from "../controllers/shopController.js"; // ✅ Ensure correct import


const router = express.Router();

router.post("/register", registerShop); // ✅ Correct route path

export default router;
