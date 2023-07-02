import { MapPinIcon } from "@heroicons/react/24/solid";
import AuthorAvatar from "./AuthorAvatar";
import TravelDuration from "./TravelDuration";
import LinkWrapper from "./LinkWrapper";
import useStore from "../stores/store";

function PreviewCard({ blogPost }) {
  const flyTo = useStore((state) => state.flyTo);

  function handleLocationClick() {
    flyTo(blogPost.locations.lon, blogPost.locations.lat);
  }

  return (
    <div className="flex flex-col max-w-3xl rounded-md shadow-lg bg-amber-50">
      <div className="relative w-full h-64 rounded-t-md">
        {/*TODO: maybe center the image */}
        <img
          src={blogPost.imageUrl}
          alt=""
          className="w-full h-64 object-cover overflow-hidden rounded-t-md"
        />
        <div className="absolute bottom-0 right-0 left-0 flex flex-row items-center justify-between space-x-2 bg-gradient-to-b from-transparent to-gray-900 p-4 text-orange-50">
          <a href="#map">
            <div
              className="flex flex-row items-center space-x-1 group hover:text-cyan-500"
              title="show on map"
              onClick={handleLocationClick}
            >
              <MapPinIcon className="w-5 h-5 group-hover:animate-bounce" />
              <p>
                {blogPost.locations.location}, {blogPost.locations.country}
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-4 font-title font-bold text-3xl line-clamp-1 hover:underline hover:underline-offset-4 decoration-2 decoration-cyan-700/70">
          {" "}
          {/*TODO: Make inline-block work with line-clamp*/}
          <LinkWrapper href={`/post/${blogPost.id}`} classes="border-none">
            {blogPost.title}
          </LinkWrapper>
        </h3>

        <TravelDuration
          startDateStr={blogPost.startDate}
          endDateStr={blogPost.endDate}
        />
        <p className="line-clamp-3 my-4">{blogPost.text}</p>
        <div className="flex flex-row items-center justify-between">
          <AuthorAvatar
            id={blogPost.authors.name}
            image={blogPost.authors.avatarUrl}
            name={blogPost.authors.name}
          />
          <LinkWrapper href={`/post/${blogPost.id}`}>Read Post</LinkWrapper>
        </div>
      </div>
    </div>
  );
}

export default PreviewCard;
