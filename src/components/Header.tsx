import { useState, useEffect } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("Home");
  const [mode, setMode] = useState<"none" | "login" | "signup" | "search">(
    "none"
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  // prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const handleNavClick = (name: string) => {
    setActiveLink(name);
    setMobileOpen(false);
    const href = NAV_LINKS.find((l) => l.name === name)!.href;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`header ${mobileOpen ? "mobile-open" : ""}`}>
        <div className="header__logo">nullBrains.</div>

        {/*  open only when closed */}
        <button
          className="header__open-btn"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* × close only when open */}
        <button
          className="header__close-btn"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className="header__navigation ">
          <nav className="header__nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.name);
                }}
                className={
                  "header__nav-link" +
                  (link.name === activeLink ? " header__nav-link--active" : "")
                }
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            className="header__icon-btn"
            aria-label="Search"
            onClick={() => {
              setMode("search");
              setMobileOpen(false);
            }}
          >
            <FontAwesomeIcon icon={faSearch} size="xs" />
          </button>
          {mobileOpen && (
            <div className="header__actions show_act-div-phone">
              <button
                className="btn btn--text"
                onClick={() => {
                  setMode("login");
                  setMobileOpen(false);
                }}
              >
                Sign In
              </button>
              <button
                className="btn btn--solid"
                onClick={() => {
                  setMode("signup");
                  setMobileOpen(false);
                }}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
        {!mobileOpen && (
          <div className="header__actions show_act-div-desktop">
            <button
              className="btn btn--text"
              onClick={() => {
                setMode("login");
                setMobileOpen(false);
              }}
            >
              Sign In
            </button>
            <button
              className="btn btn--solid"
              onClick={() => {
                setMode("signup");
                setMobileOpen(false);
              }}
            >
              Sign Up
            </button>
          </div>
        )}
      </header>

      {/* backdrop behind mobile drawer */}
      {mobileOpen && (
        <div
          className="nav-backdrop"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* login/signup/search modal */}
      {mode !== "none" && (
        <div className="modal-overlay" onClick={() => setMode("none")}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setMode("none")}>
              ×
            </button>
            {mode === "login" && <LoginForm />}
            {mode === "signup" && <SignupForm />}
            {mode === "search" && <SearchForm />}
          </div>
        </div>
      )}
    </>
  );
}

function LoginForm() {
  return (
    <form className="form">
      <h2>Sign In</h2>
      <label>
        Email
        <input type="email" required />
      </label>
      <label>
        Password
        <input type="password" required />
      </label>
      <button type="submit" className="btn btn--solid">
        Log In
      </button>
    </form>
  );
}

function SignupForm() {
  return (
    <form className="form">
      <h2>Sign Up</h2>
      <label>
        Name
        <input type="text" required />
      </label>
      <label>
        Email
        <input type="email" required />
      </label>
      <label>
        Password
        <input type="password" required />
      </label>
      <button type="submit" className="btn btn--solid">
        Create Account
      </button>
    </form>
  );
}

function SearchForm() {
  return (
    <form className="form">
      <h2>Search</h2>
      <label>
        <input type="text" placeholder="Type keywords…" autoFocus />
      </label>
      <button type="submit" className="btn btn--solid">
        Go
      </button>
    </form>
  );
}
