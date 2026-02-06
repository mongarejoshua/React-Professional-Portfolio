import "../css/Skills.css"

const skills = [
  { icon: "bi-motherboard", name: "KiCad & TinkerCAD", percent: 75 },
  { icon: "bi-code-square", name: "Python & C++", percent: 60 },
  { icon: "bi-broadcast", name: "GNU Radio / RF", percent: 24 },
  {
    icon: "bi-browser-chrome",
    name: "HTML,CSS,JS,Bootstrap",
    percent: 95,
  },
  { icon: "bi-building", name: "AutoCAD", percent: 70 },
  { icon: "bi bi-filetype-jsx", name: "React", percent: 45 },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 bg-brand-navy text-white p-5 mb-4 mb-lg-0 rounded-start-4">
            <h6 className="text-brand-orange text-uppercase fw-bold">
              - Technical Proficiency -
            </h6>
            <h2 className="text-white fw-bold display-6 mb-4">
              Tools & Expertise
            </h2>
            <p className="text-white-50">
              My background allows me to bridge the gap between underlying
              engineering principles and practical digital application. I use
              open-source and industry-standard tools.
            </p>
          </div>

          <div className="col-lg-7">
            <div className="row g-3">
              {skills.map(({ icon, name, percent }) => (
                <div className="col-md-6" key={name}>
                  <div className="p-3 border rounded-3 d-flex align-items-center bg-light">
                    <i className={`bi ${icon} fs-3 text-brand-orange me-3`}></i>
                    <div className="w-100">
                      <div className="d-flex justify-content-between fw-bold text-brand-navy">
                        <span>{name}</span>
                        <span>{percent}%</span>
                      </div>
                      <div className="progress mt-2" style={{ height: "6px" }}>
                        <div
                          className="progress-bar bg-brand-navy"
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
