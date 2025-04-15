import NavItems from "../Components/NavItems";
const Header = () => {
  return (
    <div className="header">
      <div className="logo__Container">
        <NavItems path={"/"} type={"img"} src={"images/image.png"} />
      </div>
      <div className="navItems">
        <ul>
          <NavItems path={"/"} name={"Home"} type={"item"} />
          <NavItems path={"/help"} name={"Help"} type={"item"} />
          <NavItems path={"/search"} name={"Search"} type={"item"} />
          <NavItems path={"/cart"} name={"Cart"} type={"item"} />
        </ul>
      </div>
    </div>
  );
};

export default Header;
