import { FC } from "react";
import styles from './App.module.scss';
import Header from "./components/Header";
import PlayingField from "./components/PlayingField";
import WayController from "./components/WayController";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.app__main}>
        <PlayingField />
        <WayController />
      </main>
    </div>
  )
}

export default App