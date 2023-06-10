import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import PostPreviewSection from "../components/PostPreviewSection";

function Home({ blogPosts }) {
  const sortedPosts = [...blogPosts].sort((a, b) => a.startDate < b.startDate);
  return (
    <main className="flex flex-col min-h-screen w-full">
      <HeroSection />
      {sortedPosts ? (
        <div className="flex flex-col lg:flex-row min-h-screen w-full">
          <PostPreviewSection blogPosts={sortedPosts} />
          <MapSection blogPosts={sortedPosts} focusLocation={sortedPosts[0]} />
        </div>
      ) : (
        <p>please wait...</p>
      )}
    </main>
  );
}

export default Home;
