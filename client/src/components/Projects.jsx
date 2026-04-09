import { useState, useEffect, useRef } from "react";
import projects from "../data/projects";

/* ─── PAGINATION ─── */
function Pagination({ align, currentPage, totalPages, setCurrentPage }) {
  if (totalPages <= 1) return null;
  return (
    <nav className={`d-flex ${align}`}>
      <ul className="pagination mb-0" style={{ gap: "4px" }}>
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            style={pageLinkStyle}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </button>
        </li>

        {[...Array(totalPages)].map((_, i) => (
          <li
            key={i}
            className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
          >
            <button
              className="page-link"
              style={
                currentPage === i + 1
                  ? {
                      ...pageLinkStyle,
                      background: "var(--brand-primary)",
                      borderColor: "var(--brand-primary)",
                      color: "#fff",
                    }
                  : pageLinkStyle
              }
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
        >
          <button
            className="page-link"
            style={pageLinkStyle}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

const pageLinkStyle = {
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
  color: "var(--brand-secondary)",
  fontSize: "0.85rem",
  fontWeight: 500,
  padding: "0.4rem 0.85rem",
  fontFamily: "'DM Sans', sans-serif",
  transition: "all 0.2s",
};

/* ─── PROJECT CARD ─── */
function ProjectCard({ project, onView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: "#fff",
        border: hovered
          ? "1px solid rgba(255,107,53,0.35)"
          : "1px solid #e5e7eb",
        borderRadius: "16px",
        overflow: "hidden",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.3s ease, border-color 0.3s ease",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div
        style={{ position: "relative", overflow: "hidden", height: "200px" }}
      >
        <img
          src={project.img}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "var(--brand-primary)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />
      </div>

      {/* Body */}
      <div
        style={{
          padding: "1.25rem 1.25rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: "10px",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "3px 12px",
            borderRadius: "20px",
            background: "rgba(255,107,53,0.12)",
            color: "var(--brand-primary)",
            border: "1px solid rgba(255,107,53,0.25)",
            alignSelf: "flex-start",
          }}
        >
          {project.category}
        </span>

        <p
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "1rem",
            fontWeight: 700,
            color: "var(--brand-secondary)",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          <i
            className={`bi ${project.icon} me-2`}
            style={{ color: "var(--brand-primary)" }}
          />
          {project.title}
        </p>

        <p
          style={{
            fontSize: "0.83rem",
            color: "#6b7280",
            lineHeight: 1.7,
            margin: 0,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        <button
          onClick={() => onView(project)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            background: "var(--brand-secondary)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "0.6rem 1.25rem",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 500,
            cursor: "pointer",
            width: "100%",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--brand-primary)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--brand-secondary)")
          }
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="#fff">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
          </svg>
          View Project
        </button>
      </div>
    </div>
  );
}

/* ─── MODAL ─── */
function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(11,27,50,0.7)",
          zIndex: 1050,
        }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1051,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            width: "100%",
            maxWidth: "720px",
            maxHeight: "85vh",
            overflowY: "auto",
            pointerEvents: "all",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1.5rem 1.75rem 1rem",
              borderBottom: "1px solid #f0f0f0",
              position: "sticky",
              top: 0,
              background: "#fff",
              zIndex: 2,
            }}
          >
            <h5
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "var(--brand-secondary)",
                margin: 0,
              }}
            >
              {project.modal.title}
            </h5>
            <button
              onClick={onClose}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                background: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#6b7280">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: "1.25rem 1.75rem 1.75rem" }}>
            <div className="row g-3 mb-4">
              {project.modal.images.map((img, i) => (
                <div className="col-md-6" key={i}>
                  <img
                    src={img}
                    className="img-fluid"
                    alt=""
                    style={{ borderRadius: "10px", width: "100%" }}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {project.modal.learnings.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "0.6rem 0",
                    borderBottom: "1px solid #f9f9f9",
                    fontSize: "0.88rem",
                    color: "#4b5563",
                    lineHeight: 1.65,
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--brand-primary)",
                      flexShrink: 0,
                      marginTop: "7px",
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── MAIN ─── */
const PROJECTS_PER_PAGE = 6;

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentPage]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        background: "var(--brand-light)",
        padding: "5rem 0",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
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
            Latest Projects
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
              color: "var(--brand-secondary)",
              lineHeight: 1.15,
              marginBottom: "0.5rem",
            }}
          >
            Engineering Projects &amp;{" "}
            <span style={{ color: "var(--brand-primary)" }}>Solutions</span>
          </h2>

          <p
            style={{
              color: "#6b7280",
              fontSize: "0.92rem",
              maxWidth: "520px",
              margin: "0.5rem auto 1.25rem",
            }}
          >
            Practical electrical and telecommunications work delivered with
            precision and standards compliance.
          </p>

          {/* WIP banner */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(255,107,53,0.08)",
              border: "1px solid rgba(255,107,53,0.25)",
              borderRadius: "50px",
              padding: "0.45rem 1.2rem",
              fontSize: "0.82rem",
              color: "var(--brand-primary)",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--brand-primary)",
                animation: "wip-pulse 1.5s ease-in-out infinite",
                flexShrink: 0,
              }}
            />
            This section is still in progress — actively building &amp; updating
          </div>
        </div>

        {/* Pulse keyframe — injected via a style tag */}
        <style>{`@keyframes wip-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}`}</style>

        {/* Top pagination */}
        <Pagination
          align="justify-content-end mb-4"
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />

        {/* Cards */}
        <div className="row g-4 mb-5">
          {currentProjects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <ProjectCard project={project} onView={setActiveProject} />
            </div>
          ))}
        </div>

        {/* Bottom pagination */}
        <Pagination
          align="justify-content-start mb-5"
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {/* Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
