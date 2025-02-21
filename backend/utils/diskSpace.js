import os from "os";
import diskusage from "diskusage";

const checkDiskSpace = async () => {
  try {
    const path = os.platform() === "win32" ? "C:\\" : "/";
    const { available, free, total } = await diskusage.check(path);

    console.log(`Total: ${(total / 1e9).toFixed(2)} GB`);
    console.log(`Free: ${(free / 1e9).toFixed(2)} GB`);
    console.log(`Available: ${(available / 1e9).toFixed(2)} GB`);
  } catch (err) {
    console.error("Error checking disk space:", err);
  }
};

export default checkDiskSpace; // ✅ This ensures it can be imported properly
