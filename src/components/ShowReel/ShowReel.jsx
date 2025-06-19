import styles from "./ShowReel.module.css";
import Car from "../../assets/car.png";

const ShowReel = () => {
  return (
    <div className={styles.showreelWrapper}>
      <img src={Car} alt="Showreel Preview" className={styles.showreelImage} />
      <button className={styles.showreelButton}>
        <em>Play</em> Showreel <span>▶</span>
      </button>
    </div>
  );
};

export default ShowReel;
