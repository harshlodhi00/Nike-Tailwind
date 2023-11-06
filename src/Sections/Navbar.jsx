import { headerLogo } from "../assets/images";
import { NAV_LINKS } from "../Constants";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between bg-blue-200 items-center max-container ">
        <a href="/">
          <img src={headerLogo} alt="" />
        </a>

        <ul className="flex gap-16 flex-1 justify-center items-center max-lg:hidden  ">
          {NAV_LINKS.map((link, index) => (
            <li>{link.label}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
