import { Link } from "wouter";
import useStore from "../stores/store";

function LinkWrapper({ classes, href, children }) {
  const closeMobileMenu = useStore((state) => state.closeMobileMenu);
  return (
    <Link
      href={href}
      onClick={closeMobileMenu}
      className={
        classes ||
        "underline underline-offset-4 decoration-2 decoration-cyan-700/70 hover:decoration-4 hover:underline-offset-2"
      }
    >
      {children}
    </Link>
  );
}

export default LinkWrapper;
