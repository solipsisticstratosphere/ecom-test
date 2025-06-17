import styles from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ShowReel from "../ShowReel/ShowReel";
import MissionSection from "../Mission/Mission";
function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Hero />
      <ShowReel />
      <MissionSection />
    </div>
  );
}

export default App;
