// components/Map.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [28.6526, 77.3090]; // Karkardooma Court

const Map = () => (
  <div style={{ width: '100%', height: '300px', borderRadius: '10px', marginTop: '1rem' }}>
    <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          F-318, Karkardooma Court
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);

export default Map;
