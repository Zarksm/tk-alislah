"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "@/lib/fixLeafletIcon";

const MapLeaflet = () => {
  const position = [-7.316, 107.756]; // koordinat sekolah

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "400px", width: "100%", borderRadius: "10px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={new L.Icon.Default()}>
        <Popup>📍 TK Al Ishlah</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapLeaflet;
