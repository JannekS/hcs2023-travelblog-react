import Map, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useEffect } from "react";
import useStore from "../stores/store";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

function MapComponent({ centerLon, centerLat, initZoom, children }) {
  const mapRef = useRef(null);
  const [flyToLocation, clearFlyTo] = useStore((state) => [
    state.flyToLocation,
    state.clearFlyTo,
  ]);

  useEffect(() => {
    flyToLocation && mapRef.current?.flyTo({ center: flyToLocation });
    return clearFlyTo;
  }, [flyToLocation]);

  function handleClick() {}

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
      ref={mapRef}
      onClick={handleClick}
    >
      {children}
      <NavigationControl />
    </Map>
  );
}

export default MapComponent;
