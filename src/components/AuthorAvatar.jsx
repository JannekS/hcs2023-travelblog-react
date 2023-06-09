function AuthorAvatar({ id, image, name }) {
  return (
    <div className="flex flex-row items-center space-x-2">
      <div className="rounded-full shadow-md w-12 h-12">
        <img
          src={image}
          alt=""
          className="rounded-full object-cover w-full h-full overflow-hidden"
        />
      </div>
      <p className="font-handwriting text-3xl">{name}</p>
    </div>
  );
}

export default AuthorAvatar;
