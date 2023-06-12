import NavBar from "./NavBar";
import NavMobileButton from "./NavMobileButton";
import { useState } from "react";

function NavMobileMenu({ onLoginClick }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <NavMobileButton toggleMenu={() => setShowMenu(!showMenu)} />
      <div
        className={`${
          !showMenu && "hidden"
        } absolute top-14 right-0 py-4 px-8 bg-amber-300/90 rounded-b-md`}
      >
        <NavBar onLoginClick={onLoginClick} />
      </div>
    </>
  );
}

export default NavMobileMenu;
