function Hero() {
    return (
      <section
        className="d-flex align-items-center min-vh-100 bg-light"
        id="hero"
        style={{ paddingTop: "100px" }}
      >
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <h6 className="text-brand-orange text-uppercase fw-bold mb-3">
                — Welcome to my Portfolio
              </h6>
              <h1 className="display-4 fw-bolder text-brand-navy mb-4">
                Electrical & Telecommunications <br />
                <span className="text-brand-orange">Engineer</span>
              </h1>
              <p className="lead text-muted mb-4">
                I design and build electrical, network, and communication
                systems that run seamlessly — merging physical engineering with
                digital innovation.
              </p>
              <div className="d-flex flex-wrap gap-2 mb-5">
                {[
                  "Electrical Design",
                  "PCB Design",
                  "Automation",
                  "Web Dev",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="badge bg-white text-secondary border px-3 py-2 rounded-pill"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <a href="#" className="btn btn-brand btn-lg shadow">
                Download CV <i className="bi bi-download ms-2"></i>
              </a>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 position-relative">
              <div className="hero-img-container shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1000"
                  className="img-fluid w-100"
                  style={{ height: "500px", objectFit: "cover" }}
                  alt="Mongare Joshua"
                />
                <div className="hero-stat-box shadow">
                  <h3 className="fw-bold mb-0">BS</h3>
                  <small className="d-block mb-3">Degree Candidate</small>
                  <h3 className="fw-bold mb-0">Tech</h3>
                  <small className="d-block">Frontend & Hardware</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Hero