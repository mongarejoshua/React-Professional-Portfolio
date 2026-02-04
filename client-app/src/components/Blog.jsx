const posts = [
  {
    date: "Nov 09, 2025",
    title: "Guide to Circuit Simulation",
    desc: "A Beginner's Guide to simulate your first circuit in KiCAD.",
  },
  {
    date: "Nov 15, 2025",
    title: "Open-source Tools for Engineers",
    desc: "The ultimate top open source tools that engineers can find useful.",
  },
  {
    date: "Nov 22, 2025",
    title: "Product Review & Comparison",
    desc: "Windows vs Linux: Which is the Better for Developers?",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-light py-3 ">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-brand-orange text-uppercase fw-bold">
            - Insights -
          </h6>
          <h2 className="text-brand-navy fw-bold display-6">
            Latest Blog Posts
          </h2>
        </div>
        <div className="row g-4">
          {posts.map(({ date, title, desc }) => (
            <div className="col-md-4" key={title}>
              <div className="card border-0 shadow-sm h-100 rounded-4">
                <div className="card-body p-4">
                  <small className="text-brand-orange fw-bold">{date}</small>
                  <h5 className="fw-bold mt-2 mb-3 text-brand-navy">{title}</h5>
                  <p className="text-muted small">{desc}</p>
                  <a
                    href="#"
                    className="btn btn-link p-0 text-decoration-none text-dark fw-bold"
                  >
                    Read More &rarr;
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
