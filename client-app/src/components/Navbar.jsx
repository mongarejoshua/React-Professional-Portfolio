import "../css/Navbar.css";

const navLinks = [
  "HOME",
  "PROJECTS",
  "SKILLS",
  "GITHUB",
  "REVIEWS",
  "ABOUT",
  "BLOG",
  "CONTACT",
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom navbar-dark sticky-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand navbar-logo text-brand-orange" href="#home">
          Mongare<span className="text-light">Joshua</span>
        </a>

        {/* Mobile toggle */}
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

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-1 mb-lg-0 gap-lg-1">
            {navLinks.map((link) => (
              <li className="nav-item" key={link}>
                <a
                  className="nav-link nav-link-custom"
                  href={`#${link.toLowerCase()}`}
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
