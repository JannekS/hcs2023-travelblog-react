function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="font-bold font-title text-4xl text-center text-orange-900">
        404
      </h1>
      <h2 className="font-bold font-title text-4xl text-center text-orange-900">
        The page you are looking for does not exist.
      </h2>
    </div>
  );
}

export default NotFound;
