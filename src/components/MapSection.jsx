import { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

function MapSection() {
  const [showPopup, setShowPopup] = useState(false);

  function handleMarkerClick() {
    setShowPopup(!showPopup);
    console.log(showPopup);
  }
  return (
    <section className="sticky top-12 w-full h-[85vh] lg:h-[80vh] lg:w-1/2 px-4 mb-4">
      <div className="mt-0 lg:mt-6 pt-2 lg:pt-0 rounded-md h-[85vh] lg:h-[80vh]">
        <Map
          initialViewState={{
            longitude: 13.41,
            latitude: 52.52,
            zoom: 6,
          }}
          style={{ borderRadius: "0.5rem" }}
          mapStyle="mapbox://styles/mapbox/outdoors-v9"
          renderWorldCopies={false}
          scrollZoom={false}
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          <Marker
            style={{ cursor: "pointer" }}
            longitude={13.41}
            latitude={52.52}
            color="orange"
            onClick={handleMarkerClick}
          ></Marker>
          {showPopup && (
            <Popup
              longitude={13.41}
              latitude={52.52}
              anchor="bottom"
              offset={25}
              closeOnClick={false}
              className="w-32 p-1 rounded-md"
              onClose={() => setShowPopup(false)}
            >
              You are here
            </Popup>
          )}
          <NavigationControl />
        </Map>
      </div>
    </section>
  );
}

export default MapSection;
