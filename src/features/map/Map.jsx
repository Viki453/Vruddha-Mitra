import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";

import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

var coordinates = null;
function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useCallback(
    useMapEvents({
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        console.log("User location:", e.latlng);
        coordinates = e.latlng;
      },
    })
  );

  useEffect(() => {
    map.locate(); // Locate user as soon as map loads
    console.log(position);
    map.zoomIn(5);
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function Map() {
  return (
    <div className={styles.map}>
      <MapContainer
        center={[30.5937, 78.9629]}
        zoom={4}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export function getLatLng() {
  return coordinates;
}

export default Map;
