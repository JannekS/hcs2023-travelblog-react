import { Link } from "wouter";
import { MapPinIcon } from "@heroicons/react/24/solid";
import AuthorAvatar from "./AuthorAvatar";
import TravelDuration from "./TravelDuration";

function PreviewCard({ blogPost }) {
  return (
    <div className="flex flex-col max-w-3xl rounded-md shadow-lg bg-amber-50 text-orange-950">
      <div className="relative w-full h-64 rounded-t-md">
        {/*TODO: maybe center the image */}
        <img
          src={blogPost.imageSrc}
          alt=""
          className="w-full h-64 object-cover overflow-hidden rounded-t-md"
        />
        <div className="absolute bottom-0 right-0 left-0 flex flex-row items-center justify-between space-x-2 bg-gradient-to-b from-transparent to-gray-900 p-4 text-orange-50">
          <div className="flex flex-row items-center space-x-1">
            <MapPinIcon className="w-5 h-5" />
            <p>
              {blogPost.location}, {blogPost.country}
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-4 font-title font-bold text-3xl line-clamp-1 hover:underline hover:underline-offset-4 decoration-2 decoration-orange-800/60">
          {" "}
          {/*TODO: Make inline-block work with line-clamp*/}
          <Link href={`/post/${blogPost.id}`}>{blogPost.title}</Link>
        </h3>

        <TravelDuration
          startDateStr={blogPost.startDate}
          endDateStr={blogPost.endDate}
        />
        <p className="line-clamp-3 my-4">{blogPost.text}</p>
        <div className="flex flex-row items-center justify-between">
          <AuthorAvatar
            id={blogPost.authorId}
            image={blogPost.authorImg}
            name={blogPost.authorName}
          />
          <Link
            href={`/post/${blogPost.id}`}
            className="underline underline-offset-4 decoration-2 decoration-orange-800/60 hover:decoration-4 hover:underline-offset-2 hover:decoration-orange-800/80"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PreviewCard;
