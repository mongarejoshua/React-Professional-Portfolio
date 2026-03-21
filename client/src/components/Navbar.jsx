import "../css/Navbar.css";
import { useRef } from "react";
import { Collapse } from "bootstrap";

const navLinks = [
  "HOME",
  "PROJECTS",
  "SKILLS",
  "GITHUB",
  "BLOG",
  "ABOUT",
  "CONTACT",
];

export default function Navbar() {
  const navbarRef = useRef(null);

  // 🔹 Toggle navbar manually
  const handleToggle = () => {
    const bsCollapse = Collapse.getOrCreateInstance(navbarRef.current);
    bsCollapse.toggle();
  };

  // 🔹 Close navbar on link click (mobile)
  const handleNavClick = () => {
    const bsCollapse = Collapse.getOrCreateInstance(navbarRef.current);
    bsCollapse.hide();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
      <div className="container">
        {/* Logo */}
        <a
          className="navbar-brand navbar-logo text-brand-orange"
          href="#home"
          onClick={handleNavClick}
        >
          Mongare<span className="text-light">Joshua</span>
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
          ref={navbarRef}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-1">
            {navLinks.map((link) => (
              <li className="nav-item" key={link}>
                <a
                  className="nav-link nav-link-custom"
                  href={
                    link === "GITHUB"
                      ? "https://github.com/mongarejoshua?tab=repositories"
                      : `#${link.toLowerCase()}`
                  }
                  target={link === "GITHUB" ? "_blank" : undefined}
                  rel={link === "GITHUB" ? "noopener noreferrer" : undefined}
                  onClick={handleNavClick}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
