// import { useEffect, useState } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";

// const VideoPage = () => {
//   const [videos, setVideos] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const fetchVideos = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/api/videos");
//       setVideos(response.data);
//     } catch (error) {
//       console.error("Error fetching videos", error);
//     }
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile || !title.trim())
//       return alert("Please enter title and select a video");

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("video", selectedFile);

//     try {
//       setUploading(true);
//       await axios.post("http://localhost:4000/api/videos/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setUploading(false);
//       fetchVideos(); // Refresh video list after upload
//       setTitle("");
//       setDescription("");
//       setSelectedFile(null);
//     } catch (error) {
//       console.error("Error uploading video", error);
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6 relative">
//       {/* Fullscreen Video Modal */}
//       <AnimatePresence>
//         {selectedVideo && (
//           <motion.div
//             className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 backdrop-blur-md z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedVideo(null)}
//           >
//             <motion.video
//               controls
//               className="max-w-3xl w-full rounded-lg shadow-lg"
//               src={`http://localhost:4000${selectedVideo}`}
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on video
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <h1 className="text-4xl font-bold text-center mb-8">
//         📤 Video Upload & Playback
//       </h1>

//       {/* Video Upload Section */}
//       <div className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold mb-4">Upload Recorded Video</h2>
//         <input
//           type="text"
//           placeholder="Video Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="block w-full p-2 mb-2 rounded bg-gray-700 text-white outline-none"
//         />
//         <textarea
//           placeholder="Video Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="block w-full p-2 mb-2 rounded bg-gray-700 text-white outline-none"
//         />
//         <input
//           type="file"
//           onChange={handleFileChange}
//           className="mb-4 text-white"
//         />
//         <button
//           onClick={handleUpload}
//           disabled={uploading}
//           className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition font-semibold"
//         >
//           {uploading ? "Uploading..." : "Upload"}
//         </button>
//       </div>

//       {/* Uploaded Videos Section */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">📂 Uploaded Videos</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {videos.map((video) => (
//             <motion.div
//               key={video._id}
//               className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
//               whileHover={{ scale: 1.05 }}
//               onClick={() => setSelectedVideo(video.url)}
//             >
//               <video
//                 controls
//                 className="w-full rounded-md"
//                 src={`http://localhost:4000${video.url}`}
//               />
//               <p className="mt-2 text-center font-bold text-lg">
//                 {video.title}
//               </p>
//               <p className="text-center text-gray-400">{video.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPage;



import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUpload, FaPlay, FaTimes, FaTrash, FaInfoCircle,
  FaFileVideo, FaSpinner, FaCloudUploadAlt, FaSearch
} from "react-icons/fa";

const VideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

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
      fetchVideos();
      setTitle("");
      setDescription("");
      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading video", error);
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this video?")) return;
    
    try {
      setDeletingId(id);
      await axios.delete(`http://localhost:4000/api/videos/${id}`);
      setVideos(videos.filter(video => video._id !== id));
    } catch (error) {
      console.error("Error deleting video", error);
    } finally {
      setDeletingId(null);
    }
  };

  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-6 relative">
      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 backdrop-blur-lg z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <button 
              className="absolute top-4 right-4 p-2 bg-red-600 rounded-full hover:bg-red-700 z-10"
              onClick={() => setSelectedVideo(null)}
            >
              <FaTimes className="text-xl" />
            </button>
            
            <motion.video
              controls
              autoPlay
              className="max-w-4xl w-full max-h-[90vh] rounded-xl shadow-2xl"
              src={`http://localhost:4000${selectedVideo}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
              <FaFileVideo className="text-blue-500" /> 
              Video Gallery
            </h1>
            <p className="text-gray-400 mt-2">Upload and manage your video content</p>
          </div>
          
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Video Upload Section */}
        <motion.div 
          className={`mb-8 bg-gray-800/50 backdrop-blur-md rounded-xl shadow-xl overflow-hidden ${isExpanded ? 'border border-blue-500' : ''}`}
          initial={false}
          animate={{ height: isExpanded ? "auto" : "auto" }}
        >
          <div 
            className="p-4 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaUpload className="text-blue-400" /> 
                Upload Recorded Video
              </h2>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaTimes className="text-gray-400" />
              </motion.div>
            </div>
          </div>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="p-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Video Title</label>
                    <input
                      type="text"
                      placeholder="Enter video title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="block w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Video File</label>
                    <div className="relative">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer bg-gray-700/50 hover:bg-gray-700">
                        {selectedFile ? (
                          <div className="flex flex-col items-center p-4">
                            <FaFileVideo className="text-blue-400 text-2xl mb-2" />
                            <p className="text-sm text-center truncate max-w-xs">
                              {selectedFile.name}
                            </p>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center p-4">
                            <FaCloudUploadAlt className="text-gray-400 text-3xl mb-2" />
                            <p className="text-sm text-gray-400">
                              Click to select video file
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              MP4, MOV, AVI (max 100MB)
                            </p>
                          </div>
                        )}
                        <input 
                          type="file" 
                          onChange={handleFileChange} 
                          className="hidden" 
                          accept="video/*"
                        />
                      </label>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 mb-2">Description</label>
                    <textarea
                      placeholder="Enter video description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="block w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                    />
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={handleUpload}
                    disabled={uploading}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition font-semibold disabled:opacity-50"
                  >
                    {uploading ? (
                      <>
                        <FaSpinner className="animate-spin" /> Uploading...
                      </>
                    ) : (
                      <>
                        <FaUpload /> Upload Video
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Uploaded Videos Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <FaPlay className="text-green-500" /> 
              Your Videos
              <span className="text-sm bg-blue-500 rounded-full px-2 py-1 ml-2">
                {videos.length}
              </span>
            </h2>
          </div>
          
          {filteredVideos.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-gray-800/50 rounded-xl p-8 max-w-md mx-auto">
                <FaInfoCircle className="text-blue-500 text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No videos found</h3>
                <p className="text-gray-400 mb-4">
                  {searchTerm ? "Try a different search term" : "Upload your first video to get started"}
                </p>
                <button 
                  onClick={() => setIsExpanded(true)}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg"
                >
                  Upload Video
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVideos.map((video) => (
                <motion.div
                  key={video._id}
                  className="group bg-gray-800/50 backdrop-blur-md rounded-xl shadow-xl hover:shadow-2xl transition-all overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="relative">
                    <div 
                      className="relative h-48 overflow-hidden cursor-pointer"
                      onClick={() => setSelectedVideo(video.url)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition">
                          <FaPlay className="text-white text-xl" />
                        </div>
                      </div>
                      <video
                        className="w-full h-full object-cover"
                        src={`http://localhost:4000${video.url}`}
                      />
                    </div>
                    
                    <button
                      className="absolute top-3 right-3 p-2 bg-red-600/80 rounded-full hover:bg-red-700 z-20"
                      onClick={() => handleDelete(video._id)}
                      disabled={deletingId === video._id}
                    >
                      {deletingId === video._id ? (
                        <FaSpinner className="animate-spin" />
                      ) : (
                        <FaTrash />
                      )}
                    </button>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                      <h3 className="font-bold text-lg truncate">{video.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-gray-300 text-sm min-h-[60px] line-clamp-3">
                      {video.description || "No description provided"}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <button
                        onClick={() => setSelectedVideo(video.url)}
                        className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                      >
                        <FaPlay /> Play
                      </button>
                      <span className="text-xs text-gray-500">
                        {new Date(video.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;