import "../css/Reviews.css"

const reviews = [
  {
    name: "James Mwangi",
    role: "Network Technician",
    feedback:
      "Joshua delivered a clean and reliable network setup for our office. Excellent cable management, solid testing, and zero downtime after deployment.",
    rating: 5,
  },
  {
    name: "Sarah Otieno",
    role: "Startup Founder",
    feedback:
      "The frontend website was modern, responsive, and fast. Communication was smooth and deadlines were respected. Highly recommended.",
    rating: 5,
  },
  {
    name: "David Kimani",
    role: "Electrical Contractor",
    feedback:
      "Very professional electrical installation. Proper labeling, safety compliance, and neat work. I’d definitely work with him again.",
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white pt-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h6 className="text-brand-orange text-uppercase fw-bold">
            - Client Feedback -
          </h6>
          <h2 className="text-brand-navy fw-bold display-6">
            Trusted by Clients
          </h2>
          <p className="text-muted mt-2">
            Real words from people I’ve worked with across engineering and tech
            projects.
          </p>
        </div>

        {/* Testimonials */}
        <div className="row g-4">
          {reviews.map(({ name, role, feedback, rating }) => (
            <div className="col-md-6 col-lg-4" key={name}>
              <div className="card border-0 shadow-sm h-100 rounded-4">
                <div className="card-body p-4">
                  {/* Stars */}
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`bi ${
                          i < rating ? "bi-star-fill" : "bi-star"
                        } text-brand-orange me-1`}
                      ></i>
                    ))}
                  </div>

                  {/* Feedback */}
                  <p className="text-muted small fst-italic mb-4">
                    “{feedback}”
                  </p>

                  {/* Client */}
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle bg-brand-navy text-white d-flex align-items-center justify-content-center fw-bold"
                      style={{ width: "45px", height: "45px" }}
                    >
                      {name.charAt(0)}
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0 fw-bold text-brand-navy">{name}</h6>
                      <small className="text-muted">{role}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
