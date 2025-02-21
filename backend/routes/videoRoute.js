import express from "express";
import {
  uploadVideo,
  getVideos,
  upload,
} from "../controllers/videoController.js";

const router = express.Router();

router.post("/upload", upload.single("video"), uploadVideo);
router.get("/", getVideos);

export default router;
