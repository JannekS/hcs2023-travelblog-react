import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import PostPreviewSection from "../components/PostPreviewSection";

function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <HeroSection />

      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        <PostPreviewSection />
        <MapSection />
      </div>
    </main>
  );
}

export default Home;
