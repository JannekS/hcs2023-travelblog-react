import TravelDuration from "../components/TravelDuration";
import AuthorAvatar from "../components/AuthorAvatar";
import { MapPinIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import NotFound from "./NotFound";
import MapComponent from "../components/MapComponent";
import MapMarker from "../components/MapMarker";
import { useEffect } from "react";
import useStore from "../stores/store";
import Loading from "../components/Loading";
import LinkWrapper from "../components/LinkWrapper";

function BlogPost({ postId }) {
  const [post, getDetailPost, loading] = useStore((state) => [
    state.detailPost,
    state.getDetailPost,
    state.loading,
  ]);
  useEffect(() => {
    getDetailPost(postId);
  }, []);

  return (
    <>
      {!loading && post ? (
        <div className="w-full">
          <div className="max-w-3xl mx-auto p-4  md:px-8 md:pb-8 bg-amber-50 rounded-b-md shadow-md">
            <h1 className="mt-4 mb-6 font-bold font-title text-4xl md:text-5xl text-orange-950">
              {post.title}
            </h1>
            <div className="flex flex-row items-center justify-between mb-4">
              <div className="flex flex-col items-start space-y-1">
                <div className="flex flex-row items-center space-x-2">
                  <MapPinIcon className="w-5 h-5" />
                  <p>
                    {post.locations.location}, {post.locations.country}
                  </p>
                </div>
                <TravelDuration
                  startDateStr={post.startDate}
                  endDateStr={post.endDate}
                />
              </div>
              <AuthorAvatar
                id={post.authors.name}
                image={post.authors.avatarUrl}
                name={post.authors.name}
              />
            </div>

            <div className="relative w-full h-68 md:h-96 rounded-t-md">
              <img
                src={post.imageUrl}
                alt=""
                className="w-full h-68 md:h-96 object-cover object-center overflow-hidden rounded-md"
              />
            </div>
            <article className="max-w-3xl my-4 whitespace-pre-line">
              {post.text}
            </article>
            <div className="lg:fixed lg:left-2 lg:top-16 flex flex-row items-center justify-end space-x-1">
              <ArrowLeftIcon className="w-5 h-5" />
              <LinkWrapper href="/">home</LinkWrapper>
            </div>
            <div className="w-full h-96 mt-4">
              <MapComponent
                centerLon={post.locations.lon}
                centerLat={post.locations.lat}
                initZoom={7}
              >
                <MapMarker lon={post.locations.lon} lat={post.locations.lat} />
              </MapComponent>
            </div>
          </div>
        </div>
      ) : (
        (loading && <Loading />) || <NotFound />
      )}
    </>
  );
}

export default BlogPost;
