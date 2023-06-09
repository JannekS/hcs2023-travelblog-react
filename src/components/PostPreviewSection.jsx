function PostPreviewSection({ blogPosts }) {
  return (
    <section className="w-full lg:w-1/2 min-h-screen py-2 px-4 border-r-2 border-slate-300">
      <h2 className="sticky top-14 py-3 text-4xl font-bold font-title text-center text-orange-950 bg-white">
        Recent Posts
      </h2>
      {blogPosts ? (
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>please wait...</p>
      )}
    </section>
  );
}

export default PostPreviewSection;
