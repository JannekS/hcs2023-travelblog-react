import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
  faSquarePinterest,
  faMastodon,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

function AppFooter() {
  return (
    <footer className="flex flex-row items-center justify-center gap-4 md:gap-6 w-full h-12 mt-4 px-4 py-3 bg-amber-200 text-cyan-700 z-10">
      <a href="#">
        <FontAwesomeIcon
          icon={faInstagram}
          className="w-6 h-6 cursor-pointer hover:scale-110 hover:text-cyan-900"
        />
      </a>
      <a href="#">
        <FontAwesomeIcon
          icon={faSquareFacebook}
          className="w-6 h-6 cursor-pointer hover:scale-110 hover:text-cyan-900"
        />
      </a>
      <a href="#">
        <FontAwesomeIcon
          icon={faSquarePinterest}
          className="w-6 h-6 cursor-pointer hover:scale-110 hover:text-cyan-900"
        />
      </a>
      <a href="#">
        <FontAwesomeIcon
          icon={faMastodon}
          className="w-6 h-6 cursor-pointer hover:scale-110 hover:text-cyan-900"
        />
      </a>
      <a href="https://github.com/JannekS/hcs2023-travelblog-react">
        <FontAwesomeIcon
          icon={faSquareGithub}
          className="w-6 h-6 cursor-pointer hover:scale-110 hover:text-cyan-900"
        />
      </a>

      {/* <i className="fa-brands fa-square-facebook w-6 h-6 text-orange-950 cursor-pointer hover:scale-110"></i> */}
      {/* <div className="w-6 h-6 text-orange-950 cursor-pointer hover:scale-110">
        <img src="/instagram.svg" alt="" />
      </div>
      <div className="w-6 h-6 text-orange-950 cursor-pointer hover:scale-110">
        <img src="/square-facebook.svg" alt="" />
      </div>
      <div className="w-6 h-6 text-orange-950 cursor-pointer hover:scale-110">
        <img src="/square-pinterest.svg" alt="" />
      </div>
      <div className="w-6 h-6 text-orange-950 cursor-pointer hover:scale-110">
        <img src="/mastodon.svg" alt="" />
      </div>
      <div className="w-6 h-6 ">
        <img src="/square-github.svg" alt="" />
      </div> */}
    </footer>
  );
}

export default AppFooter;
