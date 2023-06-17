import NavBar from "./NavBar";
import NavMobileButton from "./NavMobileButton";
import useStore from "../stores/store";

function NavMobileMenu() {
  const [showMenu, toggleMenu] = useStore((state) => [
    state.showMobileMenu,
    state.toggleMobileMenu,
  ]);

  return (
    <>
      <NavMobileButton toggleMenu={() => toggleMenu} />
      <div
        className={`${
          !showMenu && "hidden"
        } absolute top-14 right-0 py-4 px-8 bg-amber-200/90 backdrop-blur-sm rounded-b-md`}
      >
        <NavBar />
      </div>
    </>
  );
}

export default NavMobileMenu;
