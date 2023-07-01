import { useEffect, useState } from "react";
import MapMarker from "./MapMarker";
import MapPopup from "./MapPopup";
import MapComponent from "./MapComponent";

function MapSection({ blogPosts, focusLocation }) {
  const [showPopup, setShowPopup] = useState(false);
  const [chosenLocation, setChosenLocation] = useState();
  const [mapHeightOffset, setMapHeightOffest] = useState("108px");

  useEffect(() => {
    window.addEventListener("scroll", adjustMapSize);
    return () => {
      window.removeEventListener("scroll", adjustMapSize);
    };
  }, []);

  function adjustMapSize() {
    if (
      window.scrollY >=
      window.document.body.scrollHeight - window.innerHeight - 48
    ) {
      setMapHeightOffest("md:h-[calc(100vh-156px)]");
    } else {
      setMapHeightOffest("md:h-[calc(100vh-108px)]");
    }
  }

  // TODO: refactor this & use easeTo flyTo moveTo --> we need useMap hook for that: const {current: map} = useMap();
  function handleMarkerClick(id) {
    chosenLocation && showPopup && chosenLocation.id === id
      ? setShowPopup(false)
      : setShowPopup(true);
    setChosenLocation(blogPosts.find((post) => post.id === id));
  }
  return (
    <section className="w-full lg:w-1/2 p-4">
      {focusLocation ? (
        <div
          className={`sticky top-20 mt-14 rounded-md h-[80vh] ${mapHeightOffset}`}
        >
          <MapComponent
            centerLon={focusLocation.locations.lon}
            centerLat={focusLocation.locations.lat}
            initZoom={2}
          >
            {blogPosts.map((post) => (
              <MapMarker
                lon={post.locations.lon}
                lat={post.locations.lat}
                key={post.id}
                onClick={() => handleMarkerClick(post.id)}
              />
            ))}
            {showPopup && (
              <MapPopup
                postData={chosenLocation}
                handleClose={() => setShowPopup(false)}
              />
            )}
          </MapComponent>
        </div>
      ) : (
        <p>please wait...</p>
      )}
    </section>
  );
}

export default MapSection;
