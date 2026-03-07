import { useState } from "react";
import "../css/Hero.css";
import profileImg from "../assets/images/profile.png";
import cvFile from "../assets/files/cv.pdf";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };

  const openFile = () => {
    window.open(cvFile, "_blank");
    setShowModal(false);
  };

  return (
    <section id="home" className="hero-section d-flex align-items-center pt-5">
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
              <button
                onClick={handleDownload}
                className="btn bg-brand-orange px-4"
              >
                Download CV
              </button>

              <a href="#projects" className="btn btn-outline-light px-4">
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

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content"
              style={{
                background: "var(--brand-secondary)",
                color: "var(--brand-light)",
                border: "1px solid var(--brand-primary)"
              }}
            >
              <div
                className="modal-header"
                style={{ borderBottom: "1px solid var(--brand-secondary)" }}
              >
                <h5 className="modal-title">Download Complete</h5>
                <button
                  className="btn-close"
                  style={{ filter: "invert(1)" }}
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                Your CV has been downloaded. Do you want to open it?
              </div>

              <div
                className="modal-footer"
                style={{ borderTop: "1px solid var(--brand-secondary)" }}
              >
                <button
                  className="btn"
                  style={{
                    color: "var(--brand-light)",
                    border: "1px solid var(--brand-light)"
                  }}
                  onClick={() => setShowModal(false)}
                >
                  No
                </button>

                <button
                  className="btn"
                  style={{
                    background: "var(--brand-primary)",
                    color: "white"
                  }}
                  onClick={openFile}
                >
                  Open
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}