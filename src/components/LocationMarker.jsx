import { Marker } from "react-map-gl";
// import { useState } from "react";
// import TravelDuration from "./TravelDuration";
// import AuthorAvatar from "./AuthorAvatar";
// import { Link } from "wouter";

function LocationMarker({ location }) {
  return (
    <>
      <Marker
        style={{ cursor: "pointer" }}
        longitude={location.lon}
        latitude={location.lat}
        color="orange"
        // onClick={handleMarkerClick}
      ></Marker>
      {/* {showPopup && (
        <Popup
          longitude={location.lon}
          latitude={location.lat}
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
              {location.title}
            </h2>
            <TravelDuration
              startDateStr={location.startDate}
              endDateStr={location.endDate}
            />
            <div className="flex flex-row justify-between items-center">
              <AuthorAvatar
                id={location.authorId}
                image={location.authorImg}
                name={location.authorName}
                size="sm"
              />
              <Link
                href={`/post/${location.id}`}
                className="underline underline-offset-4 decoration-2 decoration-orange-800/60 hover:decoration-4 hover:underline-offset-2 focus:outline-none hover:decoration-orange-800/80"
              >
                Read more
              </Link>
            </div>
          </div>
        </Popup>
      )} */}
    </>
  );
}

export default LocationMarker;
