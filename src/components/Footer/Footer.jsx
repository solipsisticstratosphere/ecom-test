import React, { useRef, useEffect, useState } from "react";
import styles from "./Footer.module.css";
import PencilIcon from "../../assets/icons/Pen_Footer.svg?react";
import InstagramIcon from "../../assets/icons/Instagram.svg?react";
import TelegramIcon from "../../assets/icons/Telegram.svg?react";
import LinkedinIcon from "../../assets/icons/Linkedin.svg?react";
import CopyIcon from "../../assets/icons/Copy.svg?react";
import ModalBookCall from "../ModalBookCall/ModalBookCall";

// компонент футера
const Footer = () => {
  const circleRef = useRef(null);
  const wrapperRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // відкриття модального вікна
  const openModal = () => setModalOpen(true);
  // закриття модального вікна
  const closeModal = () => setModalOpen(false);

  // копіювання email
  const handleCopy = () => {
    navigator.clipboard.writeText("team@unknown.marketing");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // анімація кола при русі миші
  useEffect(() => {
    let animationFrameId;
    let targetCoords = { x: 0, y: 0 };
    let currentCoords = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const relativeX = (e.clientX - centerX) / rect.width;
        const relativeY = (e.clientY - centerY) / rect.height;

        const intensity = isHovered ? 60 : 40;
        targetCoords = {
          x: relativeX * intensity * 1.2,
          y: relativeY * intensity * 0.8,
        };
      }
    };

    const animate = () => {
      const lerp = (start, end, factor) => start + (end - start) * factor;
      const lerpFactor = isHovered ? 0.15 : 0.08;

      currentCoords.x = lerp(currentCoords.x, targetCoords.x, lerpFactor);
      currentCoords.y = lerp(currentCoords.y, targetCoords.y, lerpFactor);

      setCoords({ ...currentCoords });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <footer className={styles.wrapper} ref={wrapperRef}>
      {/* ліва частина футера */}
      <div className={styles.left}>
        <h1 className={styles.title}>
          LET'S
          <br />
          DISCUSS
          <br />
          YOUR
          <br />
          PROJECT
        </h1>
        {/* кнопка "Let's Discuss" */}
        <button
          className={styles.discussCircle}
          style={{
            transform: `translate3d(${coords.x}px, ${coords.y}px, 0) ${
              isHovered ? "scale(1.05)" : "scale(1)"
            }`,
            transition: isHovered
              ? "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
          ref={circleRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={openModal}
          aria-label="Let's discuss your project"
        >
          <span className={styles.iconPlaceholder}>
            <PencilIcon className={styles.icon} />
          </span>
          <span className={styles.discussText}>
            LET'S
            <br />
            DISCUSS
          </span>
        </button>
        {/* кнопка копіювання email */}
        <button className={styles.emailButton} onClick={handleCopy}>
          <CopyIcon />
          {copied ? "Copied!" : "team@unknown.marketing"}
        </button>
        <p className={styles.rights}>©2024 UM. All rights reserved.</p>
      </div>
      {/* права частина футера */}
      <div className={styles.right}>
        <div className={styles.rightTop}>
          {/* меню футера */}
          <nav className={styles.menu}>
            <p>MENU</p>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Our Approach</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
          {/* соціальні мережі */}
          <div className={styles.social}>
            <p>OUR SOCIAL:</p>
            <ul>
              <li>
                <button className={styles.socialIconWrapper}>
                  <InstagramIcon className={styles.socialIcon} />
                </button>{" "}
                INSTAGRAM
              </li>
              <li>
                <button className={styles.socialIconWrapper}>
                  <TelegramIcon className={styles.socialIcon} />
                </button>{" "}
                TELEGRAM
              </li>
              <li>
                <button className={styles.socialIconWrapper}>
                  <LinkedinIcon className={styles.socialIcon} />
                </button>{" "}
                LINKEDIN
              </li>
            </ul>
          </div>
        </div>
        {/* юридична інформація */}
        <div className={styles.legal}>
          <a href="#">Term of use</a>
          <a href="#">Privacy Policy</a>
        </div>
        {/* мобільна юридична інформація */}
        <div className={styles.mobileLegal}>
          <div className={styles.mobileLegalLinks}>
            <a href="#">Term of use</a>
            <a href="#">Privacy Policy</a>
          </div>
          <p>©2024 UM. All rights reserved.</p>
        </div>
      </div>
      {/* модальне вікно */}
      <ModalBookCall
        isOpen={modalOpen}
        onClose={closeModal}
        onSubmit={() => {}}
      />
    </footer>
  );
};

export default Footer;
