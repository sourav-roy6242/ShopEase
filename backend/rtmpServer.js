import NodeMediaServer from "node-media-server";

const config = {
  rtmp: {
    port: 1935, // RTMP server port
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000, // HTTP server port for HLS playback
    allow_origin: "*",
  },
};

const nms = new NodeMediaServer(config);
nms.run();

console.log("✅ RTMP Server is running on port 1935");
console.log("✅ HTTP Server is running on port 8000");
