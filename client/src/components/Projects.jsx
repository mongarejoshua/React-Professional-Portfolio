import "../css/Projects.css";
import { useState, useEffect, useRef } from "react";
import projects from "../data/projects";

/* ===================== PAGINATION COMPONENT ===================== */

function Pagination({ align, currentPage, totalPages, setCurrentPage }) {
  if (totalPages <= 1) return null;

  return (
    <nav className={`d-flex ${align}`}>
      <ul className="pagination mb-0">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
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
            <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
              {i + 1}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

/* ===================== MAIN COMPONENT ===================== */

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
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [currentPage]);

  return (
    <section id="projects" className="bg-light pt-5" ref={sectionRef}>
      <div className="container">
        <div className="text-center">
          <h6 className="text-brand-orange text-uppercase fw-bold">
            - Latest Projects -
          </h6>

          <h2 className="text-brand-navy fw-bold display-6 mb-4">
            Engineering Projects & Solutions
          </h2>

          <p className="text-muted mt-2">
            Practical electrical and telecommunications work delivered with
            precision and standards compliance.
          </p>

          <div className="alert alert-danger z-1">
            This section is still in progress since I’m actively building and
            updating my projects.
          </div>

          {/* TOP PAGINATION */}
          <Pagination
            align="justify-content-end mb-4"
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />

          {/* PROJECT CARDS */}
          <div className="row g-4 justify-content-center mb-5">
            {currentProjects.map((project) => (
              <div className="col-md-6 col-lg-4" key={project.id}>
                <div className="card h-100 shadow-sm border-0 project-card">
                  <img
                    src={project.img}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt={project.title}
                  />

                  <div className="card-body d-flex flex-column">
                    <span className="badge bg-brand-orange mb-3">
                      {project.category}
                    </span>

                    <h5 className="fw-bold text-brand-secondary">
                      <i className={`bi ${project.icon} me-2`}></i>
                      {project.title}
                    </h5>

                    <p className="text-muted small flex-grow-1">
                      {project.description}
                    </p>

                    <button
                      className="btn bg-brand-navy text-white mt-2"
                      onClick={() => setActiveProject(project)}
                    >
                      <i className="bi bi-eye me-2"></i>
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM PAGINATION */}
          <Pagination
            align="justify-content-start mb-5"
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>

        {/* ===================== MODAL ===================== */}
        {activeProject && (
          <>
            {/* BACKDROP */}
            <div className="modal-backdrop fade show"></div>

            {/* MODAL */}
            <div className="modal fade show d-block">
              <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title fw-bold">
                      {activeProject.modal.title}
                    </h5>

                    <button
                      className="btn-close"
                      onClick={() => setActiveProject(null)}
                    />
                  </div>

                  <div className="modal-body">
                    <div className="row g-3 mb-3">
                      {activeProject.modal.images.map((img, i) => (
                        <div className="col-md-6" key={i}>
                          <img src={img} className="img-fluid rounded" alt="" />
                        </div>
                      ))}
                    </div>

                    <ul className="text-muted">
                      {activeProject.modal.learnings.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
