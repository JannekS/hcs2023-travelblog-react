import useStore from "../stores/store";
import { useEffect } from "react";
import { Link } from "wouter";
import PostEditCard from "../components/PostEditCard";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PencilIcon } from "@heroicons/react/24/outline";
import Loading from "../components/Loading";

function Profile() {
  const [
    userName,
    avatarUrl,
    userDescription,
    getUserData,
    loading,
    userPosts,
    updateUserData,
  ] = useStore((state) => [
    state.user?.name,
    state.user?.avatarUrl,
    state.user?.description,
    state.getUserData,
    state.loading,
    state.userPosts,
    state.updateUserData,
  ]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    values: { name: userName, description: userDescription },
  });

  const [tempImgUrl, setTempImgUrl] = useState();
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    setTempImgUrl(avatarUrl);
  }, [avatarUrl]);

  function onSubmit(data) {
    updateUserData(data);
    setIsEditMode(false);
  }
  function handleFormReset() {
    setIsEditMode(false);
    reset();
  }

  return (
    <>
      {loading && !userPosts ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center w-full min-h-screen">
          <h1 className="m-4 font-bold font-title text-4xl text-center">
            Hi {userName} :-)
          </h1>
          <h2 className="m-4 font-bold font-title text-3xl text-center">
            What would you like to do?
          </h2>
          <div className="flex flex-col md:flex-row-reverse gap-8 p-4">
            <div className="w-full md:w-1/2 max-w-xl">
              <div className="sticky top-20 max-h-min  border p-4 rounded-md">
                <div className="flex flex-row justify-between items-center mb-4">
                  <h3 className="text-xl">Your Profile</h3>
                  {!isEditMode && (
                    <button
                      onClick={() => setIsEditMode(true)}
                      className="btn-secondary flex flex-row items-center gap-1 p-1 text-sm"
                    >
                      <PencilIcon className="w-4 h-4" /> <span>Edit</span>
                    </button>
                  )}
                </div>

                <form
                  action=""
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-2"
                >
                  <div className="flex flex-col gap-1 text-sm">
                    <div className={`rounded-full shadow-md w-28 h-28`}>
                      <img
                        src={tempImgUrl}
                        alt=""
                        className={`rounded-full object-cover w-28 h-28 overflow-hidden`}
                      />
                    </div>
                    {isEditMode && (
                      <label
                        htmlFor="image"
                        className="btn-secondary mt-1 p-1 w-28 text-xs"
                      >
                        Change avatar
                      </label>
                    )}

                    <input
                      id="image"
                      type="file"
                      accept="image/jpg, image/jpeg"
                      onInput={(e) =>
                        setTempImgUrl(URL.createObjectURL(e.target.files[0]))
                      }
                      name="image"
                      {...register("image")}
                      className="opacity-0 h-0"
                    />
                  </div>
                  <div className="flex flex-row gap-2 items-start">
                    <label className="w-28" htmlFor="name">
                      Name:
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      disabled={!isEditMode}
                      {...register("name", { required: true, minLength: 3 })}
                      placeholder="Your name"
                      className="form-input flex-1 disabled:p-0 disabled:border-none disabled:bg-white"
                    />
                  </div>
                  <div className="flex flex-row gap-2 items-start">
                    <label className="w-28" htmlFor="description">
                      About Me:
                    </label>
                    <textarea
                      id="description"
                      name="name"
                      disabled={!isEditMode}
                      {...register("description")}
                      placeholder="Tell our readers something about yourself."
                      className="form-input flex-1 min-h-max resize-x disabled:p-0 disabled:border-none disabled:resize-none disabled:bg-white"
                    />
                  </div>

                  {isEditMode && (
                    <div className="flex flex-row gap-4">
                      <button
                        onClick={handleFormReset}
                        className="btn-secondary mt-4 p-1 w-1/2 text-sm"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn-primary mt-4 p-1 w-1/2 text-sm"
                      >
                        Save Changes
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>

            <div className="border p-4 rounded-md w-full md:w-1/2 max-w-xl">
              <div className="flex flex-row items-center justify-between gap-2">
                <h3 className="text-xl">Edit your posts</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xl">or </span>

                  <Link href="/new-post" className="btn-primary px-2 py-1">
                    write a new one
                  </Link>
                </div>
              </div>
              {userPosts?.length > 0 ? (
                <ul className="flex flex-col gap-2 mt-4">
                  {userPosts?.map((post) => (
                    <PostEditCard blogPost={post} key={post.id} />
                  ))}
                </ul>
              ) : (
                <div className="p-8 text-center">
                  <p>You did not write any posts, yet.</p>
                  <p>
                    Why don&apos;t you tell us something about your favorite
                    travel experiences?
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
