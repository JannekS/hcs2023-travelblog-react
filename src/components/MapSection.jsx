import { useState } from "react";
import Map, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import LocationMarker from "./LocationMarker";
import { Popup } from "react-map-gl";
import TravelDuration from "./TravelDuration";
import AuthorAvatar from "./AuthorAvatar";
import { Link } from "wouter";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

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
            {blogPosts.map((post) => (
              <LocationMarker
                location={post}
                key={post.id}
                onClick={() => handleMarkerClick(post.id)}
              />
            ))}
            {showPopup && (
              // TODO: refactor into separate component
              <Popup
                longitude={chosenLocation.lon}
                latitude={chosenLocation.lat}
                anchor="bottom"
                offset={30}
                focusAfterOpen={false}
                closeOnClick={false}
                closeOnMove={true}
                className="rounded-md"
                onClose={() => setShowPopup(false)}
              >
                <div className="flex flex-col space-y-2">
                  <h2 className="font-title font-bold text-2xl line-clamp-1">
                    {chosenLocation.title}
                  </h2>
                  <TravelDuration
                    startDateStr={chosenLocation.startDate}
                    endDateStr={chosenLocation.endDate}
                  />
                  <div className="flex flex-row justify-between items-center">
                    <AuthorAvatar
                      id={chosenLocation.authorId}
                      image={chosenLocation.authorImg}
                      name={chosenLocation.authorName}
                      size="sm"
                    />
                    <Link
                      href={`/post/${chosenLocation.id}`}
                      className="underline underline-offset-4 decoration-2 decoration-orange-800/60 hover:decoration-4 hover:underline-offset-2 focus:outline-none hover:decoration-orange-800/80"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </Popup>
            )}

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
