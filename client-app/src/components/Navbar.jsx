function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm py-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4 text-brand-navy" href="#">
          Mongare<span className="text-brand-orange"> Joshua</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center gap-2">
            {[
              "HOME",
              "PROJECTS",
              "SERVICES",
              "SKILLS",
              "GITHUB",
              "REVIEWS",
              "ABOUT",
              "BLOG",
              "CONTACT",
            ].map((item) => (
              <li key={item} className="nav-item">
                <a
                  className="nav-link text-dark fw-medium"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
