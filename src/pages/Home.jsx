import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import PostPreviewSection from "../components/PostPreviewSection";
import useStore from "../stores/store";

function Home() {
  // const blogPosts = [...blogPosts].sort((a, b) => a.startDate < b.startDate);
  const [loading, blogPosts] = useStore((state) => [
    state.loading,
    state.blogPosts,
  ]);

  return (
    <div className="flex flex-col h-full w-full">
      <HeroSection />
      {loading ? (
        <p>please wait...</p>
      ) : (
        blogPosts && (
          <div className="flex flex-col lg:flex-row min-h-screen w-full">
            <PostPreviewSection blogPosts={blogPosts} />
            <MapSection blogPosts={blogPosts} focusLocation={blogPosts[0]} />
          </div>
        )
      )}
    </div>
  );
}

export default Home;
