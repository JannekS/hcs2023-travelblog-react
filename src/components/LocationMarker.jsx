import { Marker, Popup } from "react-map-gl";
import { useState } from "react";

function LocationMarker({ location }) {
  const [showPopup, setShowPopup] = useState(false);

  function handleMarkerClick() {
    setShowPopup(!showPopup);
  }
  return (
    <>
      <Marker
        style={{ cursor: "pointer" }}
        longitude={location.lon}
        latitude={location.lat}
        color="orange"
        onClick={handleMarkerClick}
      ></Marker>
      {showPopup && (
        <Popup
          longitude={location.lon}
          latitude={location.lat}
          anchor="bottom"
          offset={30}
          closeOnClick={false}
          className="w-32 p-1 rounded-md"
          onClose={() => setShowPopup(false)}
        >
          You are here
        </Popup>
      )}
    </>
  );
}

export default LocationMarker;
