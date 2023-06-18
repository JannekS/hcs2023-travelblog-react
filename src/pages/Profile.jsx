import useStore from "../stores/store";
import { useEffect } from "react";
import { Link } from "wouter";

function Profile() {
  const [
    userName,
    avatarUrl,
    userDescription,
    getUserData,
    loading,
    userPosts,
  ] = useStore((state) => [
    state.userName,
    state.avatarUrl,
    state.userDescription,
    state.getUserData,
    state.loading,
    state.userPosts,
  ]);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      {loading && !userPosts ? (
        <p>please wait...</p>
      ) : (
        <div className="flex flex-col items-center min-h-screen w-full">
          <h1 className="m-4 font-bold font-title text-4xl text-center">
            Hi {userName} :-)
          </h1>
          <h2 className="m-4 font-bold font-title text-3xl text-center">
            What would you like to do?
          </h2>
          <div className="flex flex-col md:flex-row-reverse justify-between gap-8 p-4 mt-4">
            <div className="border p-4 rounded-md">
              <h3 className="text-xl mb-4">Your Profile</h3>
              <div className="flex flex-col gap-2">
                <div className={`rounded-full shadow-md w-24 h-24`}>
                  <img
                    src={avatarUrl}
                    alt=""
                    className={`rounded-full object-cover w-24 h-24 overflow-hidden`}
                  />
                </div>
                <p>Name: {userName}</p>
                <p>
                  About Me:{" "}
                  {userDescription ||
                    "Tell our readers something about yourself."}
                </p>
              </div>
            </div>
            <div className="border p-4 rounded-md">
              <div className="flex flex-row items-center justify-between gap-2">
                <h3 className="text-xl">Edit your posts or</h3>
                <Link
                  href="/new-post"
                  className="flex flex-row items-center gap-1 px-2 py-1 border border-cyan-700/70 rounded-md  hover:bg-cyan-700 hover:text-orange-50"
                >
                  write a new one
                </Link>
              </div>
              <ul className="flex flex-col gap-2 mt-4">
                {userPosts?.map((post) => (
                  <li
                    className="p-2 border border-orange-950 rounded-md"
                    key={post.id}
                  >
                    {post.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
