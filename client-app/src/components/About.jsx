export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="container">
        <div className="row g-0 align-items-center rounded-4 overflow-hidden shadow-sm">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000"
              className="w-100 h-100"
              style={{ minHeight: "400px", objectFit: "cover" }}
              alt="About Image"
            />
          </div>
          <div className="col-lg-6 bg-brand-navy text-white p-5">
            <h6 className="text-brand-orange text-uppercase fw-bold mb-3">
              — About Me
            </h6>
            <h3 className="fw-bold mb-4">
              Bridging Engineering & Digital Application
            </h3>
            <p className="text-white-50 mb-4">
              I'm a dynamic student, building a solid foundation as a Bachelor's
              degree candidate in Electrical and Telecommunication Engineering
              at Multimedia University Of Kenya.
            </p>
            <p className="text-white-50 mb-4">
              Fueling my passion for technology, I also do part-time frontend
              web development, translating ideas into compelling, responsive,
              and functional user interfaces.
            </p>

            <div className="d-flex align-items-center gap-4 mt-4">
              <div>
                <h2 className="text-brand-orange fw-bold display-5">MMU</h2>
                <span className="small text-white-50">University</span>
              </div>
              <div className="vr bg-secondary" style={{ height: "50px" }}></div>
              <div>
                <h2 className="text-brand-orange fw-bold display-5">100%</h2>
                <span className="small text-white-50">Dedication</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
