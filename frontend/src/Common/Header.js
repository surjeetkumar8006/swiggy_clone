import { useState } from "react";
import NavItems from "../Components/NavItems";
import "../Style/home.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To handle toggle state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the menu on click
  };

  return (
    <div className="header">
      <div className="logo__Container">
        <NavItems path={"/"} type={"img"} src={"images/image.png"} />
      </div>
      <div className="navItems">
        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <ul className={`navLinks ${isMenuOpen ? "active" : ""}`}>
          <NavItems path={"/"} name={"Home"} type={"item"} />
          <NavItems path={"/help"} name={"Help"} type={"item"} />
          <NavItems path={"/search"} name={"Search"} type={"item"} />
          <NavItems path={"/user"} name={"User"} type={"item"} />
          <NavItems path={"/cart"} name={"Cart"} type={"item"} />
        </ul>
      </div>
    </div>
  );
};

export default Header;
