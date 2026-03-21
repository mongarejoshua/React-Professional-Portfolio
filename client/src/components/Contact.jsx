import { useState } from "react";
import "../css/Contact.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ show: false, message: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setModal({
          show: true,
          message: "Message sent successfully!",
          type: "success",
        });
        e.target.reset();
      })
      .catch(() => {
        setModal({
          show: true,
          message: "Something went wrong. Please try again.",
          type: "error",
        });
      })
      .finally(() => setLoading(false));
  };

  const closeModal = () => setModal({ show: false, message: "", type: "" });

  return (
    <>
      {/* SUCCESS / ERROR MODAL */}
      {modal.show && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-sm modal-dialog-centered">
            <div className="modal-content rounded-4 border-0 shadow">
              <div className="modal-body text-center p-4">
                <div
                  className={`mb-3 fs-1 ${modal.type === "success" ? "text-brand-orange" : "text-danger"}`}
                >
                  {modal.type === "success" ? "✓" : "⚠"}
                </div>
                <h5 className="fw-bold mb-2">
                  {modal.type === "success" ? "Success" : "Error"}
                </h5>
                <p className="text-muted small">{modal.message}</p>
                <button
                  onClick={closeModal}
                  className="btn bg-brand-navy text-white w-100 mt-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT SECTION */}
      <section id="contact" className="py-4">
        <div className="container">
          <div className="row rounded-4 shadow overflow-hidden">
            {/* LEFT SIDE */}
            <div className="col-lg-5 text-white p-5 bg-brand-navy d-flex flex-column justify-content-center">
              <h6 className="text-brand-orange text-uppercase fw-bold mb-3">
                - Get In Touch -
              </h6>
              <h2 className="fw-bold mb-3">Let's Discuss Your Project</h2>
              <p className="opacity-75 mb-4">
                Feel free to reach out via Email, LinkedIn, or the contact form.
              </p>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-envelope-fill text-brand-orange me-3"></i>
                <span>
                  <a href="mailto:mongarejoshua@gmail.com">
                    mongarejoshua@gmail.com
                  </a>
                </span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-linkedin text-brand-orange me-3"></i>
                <span>
                  <a href="#">LinkedIn</a>
                </span>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-7 bg-white p-5">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="row g-3">
                  <div className="col-12">
                    <label className="small fw-bold text-muted">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-light border-0 py-3"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold text-muted">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-light border-0 py-3"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold text-muted">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control bg-light border-0 py-3"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="col-12">
                    <label className="small fw-bold text-muted">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      className="form-control bg-light border-0"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn bg-brand-navy text-white w-100 py-3 fw-bold d-flex justify-content-center align-items-center"
                    >
                      {loading && (
                        <span className="spinner-border spinner-border-sm me-2"></span>
                      )}
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
