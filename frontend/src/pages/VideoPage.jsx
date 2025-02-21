import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const VideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/videos");
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos", error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile || !title.trim())
      return alert("Please enter title and select a video");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("video", selectedFile);

    try {
      setUploading(true);
      await axios.post("http://localhost:4000/api/videos/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUploading(false);
      fetchVideos(); // Refresh video list after upload
      setTitle("");
      setDescription("");
      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading video", error);
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 relative">
      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.video
              controls
              className="max-w-3xl w-full rounded-lg shadow-lg"
              src={`http://localhost:4000${selectedVideo}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on video
            />
          </motion.div>
        )}
      </AnimatePresence>

      <h1 className="text-4xl font-bold text-center mb-8">
        📤 Video Upload & Playback
      </h1>

      {/* Video Upload Section */}
      <div className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Upload Recorded Video</h2>
        <input
          type="text"
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full p-2 mb-2 rounded bg-gray-700 text-white outline-none"
        />
        <textarea
          placeholder="Video Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full p-2 mb-2 rounded bg-gray-700 text-white outline-none"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4 text-white"
        />
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition font-semibold"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {/* Uploaded Videos Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">📂 Uploaded Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <motion.div
              key={video._id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedVideo(video.url)}
            >
              <video
                controls
                className="w-full rounded-md"
                src={`http://localhost:4000${video.url}`}
              />
              <p className="mt-2 text-center font-bold text-lg">
                {video.title}
              </p>
              <p className="text-center text-gray-400">{video.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
