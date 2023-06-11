import Map, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

function MapComponent({ centerLon, centerLat, initZoom, children }) {
  return (
    <Map
      initialViewState={{
        longitude: centerLon,
        latitude: centerLat,
        zoom: initZoom,
      }}
      style={{ borderRadius: "0.5rem" }}
      mapStyle="mapbox://styles/mapbox/outdoors-v9"
      renderWorldCopies={false}
      scrollZoom={false}
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {children}
      <NavigationControl />
    </Map>
  );
}

export default MapComponent;
