import { Popup } from "react-map-gl";
import TravelDuration from "./TravelDuration";
import AuthorAvatar from "./AuthorAvatar";
import { Link } from "wouter";

function MapPopup({ postData, handleClose }) {
  return (
    <Popup
      longitude={postData.locations.lon}
      latitude={postData.locations.lat}
      anchor="bottom"
      offset={30}
      focusAfterOpen={false}
      closeOnClick={false}
      closeOnMove={true}
      className="rounded-md"
      onClose={handleClose}
    >
      <div className="flex flex-col space-y-2">
        <h2 className="font-title font-bold text-2xl line-clamp-1">
          {postData.title}
        </h2>
        <TravelDuration
          startDateStr={postData.startDate}
          endDateStr={postData.endDate}
        />
        <div className="flex flex-row justify-between items-center">
          <AuthorAvatar
            id={postData.authors.name}
            image={postData.authors.avatarUrl}
            name={postData.authors.name}
            size="sm"
          />
          <Link
            href={`/post/${postData.id}`}
            className="underline underline-offset-4 decoration-2 decoration-cyan-700/70 hover:decoration-4 hover:underline-offset-2 focus:outline-none"
          >
            Read more
          </Link>
        </div>
      </div>
    </Popup>
  );
}

export default MapPopup;
