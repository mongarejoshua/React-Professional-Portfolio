import "../css/Navbar.css";

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
  // Split the links into two groups
  const leftLinks = navLinks.slice(0, 4); // Home, Projects, Skills, Github
  const rightLinks = navLinks.slice(4); // Reviews, Blog, About, Contact

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
      <div className="container">
        {/* --- MOBILE LOGO --- 
            Visible only on small screens (d-lg-none). 
            Placed first so it appears at the start. */}
        <a
          className="navbar-brand navbar-logo text-brand-orange d-lg-none"
          href="#home"
        >
          Mongare<span className="text-light">Joshua</span>
        </a>

        {/* Mobile toggle button */}
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
          {/* Left Links */}
          <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-1">
            {leftLinks.map((link) => (
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

          {/* --- DESKTOP LOGO --- 
              Visible only on large screens (d-none d-lg-block). 
              mx-auto centers it between the two lists. */}
          <a
            className="navbar-brand navbar-logo text-brand-orange d-none d-lg-block mx-auto"
            href="#home"
          >
            Mongare<span className="text-light">Joshua</span>
          </a>

          {/* Right Links */}
          <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-1">
            {rightLinks.map((link) => (
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
