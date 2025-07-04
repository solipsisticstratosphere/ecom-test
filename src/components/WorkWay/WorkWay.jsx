import React from "react";
import styles from "./WorkWay.module.css";
import PlayIcon from "../../assets/icons/Triangle.svg?react";
import Worker from "../../assets/worker.png";

// секція "Як ми працюємо"
const WorkWay = () => {
  return (
    <section className={styles.workSection}>
      <div className={styles.container}>
        {/* опис секції */}
        <p className={styles.description}>
          We grow Shopify stores from <strong>4 to 6 figures</strong> in revenue
          using creative strategies in performance marketing.
        </p>

        {/* заголовок та відео */}
        <div className={styles.headline}>
          <div className={styles.topRow}>
            <h2 className={styles.serif}>The</h2>
            <h2 className={styles.sansSerif}>way</h2>

            {/* блок з фото та кнопкою відтворення */}
            <div className={styles.videoWrapper}>
              <img src={Worker} alt="Founder" className={styles.photo} />
              <button className={styles.playButton} aria-label="Play video">
                <PlayIcon className={styles.playIconSvg} />
              </button>
            </div>
          </div>

          <div className={styles.bottomRow}>
            <h2 className={styles.sansSerif}>we work</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWay;
