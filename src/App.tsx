import { FC } from "react";
import styles from './App.module.scss';
import Container from "./components/Container";
import Header from "./components/Header";
import PlayingField from "./components/PlayingField";
import WayController from "./components/WayController";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header className={styles.app__header} />
      <main className={styles.app__main}>
        <Container className={styles.app__container}>
          <PlayingField className={styles.app__field} />
          <WayController />
        </Container>
      </main>
    </div>
  )
}

export default App