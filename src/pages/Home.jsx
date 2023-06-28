import HeroSection from "../components/HeroSection";
import Loading from "../components/Loading";
import MapSection from "../components/MapSection";
import PostPreviewSection from "../components/PostPreviewSection";
import { useEffect } from "react";
import useStore from "../stores/store";

function Home() {
  const [loading, blogPosts, getPosts, refreshAuth] = useStore((state) => [
    state.loading,
    state.blogPosts,
    state.getPosts,
    state.refreshAuth,
  ]);

  useEffect(() => {
    getPosts();
    refreshAuth();
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      <HeroSection />
      {loading ? (
        <Loading />
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
