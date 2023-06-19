import { Link } from "wouter";

function AppFooter() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-center w-full h-12 mt-4 px-4 py-3 bg-amber-200 z-10">
      <ul className="flex flex-row space-x-4 list-none">
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/credits">Credits</Link>
        </li>
        <li>Github</li>
        <li>another item</li>
      </ul>
    </footer>
  );
}

export default AppFooter;
