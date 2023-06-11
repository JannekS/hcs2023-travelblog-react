import { Marker } from "react-map-gl";

function MapMarker({ lon, lat, onClick }) {
  return (
    <>
      <Marker
        style={{ cursor: "pointer" }}
        longitude={lon}
        latitude={lat}
        color="orange"
        onClick={onClick}
      ></Marker>
    </>
  );
}

export default MapMarker;
