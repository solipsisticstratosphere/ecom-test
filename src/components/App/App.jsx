import styles from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ShowReel from "../ShowReel/ShowReel";
import MissionSection from "../Mission/Mission";
import Badges from "../Badges/Badges";
import WorkWay from "../WorkWay/WorkWay";
import Steps from "../Steps/Steps";
import Discuss from "../Discuss/Discuss";
import Footer from "../Footer/Footer";
function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Hero />
      <ShowReel />
      <MissionSection />
      <Badges />
      <WorkWay />
      <Steps />
      <Discuss />
      <Footer />
    </div>
  );
}

export default App;
