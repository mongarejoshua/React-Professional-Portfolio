import "../css/Navbar.css";
import { Collapse } from "bootstrap";

const navLinks = [
  "HOME",
  "PROJECTS",
  "SKILLS",
  "GITHUB",
  "REVIEWS",
  "BLOG",
  "ABOUT",
  "CONTACT",
];

export default function Navbar() {
  const leftLinks = navLinks.slice(0, 4);
  const rightLinks = navLinks.slice(4);

  // 🔹 Close navbar on link click (mobile)
  const handleNavClick = () => {
    const navbar = document.getElementById("mainNavbar");
    if (navbar && navbar.classList.contains("show")) {
      Collapse.getOrCreateInstance(navbar).hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
      <div className="container">
        <a
          className="navbar-brand navbar-logo text-brand-orange d-lg-none"
          href="#home"
          onClick={handleNavClick}
        >
          Mongare<span className="text-light">Joshua</span>
        </a>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-1">
            {leftLinks.map((link) => (
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

          <a
            className="navbar-brand navbar-logo text-brand-orange d-none d-lg-block mx-auto"
            href="#home"
          >
            Mongare<span className="text-light">Joshua</span>
          </a>

          <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-1">
            {rightLinks.map((link) => (
              <li className="nav-item" key={link}>
                <a
                  className="nav-link nav-link-custom"
                  href={`#${link.toLowerCase()}`}
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
