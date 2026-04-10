import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Certificates", href: "#cert" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  /* Shrink on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <style>{`
        .nb-root {
          position: sticky;
          top: 0;
          z-index: 1030;
          background: ${scrolled ? "rgba(11,27,50,0.88)" : "rgba(11,27,50,0.88)"};
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid ${scrolled ? "rgba(255,107,53,0.2)" : "rgba(255,255,255,0.06)"};
          transition: background 0.35s, border-color 0.35s, padding 0.3s;
          padding: ${scrolled ? "0.55rem 0" : "0.55rem 0"};
        
        }

        .nb-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nb-brand {
          font-size: 1.25rem;
          font-weight: 800;
          text-decoration: none;
          color: var(--brand-light);
          letter-spacing: -0.01em;
          flex-shrink: 0;
        }
        .nb-brand span { color: var(--brand-primary); }

        /* Desktop links */
        .nb-links-desktop {
          display: none;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        @media (min-width: 992px) {
          .nb-links-desktop { display: flex; }
        }

        .nb-link {
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(248,249,250,0.6);
          text-decoration: none;
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
          display: block;
        }
        .nb-link:hover {
          color: var(--brand-light);
          background: rgba(255,255,255,0.06);
        }

        .nb-github {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--brand-primary);
          text-decoration: none;
          padding: 0.4rem 1rem;
          border-radius: 8px;
          border: 1px solid rgba(255,107,53,0.4);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-left: 8px;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .nb-github:hover {
          background: var(--brand-primary);
          border-color: var(--brand-primary);
          color: #fff;
        }
        .nb-github svg { width: 14px; height: 14px; fill: currentColor; }

        /* Hamburger */
        .nb-toggler {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          background: none;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          cursor: pointer;
          padding: 0;
          transition: border-color 0.2s;
          flex-shrink: 0;
        }
        .nb-toggler:hover { border-color: var(--brand-primary); }
        @media (min-width: 992px) { .nb-toggler { display: none; } }

        .nb-bar {
          width: 20px;
          height: 2px;
          background: var(--brand-light);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s;
          transform-origin: center;
        }
        .nb-toggler.open .nb-bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nb-toggler.open .nb-bar:nth-child(2) { opacity: 0; width: 0; }
        .nb-toggler.open .nb-bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile drawer */
        .nb-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(11,27,50,0.98);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease, opacity 0.3s ease;
          opacity: 0;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nb-drawer.open {
          max-height: 480px;
          opacity: 1;
          padding: 0.75rem 0 1.25rem;
        }
        @media (min-width: 992px) { .nb-drawer { display: none; } }

        .nb-drawer .nb-link {
          padding: 0.65rem 1.5rem;
          border-radius: 0;
          letter-spacing: 0.08em;
        }
        .nb-drawer .nb-github {
          margin: 0.5rem 1.5rem 0;
          border-radius: 8px;
          display: inline-flex;
        }
      `}</style>

      <nav className="nb-root" ref={menuRef}>
        <div className="container">
          <div className="nb-inner">
            {/* Brand */}
            <a className="nb-brand" href="#home" onClick={close}>
              Mongare<span>Joshua</span>
            </a>

            {/* Desktop nav */}
            <ul className="nb-links-desktop">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a className="nb-link" href={link.href} onClick={close}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="nb-github"
                  href="https://github.com/mongarejoshua?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </li>
            </ul>

            {/* Hamburger */}
            <button
              className={`nb-toggler ${open ? "open" : ""}`}
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle navigation"
            >
              <span className="nb-bar" />
              <span className="nb-bar" />
              <span className="nb-bar" />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <ul className={`nb-drawer ${open ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a className="nb-link" href={link.href} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="nb-github"
              href="https://github.com/mongarejoshua?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
