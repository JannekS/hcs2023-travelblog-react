import LoginDialog from "./LoginDialog";
import NavBar from "./NavBar";
import NavMobileMenu from "./NavMobileMenu";
import { Link } from "wouter";
import { useState } from "react";

function AppHeader() {
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  function toggleLoginDialog() {
    setShowLoginDialog(!showLoginDialog);
  }

  return (
    <header className="sticky top-0 z-50 flex flex-row justify-between items-center w-full h-14 px-4 py-2 bg-amber-300">
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
        <NavMobileMenu onLoginClick={toggleLoginDialog} />
      </div>
      <div className="hidden md:flex">
        <NavBar onLoginClick={toggleLoginDialog} />
      </div>
      {showLoginDialog && <LoginDialog onCloseDialog={toggleLoginDialog} />}
    </header>
  );
}

export default AppHeader;
