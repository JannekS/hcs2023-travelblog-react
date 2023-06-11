import { Popup } from "react-map-gl";
import TravelDuration from "./TravelDuration";
import AuthorAvatar from "./AuthorAvatar";
import { Link } from "wouter";

function MapPopup({ postData, handleClose }) {
  return (
    <Popup
      longitude={postData.lon}
      latitude={postData.lat}
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
            id={postData.authorId}
            image={postData.authorImg}
            name={postData.authorName}
            size="sm"
          />
          <Link
            href={`/post/${postData.id}`}
            className="underline underline-offset-4 decoration-2 decoration-orange-800/60 hover:decoration-4 hover:underline-offset-2 focus:outline-none hover:decoration-orange-800/80"
          >
            Read more
          </Link>
        </div>
      </div>
    </Popup>
  );
}

export default MapPopup;
