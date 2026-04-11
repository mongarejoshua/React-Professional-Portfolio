import { useState, useEffect, useRef } from "react";

const skills = [
  { icon: "bi-motherboard", name: "KiCad & TinkerCAD", percent: 75 },
  { icon: "bi-code-square", name: "Python & C++", percent: 40 },
  { icon: "bi-building", name: "AutoCAD", percent: 70 },
  { icon: "bi-graph-up", name: "MATLAB", percent: 15 },
  { icon: "bi-microsoft", name: "Windows Installation", percent: 85 },
];

/* ── Skill Card ── */
function SkillCard({ icon, name, percent, animate }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#fff" : "rgba(248,249,250,0.06)",
        border: hovered
          ? "1px solid rgba(255,107,53,0.45)"
          : "1px solid rgba(248,249,250,0.1)",
        borderRadius: "14px",
        padding: "1.1rem 1.25rem",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition:
          "transform 0.25s ease, border-color 0.25s ease, background 0.25s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "6px",
        }}
      >
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "10px",
            flexShrink: 0,
            background: "rgba(255,107,53,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <i
            className={`bi ${icon}`}
            style={{ fontSize: "1.1rem", color: "var(--brand-primary)" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.88rem",
              fontWeight: 700,
              color: hovered ? "var(--brand-secondary)" : "var(--brand-light)",
            }}
          >
            {name}
          </span>
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.88rem",
              fontWeight: 800,
              color: "var(--brand-primary)",
            }}
          >
            {percent}%
          </span>
        </div>
      </div>

      {/* Track */}
      <div
        style={{
          height: "5px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "99px",
          marginTop: "6px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: animate ? `${percent}%` : "0%",
            borderRadius: "99px",
            background: "var(--brand-primary)",
            transition: animate ? "width 1.2s cubic-bezier(.4,0,.2,1)" : "none",
          }}
        />
      </div>
    </div>
  );
}

/* ── Main ── */
export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        background: "var(--brand-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative rings */}
      <style>{`
        #skills::before {
          content: '';
          position: absolute;
          width: 420px; height: 420px; border-radius: 50%;
          border: 70px solid rgba(255,107,53,0.05);
          top: -130px; right: -110px; pointer-events: none;
        }
        #skills::after {
          content: '';
          position: absolute;
          width: 280px; height: 280px; border-radius: 50%;
          border: 50px solid rgba(255,107,53,0.04);
          bottom: -80px; left: -60px; pointer-events: none;
        }
      `}</style>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="container-fluid px-0">
          <div className="row g-0 align-items-center">
            {/* ── Left: copy ── */}
            <div
              className="col-lg-4"
              style={{
                padding: "3rem 3rem 3rem 3rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
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
                Technical Proficiency
              </p>

              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                  fontWeight: 800,
                  color: "var(--brand-light)",
                  lineHeight: 1.1,
                  marginBottom: "1.25rem",
                }}
              >
                Tools &amp;{" "}
                <span style={{ color: "var(--brand-primary)" }}>Expertise</span>
              </h2>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(248,249,250,0.5)",
                  lineHeight: 1.8,
                  marginBottom: "2.5rem",
                }}
              >
                My background allows me to bridge the gap between underlying
                engineering principles and practical digital application — using
                open-source and industry-standard tools.
              </p>

              {/* Stats */}
              <div style={{ display: "flex", gap: "2rem" }}>
                {[
                  { num: "4+", lbl: "Tools" },
                
                  { num: "3yr", lbl: "Practice" },
                ].map(({ num, lbl }) => (
                  <div
                    key={lbl}
                    style={{
                      borderLeft: "2px solid rgba(255,107,53,0.4)",
                      paddingLeft: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "1.7rem",
                        fontWeight: 800,
                        color: "var(--brand-primary)",
                        lineHeight: 1,
                      }}
                    >
                      {num}
                    </div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        color: "rgba(248,249,250,0.4)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginTop: "3px",
                      }}
                    >
                      {lbl}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: skill cards ── */}
            <div
              className="col-lg-8"
              style={{
                borderLeft: "1px solid rgba(255,255,255,0.06)",
                padding: "5rem 4rem 5rem 3.5rem",
              }}
            >
              <div className="row g-3">
                {skills.map(({ icon, name, percent }) => (
                  <div className="col-md-6" key={name}>
                    <SkillCard
                      icon={icon}
                      name={name}
                      percent={percent}
                      animate={animate}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
