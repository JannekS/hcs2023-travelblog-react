import useStore from "../stores/store";

function Profile() {
  return (
    <div className="flex flex-col items-center h-screen w-full">
      <h1 className="m-4 font-bold font-title text-4xl text-center">
        Welcome to your profile page!
      </h1>
      <p>your profile data</p>
      <p>Edit profile</p>
      <p>your blog posts. edit or delete them</p>
      <p>write a new post</p>
    </div>
  );
}

export default Profile;
