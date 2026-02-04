export default function Contact() {
  return (
    <section id="contact" className="bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h6 className="text-brand-orange text-uppercase fw-bold">
                - Get In Touch -
              </h6>
              <div class="alert alert-danger z-1" role="alert">
                Note: This form is not yet working. Updates still in progress. You Can reach me using other methods
              </div>
              <h2 className="text-brand-navy fw-bold">
                Let's Discuss Your Project
              </h2>
              <p className="text-muted">
                Feel free to reach out via Email, LinkedIn or the form below.
              </p>
            </div>

            <div className="card border-0 shadow p-4 p-md-5 rounded-4">
              <form>
                <div className="row g-3">
                  {[
                    {
                      label: "Your Name",
                      type: "text",
                      placeholder: "Joshua Mongare",
                    },
                    {
                      label: "Your Email",
                      type: "email",
                      placeholder: "nameexample@gmail.com",
                    },
                    {
                      label: "Subject",
                      type: "text",
                      placeholder: "Project Inquiry",
                    },
                  ].map(({ label, type, placeholder }) => (
                    <div
                      className={`col-${type === "text" ? "12" : "6"}`}
                      key={label}
                    >
                      <label className="form-label text-muted small fw-bold">
                        {label}
                      </label>
                      <input
                        type={type}
                        className="form-control bg-light border-0 py-3"
                        placeholder={placeholder}
                      />
                    </div>
                  ))}

                  <div className="col-12">
                    <label className="form-label text-muted small fw-bold">
                      Your Comments
                    </label>
                    <textarea
                      className="form-control bg-light border-0"
                      rows="5"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <div className="col-12 text-center mt-4">
                    <button
                      type="submit"
                      className="btn bg-brand-navy text-white w-50 py-3 rounded-4 shadow"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
