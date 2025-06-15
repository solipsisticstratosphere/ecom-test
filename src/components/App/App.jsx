import styles from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
