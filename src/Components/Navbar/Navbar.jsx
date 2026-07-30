import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrolled);

  return (
    <>
      <motion.div
        className={`navbar ${scrolled ? "scrolled" : ""} `}
        initial={{ opacity: 1, top: -100 }}
        animate={{ opacity: 1, top: 40 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="animated-background"></div>
        <div className="ham" onClick={() => setOpen(true)}>
          <div className="ham-line"></div>
          <div className="ham-line"></div>
          <div className="ham-line"></div>
        </div>
        <div className="logo-wrapper">
          <img src="src\assets\logo.png" alt="" className="logo" />
          <img src="src\assets\logo-dark.png" className="logo" alt="" />
        </div>
        <div className={`nav-links ${open ? "sidebar" : ""}`}>
          <div className="close" onClick={() => setOpen(false)}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <Link className="main-link">FLIGHTS</Link>
          <Link className="main-link">DESTINATIONS</Link>
          <Link className="main-link">EXPERIENCES</Link>
          <Link className="main-link">OFFERS</Link>
        </div>
        <div className="right-links">
          <Link className="right-link">SIGNUP</Link>
          <Link className="right-link">BOOK FLIGHT</Link>
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
