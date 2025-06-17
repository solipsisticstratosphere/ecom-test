import React from "react";
import styles from "./Mission.module.css";
import TriangleIcon from "./Triangle.svg?react";

const MissionSection = () => {
  return (
    <section className={styles.missionSection}>
      <div className={styles.missionContainer}>
        <p className={styles.missionButtonMobile}>• OUR MISSION</p>
        <div className={styles.missionContent}>
          <div className={styles.missionAuthor}>
            <p className={styles.missionButton}>• OUR MISSION</p>
            <div className={styles.photoWrapper}>
              <img
                src="/src/assets/victor.png"
                alt="Showreel Preview"
                className={styles.authorPhoto}
              />
            </div>
            <button className={styles.playIcon}>
              <TriangleIcon />
            </button>
            <h4 className={styles.missionAuthorName}>Victor Terekhovskyi</h4>
            <p className={styles.missionAuthorPosition}>Co-founder & COO</p>
          </div>
          <div className={styles.missionText}>
            <p className={styles.headline}>
              <span className={styles.headlineSpan}>
                We believe that by creating value for
              </span>
              people we make the world a happier place.
            </p>
            <p className={styles.subline}>
              Based on our experience and innovative approach in marketing. Our{" "}
              <span className={styles.missionTextSpan}>
                clients implement their values and ideas, integrating
                sustainable development into the foundation of their digital
                business.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
