import { FC } from "react";
import Container from "../Container";
import styles from "./WayController.module.scss";

const WayController: FC = () => {
    return (
        <div className={styles.way}>
            <Container className={styles.way__container}>
                WayController
            </Container>
        </div>
    )
}

export default WayController