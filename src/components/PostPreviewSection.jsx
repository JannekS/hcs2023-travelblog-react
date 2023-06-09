import PreviewCard from "./PreviewCard";

function PostPreviewSection({ blogPosts }) {
  return (
    <section className="w-full lg:mb-0 lg:w-1/2 min-h-screen pt-1 px-4 border-b-2 lg:border-r-2 lg:border-b-0 border-opacity-40 border-orange-800">
      <h2 className="sticky top-14 -mx-4 pb-3 pt-4 text-4xl font-bold font-title text-center bg-white z-10">
        Recent Posts
      </h2>
      {blogPosts ? (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 mb-4">
          {blogPosts.map((post) => (
            <PreviewCard blogPost={post} key={post.id} />
          ))}
        </ul>
      ) : (
        <p>please wait...</p>
      )}
    </section>
  );
}

export default PostPreviewSection;
