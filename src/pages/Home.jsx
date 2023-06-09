import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import PostPreviewSection from "../components/PostPreviewSection";

function Home({ blogPosts }) {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <HeroSection />

      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        <PostPreviewSection blogPosts={blogPosts} />
        <MapSection blogPosts={blogPosts} />
      </div>
    </main>
  );
}

export default Home;
