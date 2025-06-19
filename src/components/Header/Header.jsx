import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./Header.module.css";
import Logo from "../../assets/icons/Logo.svg?react";
import IconPen from "../../assets/icons/Pen.svg?react";
import BurgerIcon from "../../assets/icons/BurgerMenu.svg?react";
import CloseIcon from "../../assets/icons/CloseIcon.svg?react";
import ModalBookCall from "../ModalBookCall/ModalBookCall";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

// компонент хедер
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const drawerRef = useRef(null);

  // ефект для зміни стилю при скролі
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ефект для закриття drawer при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setDrawerOpen(false);
      }
    };

    if (drawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
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

  // відкриття/закриття drawer
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);
  // відкриття модального вікна
  const openModal = () => setModalOpen(true);
  // закриття модального вікна
  const closeModal = () => setModalOpen(false);

  const drawerVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      {/* логотип і навігація */}
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
      {/* мобільні кнопки */}
      <div className={styles.mobileControls}>
        <button className={styles.ctaDesktop} onClick={openModal}>
          LET’S TALK
          <span className={styles.icon}>
            <IconPen />
          </span>
        </button>
        <button className={styles.ctaMobile} onClick={openModal}>
          <span className={styles.mobileIcon}>
            <IconPen />
          </span>
        </button>
        <button className={styles.burger} onClick={toggleDrawer}>
          <BurgerIcon />
        </button>
      </div>
      {/* drawer меню */}
      {ReactDOM.createPortal(
        <AnimatePresence>
          {drawerOpen && (
            <motion.div
              ref={drawerRef}
              className={styles.drawer}
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
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
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
      {/* модальне вікно */}
      <ModalBookCall isOpen={modalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;
