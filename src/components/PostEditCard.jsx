import { MapPinIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import TravelDuration from "./TravelDuration";
import LinkWrapper from "./LinkWrapper";

function PostEditCard({ blogPost }) {
  return (
    <div className="flex flex-col gap-2 rounded-md shadow-lg p-4 bg-amber-50">
      <h3 className="font-title font-bold text-3xl line-clamp-1 hover:underline hover:underline-offset-4 decoration-2 decoration-cyan-700/70">
        {blogPost.title}
      </h3>
      <div className="flex flex-row items-center space-x-1">
        <MapPinIcon className="w-5 h-5" />
        <p>
          {blogPost.locations.location}, {blogPost.locations.country}
        </p>
      </div>

      <TravelDuration
        startDateStr={blogPost.startDate}
        endDateStr={blogPost.endDate}
      />
      <div className="flex flex-row items-center justify-between">
        <LinkWrapper href={`/post/${blogPost.id}`}>Read Post</LinkWrapper>
        <div className="flex flex-row items-center gap-2">
          <button className="flex flex-row items-center gap-1 border p-1 text-sm rounded-md bg-gray-100">
            <PencilIcon className="w-4 h-4" /> <span>Edit</span>
          </button>
          <button className="flex flex-row items-center gap-1 border p-1 text-sm rounded-md bg-gray-100 hover:bg-rose-700 hover:text-amber-50">
            <TrashIcon className="w-4 h-4" /> <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostEditCard;
