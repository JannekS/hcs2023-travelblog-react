import { useState } from "react";

function NavMobileButton({ toggleMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
    toggleMenu();
  }

  return (
    <button
      className={`relative block w-6 h-6 cursor-pointer md:hidden focus:outline-none transition-all duration-200 ${
        isOpen && "rotate-90"
      }`}
      onClick={handleClick}
    >
      <span
        className={`absolute top-0 left-0 bg-orange-950 w-6 h-0.5 rotate-0 transition-all duration-500 ${
          isOpen && "rotate-45 translate-y-1.5 -translate-x-1.5"
        }`}
      ></span>
      <span
        className={`absolute top-0 left-0 bg-orange-950 w-6 h-0.5 rotate-0 translate-y-[7px] transition-all duration-500 hamburger-middle ${
          isOpen && "hidden"
        }`}
      ></span>
      <span
        className={`absolute top-0 left-0 bg-orange-950 w-6 h-0.5 rotate-0 ${
          !isOpen && "translate-y-[14px]"
        } transition-all duration-500 hamburger-bottom ${
          isOpen && "rotate-[-45deg] translate-y-1.5 -translate-x-1.5"
        }`}
      ></span>
    </button>
  );
}

export default NavMobileButton;
