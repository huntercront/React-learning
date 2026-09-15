import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import useScroll from "../hooks/useScroll";
import "./Header.scss";
import logo from "../../../assets/logo.svg";
const SCROLL_THRESHOLD = 120;

function Header() {
  const { isScrolled } = useScroll(SCROLL_THRESHOLD);
  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-content">
          <Link to="/" className="header-logo">
            <img src={logo} alt="logo" />
          </Link>
          <Navigation className="header-nav" />
          <div className="header-user-info"></div>
        </div>
      </div>
    </header>
  );
}
export default Header;
