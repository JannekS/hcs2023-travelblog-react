import {
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
  PencilSquareIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import useStore from "../stores/store";
import LinkWrapper from "./LinkWrapper";

function NavBar() {
  const [isAuthenticated, logout, closeMobileMenu] = useStore((state) => [
    state.isAuthenticated,
    state.logout,
    state.closeMobileMenu,
  ]);
  function handleLogout() {
    logout();
    closeMobileMenu();
  }

  return (
    <nav className="flex flex-col md:flex-row items-center gap-2 md:gap-3 list-none">
      <li>
        <LinkWrapper
          href="/"
          classes="hover:underline hover:underline-offset-4 decoration-2 decoration-cyan-700/70"
        >
          Home
        </LinkWrapper>
      </li>
      <li>
        <LinkWrapper
          href="/contact"
          classes="hover:underline hover:underline-offset-4 decoration-2 decoration-cyan-700/70"
        >
          Contact
        </LinkWrapper>
      </li>
      {isAuthenticated && (
        <>
          <li>
            <LinkWrapper
              href="/new-post"
              classes="flex flex-row items-center gap-1 hover:underline hover:underline-offset-4 decoration-2 decoration-cyan-700/70"
            >
              <PencilSquareIcon className="h-5 w-5" />
              New Post
            </LinkWrapper>
          </li>
          <li>
            <LinkWrapper
              href="/profile"
              classes="flex flex-row items-center gap-1 hover:underline hover:underline-offset-4 decoration-2 decoration-cyan-700/70"
            >
              <UserCircleIcon className="h-5 w-5" />
              Profile
            </LinkWrapper>
          </li>
        </>
      )}
      <li>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="flex flex-row items-center gap-1 px-2 py-1 border border-cyan-700/70 rounded-md  hover:bg-cyan-700 hover:text-orange-50 active:bg-cyan-800"
          >
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            Logout
          </button>
        ) : (
          <LinkWrapper
            href="/login"
            classes="flex flex-row items-center gap-1 px-2 py-1 border border-cyan-700/70 rounded-md  hover:bg-cyan-700 hover:text-orange-50 active:bg-cyan-600"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            Login
          </LinkWrapper>
        )}
      </li>
    </nav>
  );
}

export default NavBar;
