import LoginDialog from "./LoginDialog";
import NavBar from "./NavBar";
import NavMobileMenu from "./NavMobileMenu";
import { Link } from "wouter";

function AppHeader() {
  return (
    <header className="sticky top-0 z-50 flex flex-row justify-between items-center w-full h-14 px-4 py-2 bg-amber-200">
      <Link href="/" className="flex flex-row items-center space-x-2">
        <div className="h-10 w-10">
          <img
            src="/footprints.png"
            alt=""
            className="h-10 w-12 object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold font-handwriting cursor-pointer">
          in the sand
        </h1>
      </Link>

      <div className="md:hidden">
        <NavMobileMenu />
      </div>
      <div className="hidden md:flex">
        <NavBar />
      </div>
      <LoginDialog />
    </header>
  );
}

export default AppHeader;
