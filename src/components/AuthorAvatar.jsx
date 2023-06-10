function AuthorAvatar({ id, image, name, size }) {
  const imgSize = size === "sm" ? 10 : 12;
  return (
    <div className="flex flex-row items-center space-x-2">
      <div className={`rounded-full shadow-md w-${imgSize} h-${imgSize}`}>
        <img
          src={image}
          alt=""
          className={`rounded-full object-cover w-${imgSize} h-${imgSize} overflow-hidden`}
        />
      </div>
      <p className="font-handwriting text-2xl">{name}</p>
    </div>
  );
}

export default AuthorAvatar;
