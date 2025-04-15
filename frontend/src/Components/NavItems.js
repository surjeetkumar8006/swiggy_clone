import { NavLink } from "react-router-dom";

const NavItems = ({ path, name, type, src }) => {
  if (type === "item") {
    return (
      <li>
        <NavLink
          to={path}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {name}
        </NavLink>
      </li>
    );
  } else {
    return (
      <NavLink to={path}>
        <img className="logo" src={src} />
      </NavLink>
    );
  }
};

export default NavItems;
