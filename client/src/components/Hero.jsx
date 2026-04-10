import { useState } from "react";
import profileImg from "../assets/images/profile.png";
import cvFile from "../assets/files/cv.pdf";

const services = [
  { icon: "bi-lightning-charge", title: "Electrical Design & Installation" },
  { icon: "bi-cpu", title: "PCB Design" },
  { icon: "bi-diagram-3", title: "Telecom & Networking" },
  { icon: "bi-sliders", title: "Control Systems" },
];

/* ── Service card with hover state ── */
function ServiceCard({ icon, title, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        background: hovered
          ? "rgba(255,107,53,0.07)"
          : "rgba(255,255,255,0.04)",
        border: hovered
          ? "1px solid rgba(255,107,53,0.3)"
          : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "14px",
        padding: "1rem 1.25rem",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "background 0.25s, border-color 0.25s, transform 0.25s",
        animation: `cardUp 0.6s ease ${delay}s both`,
        height: "100%",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "10px",
          background: "rgba(255,107,53,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <i
          className={`bi ${icon}`}
          style={{ fontSize: "1.1rem", color: "var(--brand-primary)" }}
        />
      </div>
      <span
        style={{
          fontSize: "0.85rem",
          fontWeight: 700,
          color: "var(--brand-light)",
          lineHeight: 1.25,
        }}
      >
        {title}
      </span>
    </div>
  );
}

/* ── Main Hero ── */
export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setShowModal(true), 500);
  };

  const openFile = () => {
    window.open(cvFile, "_blank");
    setShowModal(false);
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp    { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn    { from{opacity:0} to{opacity:1} }
        @keyframes revealBar { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes badgePop  { from{opacity:0;transform:scale(.7) translateY(10px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes cardUp    { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes orbitSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

        .hero-section-wrap          { background: var(--brand-secondary); padding: 3rem 0 0; position: relative; overflow: hidden; }
        .hero-section-wrap::before  { content:''; position:absolute; top:-150px; right:-150px; width:500px; height:500px; border-radius:50%; border:80px solid rgba(255,107,53,0.06); pointer-events:none; }
        .hero-section-wrap::after   { content:''; position:absolute; bottom:80px; left:-80px; width:300px; height:300px; border-radius:50%; border:50px solid rgba(255,107,53,0.04); pointer-events:none; }

        .hero-underline-wrap         { position:relative; display:inline-block; }
        .hero-underline-wrap::after  { content:''; position:absolute; left:0; bottom:-4px; width:100%; height:3px; background:var(--brand-primary); border-radius:2px; transform-origin:left; animation:revealBar 1s ease .8s both; }

        .hero-orbit-ring        { position:absolute; inset:-20px; border-radius:50%; border:1.5px dashed rgba(255,107,53,0.25); animation:orbitSpin 18s linear infinite; }
        .hero-orbit-dot         { position:absolute; top:6px; left:50%; transform:translateX(-50%); width:10px; height:10px; border-radius:50%; background:var(--brand-primary); }
        .hero-img-float         { animation: floatImg 5s ease-in-out infinite; }
        .hero-badge-anim        { animation: badgePop .6s ease .9s both; }

        .hero-btn-orange        { background:var(--brand-primary); color:#fff; border:none; border-radius:50px; padding:.7rem 2rem;  cursor:pointer; transition:background .2s, transform .15s; }
        .hero-btn-orange:hover  { background:#e55a24; transform:translateY(-2px); }
        .hero-btn-ghost         { background:transparent; color:var(--brand-light); border:1.5px solid rgba(248,249,250,.25); border-radius:50px; padding:.7rem 2rem;  text-decoration:none; display:inline-flex; align-items:center; transition:border-color .2s, color .2s, transform .15s; }
        .hero-btn-ghost:hover   { border-color:var(--brand-primary); color:var(--brand-primary); transform:translateY(-2px); }
      `}</style>

      <section id="home" className="hero-section-wrap">
        <div className="container">
          <div className="row align-items-center gy-2">
            {/* ── Text ── */}
            <div className="col-lg-6 text-center text-lg-start">
              {/* Eyebrow */}
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--brand-primary)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "0.75rem",
                  animation: "fadeUp .6s ease .1s both",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "24px",
                    height: "2px",
                    background: "var(--brand-primary)",
                  }}
                />
                Electrical &amp; Telecom Engineering Student
              </p>
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "2px",
                  background: "var(--brand-primary)",
                }}
              />

              {/* Heading */}
              <h1
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                  fontWeight: 800,
                  color: "var(--brand-light)",
                  lineHeight: 1.1,
                  marginBottom: "1.25rem",
                  animation: "fadeUp .7s ease .25s both",
                }}
              >
                Building skills in{" "}
                <span style={{ color: "var(--brand-primary)" }}>
                  <span className="hero-underline-wrap">power</span>
                </span>{" "}
                &amp;
                <br />
                communication systems
              </h1>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(248,249,250,0.55)",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                  maxWidth: "480px",
                  margin: "0 auto 2rem",
                  animation: "fadeUp .7s ease .4s both",
                }}
                className="mx-lg-0"
              >
                Developing hands-on experience in electrical design,
                installations and networking — combining classroom knowledge
                with real-world problem solving and modern engineering tools.
              </p>

              {/* Buttons */}
              <div
                className="d-flex gap-3 justify-content-center justify-content-lg-start"
                style={{ animation: "fadeUp .7s ease .55s both" }}
              >
                <button className="hero-btn-orange" onClick={handleDownload}>
                  Download CV
                </button>
                <a href="#projects" className="hero-btn-ghost">
                  View My Work
                </a>
              </div>
            </div>

            {/* ── Image ── */}
            <div
              className="col-lg-6 text-center mt-5"
              style={{ animation: "fadeIn .8s ease .3s both" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "300px",
                  height: "300px",
                  margin: "0 auto",
                }}
              >
                {/* Orbit ring */}
                <div className="hero-orbit-ring">
                  <div className="hero-orbit-dot" />
                </div>

                {/* Profile image */}
                <img
                  src={profileImg}
                  alt="Electrical and Telecommunications Engineer"
                  className="hero-img-float"
                  style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "top",
                    border: "4px solid rgba(255,107,53,0.3)",
                    position: "relative",
                    zIndex: 1,
                  }}
                />

                {/* Badge */}
                <div
                  className="hero-badge-anim"
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "-10px",
                    zIndex: 2,
                    background: "var(--brand-primary)",
                    color: "#fff",
                    borderRadius: "12px",
                    padding: "0.5rem 0.9rem",
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  MMU Kenya
                  <span
                    style={{
                      display: "block",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 400,
                      opacity: 0.8,
                    }}
                  >
                    Undergraduate · ETE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Services strip ── */}
          <div
            style={{
              marginTop: "5rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: "2rem",
              paddingBottom: "2rem",
            }}
          >
            <div className="row g-3">
              {services.map((s, i) => (
                <div className="col-12 col-md-6 col-lg-3" key={s.title}>
                  <ServiceCard
                    icon={s.icon}
                    title={s.title}
                    delay={0.7 + i * 0.12}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Download modal ── */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            zIndex: 1050,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <div
            style={{
              background: "var(--brand-secondary)",
              color: "var(--brand-light)",
              border: "1px solid rgba(255,107,53,0.35)",
              borderRadius: "20px",
              width: "100%",
              maxWidth: "420px",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.25rem 1.5rem 1rem",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h5
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  color: "var(--brand-light)",
                  margin: 0,
                }}
              >
                Download Complete
              </h5>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="rgba(248,249,250,0.6)"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                fontSize: "0.9rem",
                color: "rgba(248,249,250,0.6)",
                lineHeight: 1.7,
              }}
            >
              Your CV has been downloaded successfully. Would you like to open
              it now?
            </div>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                padding: "0 1.5rem 1.5rem",
              }}
            >
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: "transparent",
                  color: "var(--brand-light)",
                  border: "1.5px solid rgba(248,249,250,0.2)",
                  borderRadius: "50px",
                  padding: "0.55rem 1.5rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.88rem",
                  cursor: "pointer",
                }}
              >
                No
              </button>
              <button
                onClick={openFile}
                style={{
                  background: "var(--brand-primary)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50px",
                  padding: "0.55rem 1.5rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.88rem",
                  cursor: "pointer",
                }}
              >
                Open CV
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
