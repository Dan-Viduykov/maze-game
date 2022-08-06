import { FC } from "react";
import Container from "../Container";
import styles from "./PlayingField.module.scss";

const PlayingField: FC = () => {
    return (
        <div className={styles.field}>
            <Container className={styles.field__container}>
                PlayingField
            </Container>
        </div>
    )
}

export default PlayingField