const projects = [
  {
    category: "Electronics",
    title: "PCB Design Schematic",
    description:
      "High-quality PCB schematics and layouts with proper routing and signal integrity.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    category: "Telecom",
    title: "Fiber Network Setup",
    description:
      "Installation of data networks and communication systems for stable connectivity.",
    img: "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&q=80&w=800",
  },
  {
    category: "Web Development",
    title: "Frontend Interface",
    description:
      "Responsive and visually appealing web interfaces using HTML, CSS, and Bootstrap.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="container">
        <div className="row mb-5 align-items-end">
          <div className="col-md-8">
            <h6 className="text-brand-orange text-uppercase fw-bold mb-2">
              — Recent Work
            </h6>
            <h2 className="text-brand-navy fw-bold display-6">
              Featured Projects
            </h2>
          </div>
          <div className="col-md-4 text-md-end">
            <a href="#" className="btn btn-outline-dark rounded-pill">
              View All
            </a>
          </div>
        </div>

        <p className="text-muted fst-italic mb-4">
          "This section is still in progress since I’m actively building and
          updating my projects." - Here are examples of my capability:
        </p>

        <div className="row g-4">
          {projects.map(({ category, title, description, img }) => (
            <div className="col-md-6 col-lg-4" key={title}>
              <div className="card card-custom shadow-sm h-100">
                <img
                  src={img}
                  className="card-img-top"
                  alt={title}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body p-4">
                  <span className="badge bg-brand-navy mb-2">{category}</span>
                  <h5 className="card-title fw-bold text-brand-navy">
                    {title}
                  </h5>
                  <p className="card-text text-muted small">{description}</p>
                  <a
                    href="#"
                    className="text-brand-orange text-decoration-none fw-bold small"
                  >
                    Details <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects