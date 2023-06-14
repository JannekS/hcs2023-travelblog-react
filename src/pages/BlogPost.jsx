import TravelDuration from "../components/TravelDuration";
import AuthorAvatar from "../components/AuthorAvatar";
import { MapPinIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import NotFound from "./NotFound";
import { Link } from "wouter";
import MapComponent from "../components/MapComponent";
import MapMarker from "../components/MapMarker";

function BlogPost({ post }) {
  return post ? (
    <div className="w-full">
      <div className="max-w-3xl mx-auto p-4  md:px-8 md:pb-8 bg-amber-50 shadow-md">
        <h1 className="mt-4 mb-6 font-bold font-title text-4xl md:text-5xl text-orange-950">
          {post.title}
        </h1>
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col items-start space-y-1">
            <div className="flex flex-row items-center space-x-2">
              <MapPinIcon className="w-5 h-5" />
              <p>
                {post.location}, {post.country}
              </p>
            </div>
            <TravelDuration
              startDateStr={post.startDate}
              endDateStr={post.endDate}
            />
          </div>
          <AuthorAvatar
            id={post.authorId}
            image={post.authorImg}
            name={post.authorName}
          />
        </div>

        <div className="relative w-full h-68 md:h-96 rounded-t-md">
          {/*TODO: maybe center the image */}
          <img
            src={post.imageSrc}
            alt=""
            className="w-full h-68 md:h-96 object-cover object-center overflow-hidden rounded-md"
          />
        </div>
        <article className="prose max-w-3xl my-4">{post.text}</article>
        <div className="lg:fixed lg:left-2 lg:top-16 flex flex-row items-center justify-end space-x-1">
          <ArrowLeftIcon className="w-5 h-5" />
          <Link
            href="/"
            className="underline underline-offset-4 decoration-2 decoration-cyan-700/70 hover:decoration-4 hover:underline-offset-2"
          >
            home
          </Link>
        </div>
        <div className="w-full h-96 mt-4">
          <MapComponent centerLon={post.lon} centerLat={post.lat} initZoom={7}>
            <MapMarker lon={post.lon} lat={post.lat} />
          </MapComponent>
        </div>
      </div>
    </div>
  ) : (
    <NotFound />
  );
}

export default BlogPost;
