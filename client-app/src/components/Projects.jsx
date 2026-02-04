const projects = [
  {
    id: "project-01",
    category: "Electronics",
    icon: "bi-cpu",
    title: "LED Blinker Circuit",
    description:
      "A timing-based LED circuit that turns LEDs ON and OFF using resistors, capacitors, and a 555 timer.",
    img: "/images/project-demos/project1a.png",

    meta: {
      difficulty: "Beginner",
      tags: ["LED", "Timer Circuit", "KiCAD", "TinkerCAD"],
      tools: ["TinkerCAD", "KiCAD"],
      date: "2024-12-15",
    },

    modal: {
      title: "LED Blinker Circuit",
      images: [
        "/images/project-demos/project1b.png",
        "/images/project-demos/project1a.png",
      ],
      learnings: [
        "Building RC timing circuits and LED drivers.",
        "Understanding how 555 timer output cycles operate.",
        "Simulating blink behavior and designing PCB traces in KiCAD.",
      ],
    },
  },

  {
    id: "project-02",
    category: "Power Electronics",
    icon: "bi-battery-charging",
    title: "Power Bank Circuit",
    description:
      "A rechargeable power system using a Li-ion battery and boost converter to supply a stable 5V USB output.",
    img: "/images/project-demos/project2b.png",

    meta: {
      difficulty: "Intermediate",
      tags: ["Battery", "Boost Converter", "Regulation", "KiCAD"],
      tools: ["TinkerCAD", "KiCAD"],
      date: "2024-11-20",
    },

    modal: {
      title: "Power Bank Circuit",
      images: [
        "/images/project-demos/project2a.png",
        "/images/project-demos/project2b.png",
      ],
      learnings: [
        "How boost converters step voltage from 3.7V to 5V.",
        "Battery management and protection principles.",
        "Designing power circuits and routing in KiCAD.",
      ],
    },
  },

  {
    id: "project-03",
    category: "Automation",
    icon: "bi-lightbulb",
    title: "Street Light Sensor System",
    description:
      "An automatic lighting system using an LDR to control street lights based on ambient light levels.",
    img: "/images/project-demos/Street Light Sensor.png",

    meta: {
      difficulty: "Beginner",
      tags: ["LDR", "Automatic Lighting", "Sensors"],
      tools: ["TinkerCAD", "KiCAD"],
      date: "2024-10-10",
    },

    modal: {
      title: "Street Light Sensor System",
      images: ["/images/project-demos/Street Light Sensor.png"],
      learnings: [
        "Understanding LDR resistance variation with light.",
        "Comparator-based and MCU-based switching logic.",
        "Simulating sensors and creating PCB schematics.",
      ],
    },
  },

  {
    id: "project-04",
    category: "Security Systems",
    icon: "bi-shield-lock",
    title: "Motion Detector Circuit",
    description:
      "A motion-sensing circuit using PIR sensors to trigger alarms or lighting outputs.",
    img: "/images/project-demos/Motion Detector Alarm ARDUINO-UNO-R3.png",

    meta: {
      difficulty: "Intermediate",
      tags: ["PIR Sensor", "Security", "Alarms"],
      tools: ["TinkerCAD", "KiCAD"],
      date: "2024-09-05",
    },

    modal: {
      title: "Motion Detector Circuit",
      images: [
        "/images/project-demos/Motion Detector Alarm ARDUINO-UNO-R3.png",
      ],
      learnings: [
        "How PIR sensors detect infrared radiation.",
        "Triggering alarms using digital outputs.",
        "Routing sensor modules in KiCAD.",
      ],
    },
  },

  {
    id: "project-05",
    category: "Measurement Systems",
    icon: "bi-speedometer2",
    title: "Energy Consumption Monitor",
    description:
      "A real-time system that measures voltage, current, and power to calculate energy consumption.",
    img: "/images/project-demos/Energy Consumption Monitor.png",

    meta: {
      difficulty: "Intermediate",
      tags: ["Current Sensing", "Power Measurement"],
      tools: ["TinkerCAD", "KiCAD"],
      date: "2024-08-15",
    },

    modal: {
      title: "Energy Consumption Monitor",
      images: ["/images/project-demos/Energy Consumption Monitor.png"],
      learnings: [
        "Using current sensors like ACS712.",
        "Computing energy usage in Wh.",
        "Noise-aware PCB layout for sensing circuits.",
      ],
    },
  },

  {
    id: "project-06",
    category: "Safety Systems",
    icon: "bi-fire",
    title: "Fire Detection Alarm",
    description:
      "A fire safety circuit that detects smoke or heat and triggers alarms automatically.",
    img: "/images/project-demos/Fire Detection Alarm.png",

    meta: {
      difficulty: "Beginner",
      tags: ["Smoke Sensors", "Heat Detection"],
      tools: ["TinkerCAD", "KiCAD"],
      date: "2024-07-20",
    },

    modal: {
      title: "Fire Detection Alarm",
      images: ["/images/project-demos/Fire Detection Alarm.png"],
      learnings: [
        "Reading smoke and heat sensor thresholds.",
        "Designing automatic buzzer trigger logic.",
        "Testing and PCB layout design.",
      ],
    },
  },

  {
    id: "project-07",
    category: "Automation",
    icon: "bi-traffic-light",
    title: "Traffic Light Controller",
    description:
      "A timing-based control system that cycles RED, YELLOW, and GREEN traffic lights.",
    img: "/images/project-demos/Traffic Light Controller.png",

    meta: {
      difficulty: "Beginner",
      tags: ["Timing Circuits", "Traffic Logic"],
      tools: ["TinkerCAD", "KiCAD"],
      date: "2024-06-10",
    },

    modal: {
      title: "Traffic Light Controller",
      images: ["/images/project-demos/Traffic Light Controller.png"],
      learnings: [
        "Timing sequences for LED switching.",
        "Traffic control logic fundamentals.",
        "Simulating cycles and PCB design.",
      ],
    },
  },

  {
    id: "project-08",
    category: "Power Systems",
    icon: "bi-lightning",
    title: "Transformer Monitoring System",
    description:
      "A monitoring system tracking transformer temperature, load current, and operating conditions.",
    img: "/images/project-demos/Transformer Monitoring System.png",

    meta: {
      difficulty: "Advanced",
      tags: ["Transformers", "Thermal Monitoring", "Sensors"],
      tools: ["TinkerCAD", "KiCAD"],
      date: "2024-05-25",
    },

    modal: {
      title: "Transformer Monitoring System",
      images: ["/images/project-demos/Transformer Monitoring System.png"],
      learnings: [
        "Thermistors and digital temperature sensors.",
        "Overload and current sensing techniques.",
        "Designing protection circuits and dashboards.",
      ],
    },
  },
];

import { useState } from "react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="bg-light py-3">
      <div className="container">
        {/* Normal section content */}
        <div className="text-center">
          <h6 className="text-brand-orange text-uppercase fw-bold">
            - Latest Projects -
          </h6>
          <div class="alert alert-danger z-1" role="alert">
            This section is still in progress since I’m actively building and
            updating my projects.
          </div>
          <h2 className="text-brand-navy fw-bold display-6 mb-4">
            Engineering Projects & Solutions
          </h2>

          <p className="text-muted mt-2">
            Practical electrical and telecommunications work delivered with
            precision and standards compliance.
          </p>

          <div className="row g-4 justify-content-center mb-5">
            {projects.map((project, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 shadow-sm border-0 project-card">
                  <img
                    src={project.img}
                    className="card-img-top"
                    alt={project.title}
                  />

                  <div className="card-body d-flex flex-column">
                    <span className="badge bg-brand-orange mb-3">
                      {project.category}
                    </span>

                    <h5 className="fw-bold text-brand-secondary">
                      {project.title}
                    </h5>

                    <p className="text-muted small flex-grow-1">
                      {project.description}
                    </p>

                    {/* View Project Button */}
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
        </div>

        {/* Modal */}
        {activeProject && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            onClick={() => setActiveProject(null)}
          >
            <div
              className="modal-dialog modal-lg modal-dialog-centered"
              role="document"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content border-0 shadow">
                <div className="modal-header">
                  <h5 className="modal-title fw-bold">
                    {activeProject.modal.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setActiveProject(null)}
                  ></button>
                </div>

                <div className="modal-body">
                  <div className="row g-3 mb-3">
                    {activeProject.modal.images.map((img, i) => (
                      <div className="col-md-6" key={i}>
                        <img src={img} alt="" className="img-fluid rounded" />
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
        )}
      </div>
    </section>
  );
}
