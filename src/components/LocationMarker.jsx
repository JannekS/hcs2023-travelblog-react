import { Marker } from "react-map-gl";

function LocationMarker({ location, onClick }) {
  return (
    <>
      <Marker
        style={{ cursor: "pointer" }}
        longitude={location.lon}
        latitude={location.lat}
        color="orange"
        onClick={onClick}
      ></Marker>
    </>
  );
}

export default LocationMarker;
