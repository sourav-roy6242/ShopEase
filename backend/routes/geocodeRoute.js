import express from "express";
import { getGeocode } from "../controllers/geocodeController.js";

const router = express.Router();

router.get("/", getGeocode);

export default router;
