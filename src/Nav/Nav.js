import { NavLink } from "react-router-dom";
import "./NavStyle.css";
const Nav = () => {
  const handleClickNav = () => {
    const checkbox = document.querySelector("#nav-input-id");
    checkbox.checked = false;
  };
  return (
    <div className="nav8">
      <label htmlFor="nav-input-id">
        <i className="bar-icon icon fa-solid fa-bars"></i>
      </label>
      <input type="checkbox" hidden className="nav-input" id="nav-input-id" />
      <label htmlFor="nav-input-id" className="nav-overlay"></label>
      <div className="navbar8">
        <label htmlFor="nav-input-id">
          <i className="fa-solid fa-x icon"></i>
        </label>
        <ul className="navbar-nav8 ">
          <li onClick={() => handleClickNav()}>
            <i className="fa-solid fa-house"></i>

            <NavLink activeClassName="active" exact={true} to="/">
              Home
            </NavLink>
          </li>
          <li onClick={() => handleClickNav()}>
            <i className="fa-solid fa-earth-americas"></i>
            <NavLink activeClassName="active" to="/countries">
              Country
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
