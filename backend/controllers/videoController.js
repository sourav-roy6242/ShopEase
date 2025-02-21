import Video from "../models/videoModel.js";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("video/")) {
      cb(null, true);
    } else {
      cb(new Error("Only video files are allowed!"), false);
    }
  },
});

// Upload Video
export const uploadVideo = async (req, res) => {
  try {
    if (!req.file)
      return res.status(400).json({ error: "No video file uploaded" });

    const newVideo = new Video({
      title: req.body.title || "Untitled Video",
      description: req.body.description || "No description",
      filename: req.file.filename,
      url: `/uploads/${req.file.filename}`,
    });

    await newVideo.save();
    res
      .status(201)
      .json({ message: "Video uploaded successfully!", video: newVideo });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get All Videos
export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.status(200).json(videos);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ error: "Error fetching videos" });
  }
};

export { upload };
