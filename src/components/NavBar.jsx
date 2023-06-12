import { Link } from "wouter";
import {
  ArrowRightOnRectangleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

function NavBar({ onLoginClick }) {
  return (
    <nav className="flex flex-col md:flex-row items-center gap-2 md:gap-3 list-none">
      <li>
        <Link
          href="/"
          className="hover:underline hover:underline-offset-4 decoration-2 decoration-orange-800/60"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="hover:underline hover:underline-offset-4 decoration-2 decoration-orange-800/60"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/new-post"
          className="flex flex-row items-center gap-1 hover:underline hover:underline-offset-4 decoration-2 decoration-orange-800/60"
        >
          <PencilSquareIcon className="h-5 w-5" />
          New Post
        </Link>
      </li>
      <button
        onClick={onLoginClick}
        className="flex flex-row items-center gap-1 px-2 py-1 border border-orange-800 rounded-md  hover:bg-amber-700 hover:text-orange-50"
      >
        <ArrowRightOnRectangleIcon className="h-5 w-5" /> Login
      </button>
    </nav>
  );
}

export default NavBar;
