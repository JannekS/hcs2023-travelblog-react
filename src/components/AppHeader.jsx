function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex flex-row justify-between items-center w-full h-14 px-4 py-2 bg-amber-300">
      <h1 className="text-3xl font-bold font-handwriting text-orange-950">
        in the sand
      </h1>

      <div className="md:hidden cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <nav className="hidden md:flex md:flex-row md:space-x-2 list-none">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">New Post</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </nav>
    </header>
  );
}

export default AppHeader;
