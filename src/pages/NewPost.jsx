import useStore from "../stores/store";
import Loading from "../components/Loading";
import PostCreateForm from "../components/PostCreateForm";

function NewPost() {
  const loading = useStore((state) => state.loading);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center w-full mb-8">
          <h1 className="m-4 font-bold font-title text-4xl text-center">
            Write a New Blog Post
          </h1>

          <PostCreateForm />
        </div>
      )}
    </>
  );
}

export default NewPost;
