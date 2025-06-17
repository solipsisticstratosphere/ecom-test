import styles from "./ShowReel.module.css";

const ShowReel = () => {
  return (
    <div className={styles.showreelWrapper}>
      <img
        src="/src/assets/car.png"
        alt="Showreel Preview"
        className={styles.showreelImage}
      />
      <button className={styles.showreelButton}>
        <em>Play</em> Showreel <span>▶</span>
      </button>
    </div>
  );
};

export default ShowReel;
