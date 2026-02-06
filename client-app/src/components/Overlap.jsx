import "../css/Overlap.css"

const services = [
  { icon: "bi-lightning-charge", title: "Electrical Installation" },
  { icon: "bi-cpu", title: "PCB Design" },
  { icon: "bi-diagram-3", title: "Telecom & Networking" },
  { icon: "bi-sliders", title: "Control Systems" },
];

const Overlap = () => {
  return (
    <section className="overlap-section position-relative">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="card h-100 shadow-lg overlap-card">
                <div className="card-body d-flex align-items-center gap-2">
                  <i
                    className={`bi ${service.icon} fs-4 text-brand-orange`}
                  ></i>
                  <h6 className="fw-semibold mb-0">{service.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overlap;
