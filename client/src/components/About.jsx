export default function About() {
  const traits = [
    {
      label: "University",
      value: "MMU Kenya",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="var(--brand-primary)"
        >
          <path d="M12 3L1 9l4 2.18V17h2v-4.82l2 1.09V17c0 1.1 2.24 2 5 2s5-.9 5-2v-3.73l3-1.63V17h2V9L12 3z" />
        </svg>
      ),
    },
    {
      label: "Location",
      value: "Nairobi, Kenya",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="var(--brand-primary)"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
    },
    {
      label: "Focus",
      value: "Telecom & Networking",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="var(--brand-primary)"
        >
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      ),
    },
    {
      label: "Availability",
      value: "Open to Internships",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="var(--brand-primary)"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { num: "3+", label: "Yrs Study" },
    { num: "12+", label: "Certs" },
    { num: "97%", label: "Dedication" },
  ];

  return (
    <section
      id="about"
      style={{
        background: "var(--brand-secondary)",
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative rings */}
      <style>{`
        #about::before { content:''; position:absolute; top:-130px; right:-110px; width:420px; height:420px; border-radius:50%; border:70px solid rgba(255,107,53,0.05); pointer-events:none; }
        #about::after  { content:''; position:absolute; bottom:-80px; left:-60px; width:280px; height:280px; border-radius:50%; border:50px solid rgba(255,107,53,0.04); pointer-events:none; }
      `}</style>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="row g-0 align-items-stretch rounded-4 overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* ── Image Column ── */}
          <div
            className="col-lg-5"
            style={{ position: "relative", minHeight: "560px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
              alt="About"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* Dark overlay so image blends with navy bg */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(11,27,50,0.25)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* ── Content Column ── */}
          <div
            className="col-lg-7 p-5"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Eyebrow */}
            <p
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--brand-primary)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "28px",
                  height: "2px",
                  background: "var(--brand-primary)",
                  flexShrink: 0,
                }}
              />
              About Me
            </p>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                color: "var(--brand-light)",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Bridging Engineering
              <br />
              &amp;{" "}
              <span style={{ color: "var(--brand-primary)" }}>
                Digital Application
              </span>
            </h2>

            {/* Body */}
            <p
              style={{
                fontSize: "0.92rem",
                color: "rgba(248,249,250,0.55)",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              I'm a dynamic student building a solid foundation as a Bachelor's
              degree candidate in Electrical and Telecommunication Engineering
              at Multimedia University of Kenya.
            </p>
            <p
              style={{
                fontSize: "0.92rem",
                color: "rgba(248,249,250,0.55)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Driven by a passion for reliable power and communication systems,
              I focus on mastering electrical installations, structured cabling,
              and networking — combining theory with hands-on practice.
            </p>

            {/* Trait Grid */}
            <div className="row g-2 mb-4">
              {traits.map((t) => (
                <div key={t.label} className="col-sm-6">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: "12px",
                      padding: "0.9rem 1rem",
                      borderLeft: "3px solid var(--brand-primary)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderLeftWidth: "3px",
                      borderLeftColor: "var(--brand-primary)",
                      borderLeftStyle: "solid",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        flexShrink: 0,
                        borderRadius: "8px",
                        background: "rgba(255,107,53,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {t.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.78rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "var(--brand-primary)",
                          fontWeight: 600,
                        }}
                      >
                        {t.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "var(--brand-light)",
                        }}
                      >
                        {t.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div
              className="d-flex align-items-center gap-4 mb-5"
              style={{ flexWrap: "wrap" }}
            >
              {stats.map((s, i) => (
                <div key={s.label} className="d-flex align-items-center gap-4">
                  {i !== 0 && (
                    <div
                      style={{
                        width: "1px",
                        height: "40px",
                        background: "rgba(248,249,250,0.1)",
                      }}
                    />
                  )}
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "2.2rem",
                        fontWeight: 800,
                        color: "var(--brand-primary)",
                        lineHeight: 1,
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "rgba(248,249,250,0.4)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginTop: "4px",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3">
              <button
                style={{
                  background: "var(--brand-primary)",
                  color: "#fff",
                  border: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  padding: "0.75rem 2rem",
                  borderRadius: "50px",
                  cursor: "pointer",
                  letterSpacing: "0.03em",
                }}
              >
                Download CV
              </button>
              <button
                style={{
                  background: "transparent",
                  color: "var(--brand-light)",
                  border: "1.5px solid rgba(248,249,250,0.2)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  padding: "0.75rem 2rem",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
