import useStore from "../stores/store";
import { useEffect } from "react";
import Loading from "../components/Loading";
import PostCreateForm from "../components/PostCreateForm";

function EditPost({ postId }) {
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
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center w-full mb-8">
          <h1 className="m-4 font-bold font-title text-4xl text-center">
            Edit your Blog Post
          </h1>

          <PostCreateForm post={post} />
        </div>
      )}
    </>
  );
}

export default EditPost;
