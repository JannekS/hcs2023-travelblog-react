import NavBar from "./NavBar";
import NavMobileButton from "./NavMobileButton";
import { useState } from "react";
import useStore from "../stores/store";

function NavMobileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const showLoginDialog = useStore((state) => state.showLoginDialog);

  return (
    <>
      <NavMobileButton toggleMenu={() => setShowMenu(!showMenu)} />
      {!showLoginDialog && (
        <div
          className={`${
            !showMenu && "hidden"
          } absolute top-14 right-0 py-4 px-8 bg-amber-300/90 rounded-b-md`}
        >
          <NavBar />
        </div>
      )}
    </>
  );
}

export default NavMobileMenu;
