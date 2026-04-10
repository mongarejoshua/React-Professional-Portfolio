import { useState } from "react";

const footerLinks = ["Home", "Projects", "Skills", "About", "Blog", "Contact"];

const services = [
  "Electrical Installation",
  "Network Design",
  "Testing & Maintenance",
  "Control Systems",
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/mongarejoshua?tab=repositories",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/feed/",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:mongarejoshua@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

function FooterLink({ href, children, external }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "0.85rem",
        color: hovered ? "var(--brand-primary)" : "rgba(248,249,250,0.5)",
        textDecoration: "none",
        transition: "color 0.2s",
        marginBottom: "0.6rem",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: hovered ? "var(--brand-primary)" : "rgba(255,107,53,0.4)",
          flexShrink: 0,
          transition: "background 0.2s",
        }}
      />
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--brand-secondary)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <style>{`
        .footer-social:hover { background: var(--brand-primary) !important; border-color: var(--brand-primary) !important; color: #fff !important; transform: translateY(-3px); }
      `}</style>

      {/* Decorative rings */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "340px",
          height: "340px",
          borderRadius: "50%",
          border: "60px solid rgba(255,107,53,0.04)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          border: "40px solid rgba(255,107,53,0.03)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* ── Main grid ── */}
        <div className="row g-5 pt-5 pb-4">
          {/* Brand col */}
          <div className="col-lg-4 col-md-12">
            <a
              href="#home"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.4rem",
                fontWeight: 800,
                textDecoration: "none",
                color: "var(--brand-light)",
                display: "inline-block",
                marginBottom: "1rem",
              }}
            >
              Mongare
              <span style={{ color: "var(--brand-primary)" }}>Joshua</span>
            </a>
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(248,249,250,0.45)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
                maxWidth: "300px",
              }}
            >
              Electrical and Telecommunication Engineering student specialising
              in robust infrastructure, structured cabling, and modern
              networking solutions.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={s.label}
                  className="footer-social"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(248,249,250,0.55)",
                    textDecoration: "none",
                    transition:
                      "background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="col-lg-2 col-md-4 col-6">
            <h6
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--brand-primary)",
                marginBottom: "1.25rem",
              }}
            >
              Quick Links
            </h6>
            {footerLinks.map((link) => (
              <FooterLink key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </FooterLink>
            ))}
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-4 col-6">
            <h6
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--brand-primary)",
                marginBottom: "1.25rem",
              }}
            >
              Services
            </h6>
            {services.map((s) => (
              <div
                key={s}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.85rem",
                  color: "rgba(248,249,250,0.5)",
                  marginBottom: "0.6rem",
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "rgba(255,107,53,0.4)",
                    flexShrink: 0,
                  }}
                />
                {s}
              </div>
            ))}
          </div>

          {/* Location + availability */}
          <div className="col-lg-3 col-md-4 col-12">
            <h6
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--brand-primary)",
                marginBottom: "1.25rem",
              }}
            >
              Location
            </h6>

            {/* Location card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "0.85rem 1rem",
                marginBottom: "0.85rem",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "8px",
                  background: "rgba(255,107,53,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="var(--brand-primary)"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "rgba(248,249,250,0.3)",
                    marginBottom: "2px",
                  }}
                >
                  Based in
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--brand-light)",
                    fontWeight: 500,
                  }}
                >
                  Nairobi, Kenya
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(46,204,113,0.08)",
                border: "1px solid rgba(46,204,113,0.2)",
                borderRadius: "50px",
                padding: "0.4rem 1rem",
                fontSize: "0.78rem",
                color: "#2ecc71",
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#2ecc71",
                  flexShrink: 0,
                  animation: "footer-pulse 1.5s ease-in-out infinite",
                }}
              />
              Open to internships
            </div>
            <style>{`@keyframes footer-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}`}</style>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "1.5rem",
            paddingBottom: "1.75rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(248,249,250,0.35)",
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} Mongare Joshua. All rights
            reserved.
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(248,249,250,0.35)",
              margin: 0,
            }}
          >
            Designed &amp; developed by{" "}
            <a
              href="#home"
              style={{
                color: "var(--brand-primary)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Mongare Joshua
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
