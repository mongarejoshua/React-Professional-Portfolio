import { useState } from "react";

/* ── Contact info row ── */
function InfoItem({ href, icon, label, value, target }) {
  const [hovered, setHovered] = useState(false);
  const Tag = href ? "a" : "div";

  return (
    <Tag
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "0.85rem 1rem",
        borderRadius: "12px",
        background: hovered
          ? "rgba(255,107,53,0.08)"
          : "rgba(255,255,255,0.04)",
        border: hovered
          ? "1px solid rgba(255,107,53,0.25)"
          : "1px solid rgba(255,255,255,0.07)",
        transition: "background 0.2s, border-color 0.2s",
        marginBottom: "0.75rem",
        textDecoration: "none",
        cursor: href ? "pointer" : "default",
      }}
    >
      <div
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "9px",
          background: "rgba(255,107,53,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <i
          className={`bi ${icon}`}
          style={{ fontSize: "1rem", color: "var(--brand-primary)" }}
        />
      </div>
      <div>
        <div
          style={{
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "rgba(248,249,250,0.35)",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: "0.85rem",
            color: "var(--brand-light)",
            fontWeight: 500,
          }}
        >
          {value}
        </div>
      </div>
    </Tag>
  );
}

/* ── Field label ── */
const FieldLabel = ({ children }) => (
  <label
    style={{
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "rgba(248,249,250,0.4)",
      marginBottom: "0.45rem",
      display: "block",
    }}
  >
    {children}
  </label>
);

/* ── Input style — dark themed ── */
const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "10px",
  padding: "0.75rem 1rem",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.9rem",
  color: "var(--brand-light)",
  outline: "none",
  transition: "border-color 0.2s, background 0.2s",
  appearance: "none",
};

/* ── Main ── */
export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ show: false, message: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setModal({
          show: true,
          message: "Message sent successfully!",
          type: "success",
        });
        e.target.reset();
      })
      .catch(() => {
        setModal({
          show: true,
          message: "Something went wrong. Please try again.",
          type: "error",
        });
      })
      .finally(() => setLoading(false));
  };

  const closeModal = () => setModal({ show: false, message: "", type: "" });
  const isSuccess = modal.type === "success";

  return (
    <>
      <style>{`
        @keyframes fadeUp     { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes modalPop   { from{opacity:0;transform:scale(.92)} to{opacity:1;transform:scale(1)} }
        @keyframes availPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
        @keyframes spin       { to{transform:rotate(360deg)} }

        #contact::before { content:''; position:absolute; top:-120px; right:-100px; width:380px; height:380px; border-radius:50%; border:65px solid rgba(255,107,53,0.05); pointer-events:none; }
        #contact::after  { content:''; position:absolute; bottom:-80px; left:-60px; width:260px; height:260px; border-radius:50%; border:45px solid rgba(255,107,53,0.04); pointer-events:none; }

        .contact-field::placeholder { color: rgba(248,249,250,0.25) !important; }
        .contact-field:focus { border-color: var(--brand-primary) !important; background: rgba(255,255,255,0.08) !important; }
        .contact-submit:hover { background: var(--brand-primary) !important; transform: translateY(-2px); }
        .contact-avail-dot    { animation: availPulse 1.5s ease-in-out infinite; }
      `}</style>

      {/* ── Success / Error modal ── */}
      {modal.show && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            zIndex: 1050,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <div
            style={{
              background: "#0f2440",
              border: `1px solid ${isSuccess ? "rgba(46,204,113,0.3)" : "rgba(231,76,60,0.3)"}`,
              borderRadius: "20px",
              width: "100%",
              maxWidth: "340px",
              padding: "2rem",
              textAlign: "center",
              animation: "modalPop .3s ease both",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: isSuccess
                  ? "rgba(46,204,113,0.12)"
                  : "rgba(231,76,60,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill={isSuccess ? "#2ecc71" : "#e74c3c"}
              >
                {isSuccess ? (
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                ) : (
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                )}
              </svg>
            </div>
            <h5
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "1.1rem",
                color: "var(--brand-light)",
                marginBottom: "0.4rem",
              }}
            >
              {isSuccess ? "Message Sent!" : "Something went wrong"}
            </h5>
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(248,249,250,0.5)",
                lineHeight: 1.6,
                marginBottom: "1.25rem",
              }}
            >
              {modal.message}
            </p>
            <button
              onClick={closeModal}
              style={{
                width: "100%",
                background: "var(--brand-primary)",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                padding: "0.7rem",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ── Contact Section ── */}
      <section
        id="contact"
        style={{
          background: "var(--brand-secondary)",
          padding: "5rem 0",
          fontFamily: "'DM Sans', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Section header */}
          <div
            className="text-center mb-5"
            style={{ animation: "fadeUp .6s ease .1s both" }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--brand-primary)",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "0.75rem",
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
              Get In Touch
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "2px",
                  background: "var(--brand-primary)",
                }}
              />
            </p>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                color: "var(--brand-light)",
                lineHeight: 1.15,
                marginBottom: "0.5rem",
              }}
            >
              Let's Discuss Your{" "}
              <span style={{ color: "var(--brand-primary)" }}>Project</span>
            </h2>
            <p
              style={{
                color: "rgba(248,249,250,0.5)",
                fontSize: "0.92rem",
                maxWidth: "460px",
                margin: "0 auto",
              }}
            >
              Reach out via email, LinkedIn, or the form below — I'll get back
              to you promptly.
            </p>
          </div>

          {/* Card wrapper */}
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              flexWrap: "wrap",
              animation: "fadeUp .6s ease .22s both",
            }}
          >
            {/* ── Left panel ── */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                padding: "3.5rem 3rem",
                flex: "1 1 320px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Mini decorative rings inside the panel */}
              <div
                style={{
                  position: "absolute",
                  top: "-80px",
                  right: "-80px",
                  width: "240px",
                  height: "240px",
                  borderRadius: "50%",
                  border: "40px solid rgba(255,107,53,0.05)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-50px",
                  left: "-40px",
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  border: "30px solid rgba(255,107,53,0.04)",
                  pointerEvents: "none",
                }}
              />

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
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "24px",
                    height: "2px",
                    background: "var(--brand-primary)",
                    flexShrink: 0,
                  }}
                />
                Contact Info
              </p>

              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  color: "var(--brand-light)",
                  lineHeight: 1.15,
                  marginBottom: "1rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Say hello,
                <br />
                let's{" "}
                <span style={{ color: "var(--brand-primary)" }}>connect</span>
              </h3>

              <p
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(248,249,250,0.5)",
                  lineHeight: 1.8,
                  marginBottom: "1.75rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Feel free to reach out via Email, LinkedIn, or the contact form
                on the right.
              </p>

              <div style={{ position: "relative", zIndex: 1 }}>
                <InfoItem
                  href="mailto:mongarejoshua@gmail.com"
                  icon="bi-envelope-fill"
                  label="Email"
                  value="mongarejoshua@gmail.com"
                />
                <InfoItem
                  href="https://www.linkedin.com/feed/"
                  icon="bi-linkedin"
                  label="LinkedIn"
                  value="linkedin.com/in/joshua"
                  target="_blank"
                />
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "1.5rem",
                  background: "rgba(46,204,113,0.1)",
                  border: "1px solid rgba(46,204,113,0.25)",
                  borderRadius: "50px",
                  padding: "0.4rem 1rem",
                  fontSize: "0.78rem",
                  color: "#2ecc71",
                  fontWeight: 500,
                  alignSelf: "flex-start",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  className="contact-avail-dot"
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#2ecc71",
                    flexShrink: 0,
                  }}
                />
                Available for internships
              </div>
            </div>

            {/* ── Right panel: form ── */}
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                padding: "3.5rem 3rem",
                flex: "1 1 380px",
              }}
            >
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="row g-3">
                  <div className="col-12">
                    <FieldLabel>Your Name</FieldLabel>
                    <input
                      type="text"
                      name="name"
                      className="contact-field"
                      placeholder="Enter your name"
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div className="col-md-6">
                    <FieldLabel>Email Address</FieldLabel>
                    <input
                      type="email"
                      name="email"
                      className="contact-field"
                      placeholder="example@gmail.com"
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div className="col-md-6">
                    <FieldLabel>Subject</FieldLabel>
                    <input
                      type="text"
                      name="subject"
                      className="contact-field"
                      placeholder="Project Inquiry"
                      style={inputStyle}
                    />
                  </div>
                  <div className="col-12">
                    <FieldLabel>Message</FieldLabel>
                    <textarea
                      name="message"
                      rows={5}
                      className="contact-field"
                      placeholder="Tell me about your project..."
                      required
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      disabled={loading}
                      className="contact-submit"
                      style={{
                        width: "100%",
                        background: "var(--brand-primary)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "10px",
                        padding: "0.85rem 1rem",
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        cursor: loading ? "not-allowed" : "pointer",
                        transition: "background 0.2s, transform 0.15s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        opacity: loading ? 0.7 : 1,
                      }}
                    >
                      {loading ? (
                        <>
                          <span
                            style={{
                              width: "16px",
                              height: "16px",
                              borderRadius: "50%",
                              border: "2px solid rgba(255,255,255,0.3)",
                              borderTopColor: "#fff",
                              animation: "spin .6s linear infinite",
                              display: "inline-block",
                            }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="#fff"
                          >
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                          </svg>
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
