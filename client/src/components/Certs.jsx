import React from "react";

const certificates = [
  {
    id: 1,
    issuer: "Cisco Networking Academy",
    name: "Getting Started with Cisco Packet Tracer",
    desc: "Hands-on experience in network simulation, focusing on the configuration and troubleshooting of virtualized network topologies.",
    date: "Mar 2024",
    verified: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="var(--brand-primary)"
      >
        <path d="M12 3L1 9l4 2.18V17h2v-4.82l2 1.09V17c0 1.1 2.24 2 5 2s5-.9 5-2v-3.73l3-1.63V17h2V9L12 3zm0 13c-1.69 0-3-.45-3-1v-1.09l3 1.63 3-1.63V15c0 .55-1.31 1-3 1z" />
      </svg>
    ),
  },
  {
    id: 2,
    issuer: "freeCodeCamp",
    name: "JavaScript Algorithms and Data Structures",
    desc: "Mastered core programming logic and problem-solving through the implementation of complex algorithms and Object-Oriented Programming (OOP).",
    date: "Sep 2023",
    verified: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="var(--brand-primary)"
      >
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
      </svg>
    ),
  },
  {
    id: 3,
    issuer: "St. Ann's College",
    name: "Internet and Computing Core Certification",
    desc: "Validated proficiency in digital literacy, computer hardware, and professional data management using the Microsoft Office suite.",
    date: "Jun 2023",
    verified: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="var(--brand-primary)"
      >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
  },
  {
    id: 4,
    issuer: "freeCodeCamp",
    name: "Responsive Web Design",
    desc: "Developed mobile-first, accessible web interfaces using modern CSS techniques like Flexbox and Grid.",
    date: "Nov 2022",
    verified: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="var(--brand-primary)"
      >
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    ),
  },
  {
    id: 5,
    issuer: "freeCodeCamp",
    name: "Scientific Computing with Python",
    desc: "Applied Python to solve mathematical and scientific problems, covering data manipulation, networking, and web services.",
    date: "Aug 2022",
    verified: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="var(--brand-primary)"
      >
        <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
      </svg>
    ),
  },
  {
    id: 6,
    issuer: "Kaggle",
    name: "Introduction to Programming Using Python",
    desc: "Built a foundational understanding of Python syntax, data types, and control flow for computational analysis.",
    date: "Feb 2023",
    verified: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="var(--brand-primary)"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  },
];


const stats = [
  { num: "4+", label: "Certificates" },
  { num: "400+", label: "Learning Hours" },
  { num: "2022", label: "Active Since" },
];

const styles = {
  section: {
    background: "var(--brand-secondary)",
    padding: "5rem 0",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'DM Sans', sans-serif",
  },
  eyebrow: {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--brand-primary)",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  eyebrowLine: {
    display: "inline-block",
    width: "28px",
    height: "2px",
    background: "var(--brand-primary)",
    flexShrink: 0,
  },
  sectionTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 800,
    color: "var(--brand-light)",
    lineHeight: 1.1,
    margin: "0.5rem 0 0",
  },
  sectionTitleAccent: {
    color: "var(--brand-primary)",
  },
  sectionDesc: {
    color: "rgba(248,249,250,0.45)",
    fontSize: "0.9rem",
    lineHeight: 1.75,
    margin: 0,
  },
  featuredCard: {
    background: "rgba(255,107,53,0.07)",
    border: "1px solid rgba(255,107,53,0.2)",
    borderRadius: "20px",
    padding: "2rem",
    display: "flex",
    gap: "1.5rem",
    alignItems: "flex-start",
    position: "relative",
    overflow: "hidden",
  },
  featuredRibbon: {
    position: "absolute",
    top: "14px",
    right: "-28px",
    background: "var(--brand-primary)",
    color: "#fff",
    fontSize: "9px",
    fontWeight: 700,
    letterSpacing: "0.15em",
    padding: "3px 36px",
    transform: "rotate(45deg)",
  },
  featuredIconWrap: {
    width: "64px",
    height: "64px",
    flexShrink: 0,
    borderRadius: "16px",
    background: "rgba(255,107,53,0.18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  featuredTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.25rem",
    fontWeight: 800,
    color: "var(--brand-light)",
    marginBottom: "0.3rem",
  },
  featuredSub: {
    fontSize: "0.83rem",
    color: "rgba(248,249,250,0.55)",
    marginBottom: "0.75rem",
    lineHeight: 1.55,
  },
  issuerText: {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--brand-primary)",
    marginBottom: "0.3rem",
  },
  skillPill: {
    display: "inline-block",
    fontSize: "10px",
    padding: "3px 10px",
    borderRadius: "20px",
    background: "rgba(248,249,250,0.06)",
    color: "rgba(248,249,250,0.55)",
    margin: "0 4px 4px 0",
    border: "1px solid rgba(248,249,250,0.1)",
  },
  badgeVerified: {
    display: "inline-block",
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "3px 10px",
    borderRadius: "20px",
    background: "rgba(46,204,113,0.12)",
    color: "#2ecc71",
    border: "1px solid rgba(46,204,113,0.25)",
  },
  badgeCredential: {
    display: "inline-block",
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "3px 10px",
    borderRadius: "20px",
    background: "rgba(255,107,53,0.15)",
    color: "var(--brand-primary)",
    border: "1px solid rgba(255,107,53,0.25)",
  },
  metaText: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "0.78rem",
    color: "rgba(248,249,250,0.35)",
  },
  statsBar: {
    borderTop: "1px solid rgba(248,249,250,0.07)",
    paddingTop: "2.5rem",
    marginTop: "3rem",
    display: "flex",
    gap: 0,
    flexWrap: "wrap",
  },
  statNum: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "2rem",
    fontWeight: 800,
    color: "var(--brand-primary)",
    lineHeight: 1,
    marginBottom: "4px",
  },
  statLabel: {
    fontSize: "0.75rem",
    color: "rgba(248,249,250,0.4)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
};

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="rgba(248,249,250,0.3)">
    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
  </svg>
);

function CertCard({ cert }) {
  const [hovered, setHovered] = React.useState(false);

  const cardStyle = {
    background: hovered ? "rgba(255,107,53,0.05)" : "rgba(248,249,250,0.04)",
    border: hovered
      ? "1px solid rgba(255,107,53,0.35)"
      : "1px solid rgba(248,249,250,0.08)",
    borderRadius: "16px",
    padding: "1.75rem 1.5rem",
    transition:
      "transform 0.3s ease, border-color 0.3s ease, background 0.3s ease",
    transform: hovered ? "translateY(-6px)" : "translateY(0)",
    position: "relative",
    overflow: "hidden",
    height: "100%",
    cursor: "default",
  };

  const accentBar = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "linear-gradient(90deg, var(--brand-primary), transparent)",
    transform: hovered ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.35s ease",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={accentBar} />
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: "rgba(255,107,53,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.25rem",
        }}
      >
        {cert.icon}
      </div>
      <p style={styles.issuerText}>{cert.issuer}</p>
      <p
        style={{
          fontSize: "1.05rem",
          fontWeight: 700,
          color: "var(--brand-light)",
          lineHeight: 1.3,
          marginBottom: "0.5rem",
        }}
      >
        {cert.name}
      </p>
      <p
        style={{
          fontSize: "0.83rem",
          color: "rgba(248,249,250,0.5)",
          lineHeight: 1.6,
          marginBottom: "1.25rem",
        }}
      >
        {cert.desc}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={cert.verified ? styles.badgeVerified : styles.badgeCredential}
        >
          {cert.verified ? "✓ Verified" : "Credential"}
        </span>
        <span style={styles.metaText}>
          <CalendarIcon />
          {cert.date}
        </span>
      </div>
    </div>
  );
}

export default function CertificatesSection() {
  return (
    <>
      {/* If not already in index.css or index.html, add these font imports */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" /> */}

      <section style={styles.section}>
        <div className="container">
          {/* Header */}
          <div className="row mb-5">
            <div className="col-lg-6">
              <p style={styles.eyebrow}>
                <span style={styles.eyebrowLine} />
                Recognition &amp; Learning
              </p>
              <h2 style={styles.sectionTitle}>
                Certificates &amp;
                <br />
                <span style={styles.sectionTitleAccent}>Achievements</span>
              </h2>
            </div>
            <div className="col-lg-6 d-flex align-items-end">
              <p style={styles.sectionDesc}>
                A curated collection of professional certifications, completed
                courses, and industry recognition — representing a continuous
                commitment to growth and excellence.
              </p>
            </div>
          </div>


          {/* Certificate Grid */}
          <div className="row g-3">
            {certificates.map((cert) => (
              <div key={cert.id} className="col-md-6 col-lg-4">
                <CertCard cert={cert} />
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div style={styles.statsBar}>
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  minWidth: "120px",
                  textAlign: "center",
                  padding: "0.75rem 0",
                  position: "relative",
                  borderLeft:
                    i !== 0 ? "1px solid rgba(248,249,250,0.08)" : "none",
                }}
              >
                <div style={styles.statNum}>{s.num}</div>
                <div style={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
