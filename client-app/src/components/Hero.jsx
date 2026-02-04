import "../css/Hero.css";
import profileImg from "../assets/images/profile.png";

export default function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center py-5">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Text content */}
          <div className="col-lg-6 text-center text-lg-start">
            <h6 className="text-brand-orange text-uppercase fw-bold">
              - Electrical & Telecommunication Engineer -
            </h6>

            <h1 className="display-5 fw-bold text-light mb-3">
              Designing reliable
              <span className="text-brand-primary"> power</span> &<br />
              communication systems
            </h1>

            <p className="text-light opacity-75 mb-4">
              I specialize in electrical installations, structured cabling,
              networking, and modern engineering solutions — combining field
              expertise with clean digital execution.
            </p>

            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="#projects" className="btn bg-brand-orange px-4">
                Download CV
              </a>
              <a href="#contact" className="btn btn-outline-light px-4">
                View My Work
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6 text-center">
            <div className="hero-image-wrapper mx-auto">
              <img
                src={profileImg}
                alt="Electrical and Telecommunications Engineer"
                className="img-fluid hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
