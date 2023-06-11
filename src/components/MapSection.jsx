import { useState } from "react";
import MapMarker from "./MapMarker";
import MapPopup from "./MapPopup";
import MapComponent from "./MapComponent";

function MapSection({ blogPosts, focusLocation }) {
  const [showPopup, setShowPopup] = useState(false);
  const [chosenLocation, setChosenLocation] = useState();

  // TODO: refactor this
  function handleMarkerClick(id) {
    chosenLocation && showPopup && chosenLocation.id === id
      ? setShowPopup(false)
      : setShowPopup(true);
    setChosenLocation(blogPosts.find((post) => post.id === id));
  }
  return (
    <section className="sticky top-12 w-full h-[85vh] lg:h-[80vh] lg:w-1/2 px-4 mb-4">
      {focusLocation ? (
        <div className="mt-0 lg:mt-6 pt-2 lg:pt-0 rounded-md h-[85vh] lg:h-[80vh]">
          <MapComponent
            centerLon={focusLocation.lon}
            centerLat={focusLocation.lat}
            initZoom={2}
          >
            {blogPosts.map((post) => (
              <MapMarker
                lon={post.lon}
                lat={post.lat}
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
