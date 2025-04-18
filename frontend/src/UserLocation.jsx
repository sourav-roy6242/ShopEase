import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";

const UserLocation = () => {
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState({ lat: 22.5726, lng: 88.3639 }); // Default: Kolkata
  

  const getCoordinates = async () => {
    if (!address) return;
  
    try {
      const response = await axios.get(`http://localhost:4000/geocode?address=${encodeURIComponent(address)}`);
  
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setLocation({ lat: parseFloat(lat), lng: parseFloat(lon) });
      } else {
        alert("Location not found!");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };
  
  

  return (
    <div>
      <h2>Enter Your Address</h2>
      <input
        type="text"
        placeholder="Enter address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ padding: "8px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={getCoordinates} style={{ padding: "8px 12px", cursor: "pointer" }}>
        Show Location
      </button>

      <MapContainer center={location} zoom={15} style={{ height: "400px", width: "100%", marginTop: "20px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location}>
          <Popup>Your Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default UserLocation;
