import axios from "axios";

export const getGeocode = async (req, res) => {
  const address = req.query.address;

  if (!address) {
    return res.status(400).json({ error: "Address is required" });
  }

  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
    );

    if (response.data.length === 0) {
      return res.status(404).json({ error: "Location not found" });
    }

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching location:", error.message);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};
