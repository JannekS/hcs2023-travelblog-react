import { useState } from "react";
import Map, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import LocationMarker from "./LocationMarker";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

function MapSection({ blogPosts, focusLocation }) {
  return (
    <section className="sticky top-12 w-full h-[85vh] lg:h-[80vh] lg:w-1/2 px-4 mb-4">
      {focusLocation ? (
        <div className="mt-0 lg:mt-6 pt-2 lg:pt-0 rounded-md h-[85vh] lg:h-[80vh]">
          <Map
            initialViewState={{
              longitude: focusLocation.lon,
              latitude: focusLocation.lat,
              zoom: 2,
            }}
            style={{ borderRadius: "0.5rem" }}
            mapStyle="mapbox://styles/mapbox/outdoors-v9"
            renderWorldCopies={false}
            scrollZoom={false}
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            <LocationMarker location={focusLocation} />
            <NavigationControl />
          </Map>
        </div>
      ) : (
        <p>please wait...</p>
      )}
    </section>
  );
}

export default MapSection;
