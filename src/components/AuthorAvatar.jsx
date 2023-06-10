function AuthorAvatar({ id, image, name, size }) {
  const imgSize = size === "sm" ? "w-10 h-10" : "w-12 h-12";
  return (
    <div className="flex flex-row items-center space-x-2">
      <div className={`rounded-full shadow-md ${imgSize}`}>
        <img
          src={image}
          alt=""
          className={`rounded-full object-cover ${imgSize} overflow-hidden`}
        />
      </div>
      <p className="font-handwriting text-2xl">{name}</p>
    </div>
  );
}

export default AuthorAvatar;
