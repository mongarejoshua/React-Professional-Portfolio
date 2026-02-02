const services = [
  {
    icon: "bi-lightning-charge-fill",
    title: "Electrical Design & Installation",
    desc: "Professional installation, inspection, and maintenance of electrical systems, power lines, and machinery.",
    bg: "",
  },
  {
    icon: "bi-cpu-fill",
    title: "PCB Design",
    desc: "Creating high-quality PCB schematics and layouts with proper routing and production-ready standards.",
    bg: "bg-brand-orange",
  },
  {
    icon: "bi-router-fill",
    title: "Telecom & Networking",
    desc: "Designing and maintaining data networks, fiber optics, and systems ensuring fast connectivity.",
    bg: "",
  },
  {
    icon: "bi-gear-wide-connected",
    title: "Control Systems & Automation",
    desc: "PLC programming, motor control setups, and process automation solutions for industrial efficiency.",
    bg: "bg-brand-orange",
  },
  {
    icon: "bi-tools",
    title: "Testing & Maintenance",
    desc: "Electrical fault diagnosis, performance testing, and preventive maintenance for reliability.",
    bg: "",
  },
  {
    icon: "bi-code-slash",
    title: "Frontend Web Development",
    desc: "Building responsive websites using HTML, CSS, JavaScript, and Bootstrap.",
    bg: "bg-brand-orange",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-brand-orange text-uppercase fw-bold">
            — What I Offer
          </h6>
          <h2 className="text-brand-navy fw-bold display-6">
            Services That Fit Your Needs
          </h2>
        </div>

        <div className="row g-4">
          {services.map(({ icon, title, desc, bg }) => (
            <div className="col-md-6 col-lg-4" key={title}>
              <div
                className="card border-0 shadow-sm h-100"
                style={{ borderRadius: "20px" }}
              >
                <div
                  className={`service-icon shadow ms-4 mt-4 ${bg}`}
                  style={{ marginTop: 0 }}
                >
                  <i className={`bi ${icon}`}></i>
                </div>
                <div className="card-body p-4 pt-3">
                  <h5 className="fw-bold text-brand-navy mb-2">{title}</h5>
                  <p className="text-muted small">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
