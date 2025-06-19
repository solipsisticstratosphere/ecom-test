import React from "react";
import styles from "./Hero.module.css";
import CalendarIcon from "../../assets/icons/Calendar.svg?react";
import VintageClothing from "../../assets/vintage-clothing.png";
// головний компонент Hero
const Hero = () => {
  return (
    // секція Hero
    <section className={styles.hero}>
      {/* ліва частина Hero */}
      <div className={styles.left}>
        {/* блок з тегами та заголовком */}
        <div className={styles.taggedBox}>
          <h1>
            BUILDING <span>DATA-DRIVEN</span>
            <br /> E-COMMERCE <br /> ON SHOPIFY
          </h1>
          {/* описова частина */}
          <div className={styles.descriptionBox}>
            <p className={styles.description}>
              We help businesses grow and scale
              <br /> with our expertise in{" "}
              <span className={styles.tagFirst}>
                <span className={styles.tagText}>performance </span>{" "}
                <span className={styles.tagSpan}> marketing</span>
              </span>{" "}
              ,{" "}
              <span className={styles.tag}>
                <span className={styles.tagText}>user </span>{" "}
                <span className={styles.tagSpan}>experience</span>
              </span>{" "}
              and{" "}
              <span className={styles.tag}>
                <span className={styles.tagText}> creative </span>{" "}
                <span className={styles.tagSpan}>strategy</span>
              </span>
            </p>
            {/* блок CTA */}
            <div className={styles.ctaBox}>
              <button className={styles.cta}>
                FREE STRATEGY CALL
                <span className={styles.icon}>
                  <CalendarIcon />
                </span>
              </button>
              <p className={styles.reviews}>
                <span className={styles.reviewsSpan}>146+ REVIEWS.</span> ALL
                CHANCES ARE YOU’LL BE IMPRESSED TOO.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* права частина Hero */}
      <div className={styles.right}>
        {/* зображення Hero */}
        <div className={styles.imagePlaceholder}>
          <img src={VintageClothing} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
