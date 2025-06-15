import React from "react";
import styles from "./Hero.module.css";
import CalendarIcon from "./Calendar.svg?react";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.taggedBox}>
          <h1>
            BUILDING <span>DATA-DRIVEN</span> E-COMMERCE <br /> ON SHOPIFY
          </h1>
          <p>
            We help businesses grow and scale with our expertise in{" "}
            <span className={styles.tag}>performance marketing</span>,{" "}
            <span className={styles.tag}>user experience</span> and{" "}
            <span className={styles.tag}>creative strategy</span>.
          </p>
          <button className={styles.cta}>
            FREE STRATEGY CALL
            <span className={styles.icon}>
              <CalendarIcon />
            </span>
          </button>
          <p className={styles.reviews}>
            <strong>146+ REVIEWS.</strong> ALL CHANCES ARE YOU’LL BE IMPRESSED
            TOO.
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.imagePlaceholder}>
          <img src="/src/assets/vintage-clothing.png" alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
