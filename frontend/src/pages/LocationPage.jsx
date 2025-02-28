import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Component to smoothly update the map position
const MapUpdater = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(position, 15, { animate: true });
  }, [position, map]);
  return null;
};

const UserLocation = () => {
  const [position, setPosition] = useState([22.5726, 88.3639]); // Default: Kolkata
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const suggestionRef = useRef(null);

  // Get current location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          setPosition([location.coords.latitude, location.coords.longitude]);
        },
        (error) => console.error("Error fetching location", error)
      );
    }
  }, []);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch address suggestions
  const fetchAddressSuggestions = async (query) => {
    if (query.length < 3) return setSuggestions([]);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching address suggestions", error);
    }
  };

  // Fetch coordinates for selected address
  const fetchCoordinates = async (address) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const newLocation = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
        setPosition(newLocation);
        setSuggestions([]);
      } else {
        alert("Address not found!");
      }
    } catch (error) {
      console.error("Error fetching coordinates", error);
    }
  };

  // Handle input change
  const handleAddressChange = (e) => {
    const query = e.target.value;
    setAddress(query);
    fetchAddressSuggestions(query);
  };

  // Handle selection from suggestions
  const handleSelectSuggestion = (selectedAddress) => {
    setAddress(selectedAddress.display_name);
    fetchCoordinates(selectedAddress.display_name);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Enter Your Address</h2>

      <div style={styles.searchWrapper} ref={suggestionRef}>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={handleAddressChange}
          style={styles.input}
        />
        <button onClick={() => fetchCoordinates(address)} style={styles.button}>
          Search
        </button>

        {/* Address Suggestions - Now fully visible above the map */}
        {suggestions.length > 0 && (
          <ul style={styles.suggestionBox}>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelectSuggestion(suggestion)}
                style={styles.suggestionItem}
              >
                {suggestion.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={styles.mapWrapper}>
        <MapContainer center={position} zoom={15} style={styles.mapContainer}>
          <MapUpdater position={position} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>{address || "You are here!"}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  searchWrapper: {
    position: "relative",
    width: "80%",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 999, // Ensures it stays on top
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "5px",
    zIndex: 2, // Keeps input above suggestions
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    marginTop: "10px",
  },
  suggestionBox: {
    position: "absolute",
    top: "100%", // Positioned below the input
    left: "0",
    width: "100%",
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    zIndex: 1000, // Ensures suggestions stay on top of the map
    listStyle: "none",
    padding: "5px",
    margin: "0",
    maxHeight: "200px",
    overflowY: "auto",
  },
  suggestionItem: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
  },
  mapWrapper: {
    width: "90%",
    maxWidth: "1000px",
    marginTop: "20px",
    position: "relative",
    zIndex: 1, // Keeps it below the search suggestions
  },
  mapContainer: {
    height: "70vh",
    width: "100%",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
};

export default UserLocation;
