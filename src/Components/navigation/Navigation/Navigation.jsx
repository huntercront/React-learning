import { NAVIGATION_LINKS } from "../constants/navigation";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
function Navigation({ className = "" }) {
  return (
    <nav className={`nav ${className}`}>
      <ul className="nav-list no-list">
        {NAVIGATION_LINKS.map(({ id, label, to }) => (
          <li key={id}>
            <NavLink to={to}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;
