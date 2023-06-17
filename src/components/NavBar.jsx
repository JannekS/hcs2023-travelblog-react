import { Link } from "wouter";
import {
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
  PencilSquareIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import useStore from "../stores/store";

function NavBar() {
  const [isAuthenticated, logout] = useStore((state) => [
    state.isAuthenticated,
    state.logout,
  ]);

  return (
    <nav className="flex flex-col md:flex-row items-center gap-2 md:gap-3 list-none">
      <li>
        <Link
          href="/"
          className="hover:underline hover:underline-offset-4 decoration-2 decoration-cyan-700/70"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="hover:underline hover:underline-offset-4 decoration-2 decoration-cyan-700/70"
        >
          About
        </Link>
      </li>
      {isAuthenticated && (
        <>
          <li>
            <Link
              href="/new-post"
              className="flex flex-row items-center gap-1 hover:underline hover:underline-offset-4 decoration-2 decoration-cyan-700/70"
            >
              <PencilSquareIcon className="h-5 w-5" />
              New Post
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="flex flex-row items-center gap-1 hover:underline hover:underline-offset-4 decoration-2 decoration-cyan-700/70"
            >
              <UserCircleIcon className="h-5 w-5" />
              Profile
            </Link>
          </li>
        </>
      )}
      <li>
        {isAuthenticated ? (
          <button
            onClick={() => logout()}
            className="flex flex-row items-center gap-1 px-2 py-1 border border-cyan-700/70 rounded-md  hover:bg-cyan-700 hover:text-orange-50"
          >
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="flex flex-row items-center gap-1 px-2 py-1 border border-cyan-700/70 rounded-md  hover:bg-cyan-700 hover:text-orange-50"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            Login
          </Link>
        )}
      </li>
    </nav>
  );
}

export default NavBar;
