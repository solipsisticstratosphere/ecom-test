import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./Header.module.css";
import Logo from "./Logo.svg?react";
import IconPen from "./Pen.svg?react";
import BurgerIcon from "./BurgerMenu.svg?react";
import CloseIcon from "./CloseIcon.svg?react";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setDrawerOpen(false);
      }
    };

    if (drawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [drawerOpen]);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const drawer = (
    <div ref={drawerRef} className={styles.drawer}>
      <button
        className={styles.closeButton}
        onClick={() => setDrawerOpen(false)}
      >
        <CloseIcon />
      </button>
      <a href="#" onClick={() => setDrawerOpen(false)}>
        Services
      </a>
      <a href="#" onClick={() => setDrawerOpen(false)}>
        Our Approach
      </a>
      <a href="#" onClick={() => setDrawerOpen(false)}>
        Projects
      </a>
      <a href="#" onClick={() => setDrawerOpen(false)}>
        About Us
      </a>
      <a href="#" onClick={() => setDrawerOpen(false)}>
        Blog
      </a>
    </div>
  );
  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logoNavigation}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.nav}>
          <a href="#">Services</a>
          <a href="#">Our Approach</a>
          <a href="#">Projects</a>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
        </nav>
      </div>
      <div className={styles.mobileControls}>
        <button className={styles.ctaDesktop}>
          LET’S TALK
          <span className={styles.icon}>
            <IconPen />
          </span>
        </button>
        <button className={styles.ctaMobile}>
          <span className={styles.mobileIcon}>
            <IconPen />
          </span>
        </button>
        <button className={styles.burger} onClick={toggleDrawer}>
          <BurgerIcon />
        </button>
      </div>

      {drawerOpen && ReactDOM.createPortal(drawer, document.body)}
    </header>
  );
};

export default Header;
