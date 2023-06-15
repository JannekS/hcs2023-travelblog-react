import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import PostPreviewSection from "../components/PostPreviewSection";

function Home({ blogPosts }) {
  // const blogPosts = [...blogPosts].sort((a, b) => a.startDate < b.startDate);
  return (
    <main className="flex flex-col min-h-screen w-full">
      <HeroSection />
      {blogPosts ? (
        <div className="flex flex-col lg:flex-row min-h-screen w-full">
          <PostPreviewSection blogPosts={blogPosts} />
          <MapSection blogPosts={blogPosts} focusLocation={blogPosts[0]} />
        </div>
      ) : (
        <p>please wait...</p>
      )}
    </main>
  );
}

export default Home;
