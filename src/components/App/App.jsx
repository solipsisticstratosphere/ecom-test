import styles from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ShowReel from "../ShowReel/ShowReel";
import MissionSection from "../Mission/Mission";
import Badges from "../Badges/Badges";
function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Hero />
      <ShowReel />
      <MissionSection />
      <Badges />
    </div>
  );
}

export default App;
