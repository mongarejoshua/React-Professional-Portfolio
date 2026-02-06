export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <h4 className="fw-bold mb-3">
              Mongare<span className="text-brand-orange">Joshua</span>
            </h4>
            <p className="text-white-50 small">
              Professional Electrical and Telecommunication Engineering services
              specializing in robust infrastructure and modern tech solutions.
            </p>
          </div>
          <div className="col-md-2 offset-md-1">
            <h6 className="fw-bold mb-3 text-brand-orange">Links</h6>
            <ul className="list-unstyled small text-white-50">
              {["Home", "Projects", "Skills", "GitHub"].map((link) => (
                <li key={link} className="mb-2">
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-reset text-decoration-none"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold mb-3 text-brand-orange">Services</h6>
            <ul className="list-unstyled small text-white-50">
              {["Electrical Installation", "Network Design", "Maintenance"].map(
                (service) => (
                  <li key={service} className="mb-2">
                    {service}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold mb-3 text-brand-orange">Location</h6>
            <ul className="list-unstyled small text-white-50">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i> Nairobi, Kenya
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i> mongarejoshua254@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border-top border-secondary pt-3 text-center">
          <p className="small text-white-50 mb-0">
            &copy; 2026 Mongare Joshua. All Rights Reserved. Design & Developed
            by
            <a
              href="https://yourportfolio.com"
              className="text-reset text-decoration-underline"
            >
              {" "}
              Mongare Joshua
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

