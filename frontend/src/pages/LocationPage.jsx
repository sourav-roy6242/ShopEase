
import React, { useState, useEffect, useRef, useCallback } from "react";
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
    map.flyTo(position, 15, { animate: true, duration: 1.5 });
  }, [position, map]);
  return null;
};

const UserLocation = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default: London
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLocating, setIsLocating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");
  const [mapReady, setMapReady] = useState(false);
  const suggestionRef = useRef(null);
  const inputRef = useRef(null);

  // Get current location
  const getCurrentLocation = useCallback(() => {
    setIsLocating(true);
    setError("");
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          const newPosition = [location.coords.latitude, location.coords.longitude];
          setPosition(newPosition);
          setIsLocating(false);
          
          // Reverse geocode to get address
          fetchAddressFromCoords(location.coords.latitude, location.coords.longitude);
        },
        (error) => {
          console.error("Error fetching location", error);
          setError("Failed to get location. Please try again or enter your address manually.");
          setIsLocating(false);
        },
        { timeout: 10000, enableHighAccuracy: true }
      );
    } else {
      setError("Geolocation is not supported by your browser");
      setIsLocating(false);
    }
  }, []);

  // Get current location on mount
  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

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

  // Fetch address from coordinates (reverse geocoding)
  const fetchAddressFromCoords = async (lat, lon) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      setAddress(data.display_name || "Current location");
    } catch (error) {
      console.error("Error fetching address", error);
      setError("Failed to fetch address for this location");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch address suggestions
  const fetchAddressSuggestions = async (query) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }
    
    setIsSearching(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching address suggestions", error);
      setError("Failed to fetch address suggestions");
    } finally {
      setIsSearching(false);
    }
  };

  // Fetch coordinates for selected address
  const fetchCoordinates = async (address) => {
    if (!address.trim()) return;
    
    setIsLoading(true);
    setError("");
    
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const newLocation = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
        setPosition(newLocation);
        setAddress(data[0].display_name);
        setSuggestions([]);
      } else {
        setError("Address not found. Please try a different search term.");
      }
    } catch (error) {
      console.error("Error fetching coordinates", error);
      setError("Failed to search for address. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input change
  const handleAddressChange = (e) => {
    const query = e.target.value;
    setAddress(query);
    setError("");
    fetchAddressSuggestions(query);
  };

  // Handle selection from suggestions
  const handleSelectSuggestion = (selectedAddress) => {
    setAddress(selectedAddress.display_name);
    fetchCoordinates(selectedAddress.display_name);
    inputRef.current.blur();
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchCoordinates(address);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4a6cf7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <h1 style={styles.title}>GeoLocate Pro</h1>
        </div>
        <p style={styles.subtitle}>Find and manage locations with precision</p>
      </div>

      <div style={styles.card}>
        <div style={styles.searchSection}>
          <div style={styles.searchWrapper} ref={suggestionRef}>
            <div style={styles.searchContainer}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Enter address, city, or postal code..."
                value={address}
                onChange={handleAddressChange}
                onKeyPress={handleKeyPress}
                style={styles.input}
                disabled={isLoading}
              />
              <button 
                onClick={() => fetchCoordinates(address)} 
                style={styles.searchButton}
                disabled={isLoading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>

            {/* Current Location Button */}
            <button 
              onClick={getCurrentLocation} 
              style={styles.locationButton}
              disabled={isLocating}
            >
              {isLocating ? (
                <span style={styles.buttonContent}>
                  <span style={styles.spinner}></span> Locating...
                </span>
              ) : (
                <span style={styles.buttonContent}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Use Current Location
                </span>
              )}
            </button>
          </div>

          {/* Address Suggestions */}
          {suggestions.length > 0 && (
            <ul style={styles.suggestionBox}>
              {isSearching && (
                <li style={{...styles.suggestionItem, justifyContent: 'center'}}>
                  <span style={styles.spinner}></span> Searching...
                </li>
              )}
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectSuggestion(suggestion)}
                  style={styles.suggestionItem}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a6cf7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span style={{marginLeft: 10}}>{suggestion.display_name}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Error message */}
          {error && (
            <div style={styles.errorBox}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e53e3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12" y2="16"></line>
              </svg>
              <span style={{marginLeft: 8}}>{error}</span>
            </div>
          )}
        </div>

        <div style={styles.mapWrapper}>
          {isLoading ? (
            <div style={styles.loadingOverlay}>
              <span style={styles.spinner}></span>
              <p>Loading location...</p>
            </div>
          ) : (
            <MapContainer 
              center={position} 
              zoom={15} 
              style={styles.mapContainer}
              zoomControl={false}
              whenCreated={() => setMapReady(true)}
            >
              {mapReady && (
                <>
                  <MapUpdater position={position} />
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={position}>
                    <Popup>{address || "You are here!"}</Popup>
                  </Marker>
                </>
              )}
            </MapContainer>
          )}
        </div>
      </div>

      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a6cf7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="10" r="3"></circle>
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"></path>
            </svg>
          </div>
          <div style={styles.statContent}>
            <h3>Current Location</h3>
            <p>{position[0].toFixed(6)}, {position[1].toFixed(6)}</p>
          </div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a6cf7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div style={styles.statContent}>
            <h3>Address</h3>
            <p>{address || "Not available"}</p>
          </div>
        </div>
      </div>

      <div style={styles.footer}>
        <p>© {new Date().getFullYear()} GeoLocate Pro. All rights reserved.</p>
        <div style={styles.footerLinks}>
          <a href="#" style={styles.footerLink}>Privacy Policy</a>
          <a href="#" style={styles.footerLink}>Terms of Service</a>
          <a href="#" style={styles.footerLink}>Contact Us</a>
        </div>
      </div>
    </div>
  );
};

// Professional Styles
const styles = {
  container: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f7f9fc",
    padding: "20px",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    color: "#333",
    overflowX: "hidden",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    width: "100%",
    maxWidth: "900px",
    padding: "20px 0",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "2.5rem",
    margin: 0,
    color: "#2d3748",
    fontWeight: "700",
    background: "linear-gradient(90deg, #4a6cf7 0%, #3b82f6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#718096",
    margin: 0,
    fontWeight: "400",
  },
  card: {
    width: "90%",
    maxWidth: "1000px",
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
    zIndex: 10,
  },
  searchSection: {
    padding: "25px",
    backgroundColor: "#f8fafc",
    borderBottom: "1px solid #e2e8f0",
    position: "relative",
  },
  searchWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  searchContainer: {
    display: "flex",
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(74, 108, 247, 0.15)",
    border: "1px solid #e2e8f0",
  },
  input: {
    padding: "16px 20px",
    fontSize: "16px",
    flex: 1,
    border: "none",
    outline: "none",
    backgroundColor: "white",
    color: "#2d3748",
    fontWeight: "500",
  },
  searchButton: {
    padding: "0 24px",
    backgroundColor: "#4a6cf7",
    color: "white",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s",
  },
  locationButton: {
    padding: "14px 20px",
    fontSize: "16px",
    backgroundColor: "white",
    color: "#4a6cf7",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
  },
  buttonContent: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  spinner: {
    width: "20px",
    height: "20px",
    border: "3px solid rgba(74, 108, 247, 0.3)",
    borderTop: "3px solid #4a6cf7",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  suggestionBox: {
    position: "absolute",
    top: "calc(100% + 10px)",
    left: "25px",
    right: "25px",
    backgroundColor: "white",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)",
    zIndex: "1000",
    listStyle: "none",
    padding: "10px 0",
    margin: "0",
    maxHeight: "300px",
    overflowY: "auto",
  },
  suggestionItem: {
    padding: "14px 20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "background-color 0.2s",
    fontSize: "15px",
    fontWeight: "500",
  },
  errorBox: {
    marginTop: "15px",
    padding: "14px 18px",
    backgroundColor: "#fff5f5",
    color: "#e53e3e",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "500",
  },
  mapWrapper: {
    position: "relative",
    height: "500px",
    width: "100%",
  },
  mapContainer: {
    height: "100%",
    width: "100%",
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    color: "#4a6cf7",
    fontSize: "18px",
    fontWeight: "600",
    borderRadius: "0 0 16px 16px",
  },
  statsContainer: {
    display: "flex",
    gap: "20px",
    width: "90%",
    maxWidth: "1000px",
    marginBottom: "30px",
  },
  statCard: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.05)",
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  statIcon: {
    backgroundColor: "#f0f4ff",
    borderRadius: "12px",
    padding: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  statContent: {
    flex: 1,
  },
  statContentH3: {
    margin: "0 0 8px 0",
    fontSize: "16px",
    color: "#718096",
    fontWeight: "600",
  },
  statContentP: {
    margin: 0,
    fontSize: "18px",
    color: "#2d3748",
    fontWeight: "600",
  },
  footer: {
    padding: "20px",
    textAlign: "center",
    color: "#718096",
    fontSize: "14px",
    width: "100%",
    maxWidth: "900px",
    borderTop: "1px solid #e2e8f0",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "10px",
  },
  footerLink: {
    color: "#4a6cf7",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.2s",
  },
};

// Add global styles for hover effects
document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: #f7f9fc;
      overflow-x: hidden;
    }
    
    button {
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    button:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }
    
    .search-button:hover {
      background-color: #3b5bdb !important;
    }
    
    .location-button:hover {
      background-color: #f1f5f9 !important;
      border-color: #cbd5e0 !important;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08) !important;
    }
    
    .suggestion-item:hover {
      background-color: #f8fafc !important;
    }
    
    .footer-link:hover {
      color: #3b5bdb !important;
      text-decoration: underline;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @media (max-width: 768px) {
      .card {
        width: 95%;
      }
      
      .map-wrapper {
        height: 400px;
      }
      
      .title {
        font-size: 2rem;
      }
      
      .stats-container {
        flex-direction: column;
      }
    }
    
    @media (max-width: 480px) {
      .search-container {
        flex-direction: column;
      }
      
      .search-button {
        padding: 16px !important;
        width: 100%;
      }
      
      .location-button {
        padding: 16px !important;
        font-size: 15px;
      }
      
      .map-wrapper {
        height: 350px;
      }
      
      .title {
        font-size: 1.8rem;
      }
      
      .header {
        padding: 10px 0;
      }
    }
  </style>`
);

export default UserLocation;