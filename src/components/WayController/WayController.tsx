import { FC } from "react";
import { arrowRight, arrowUp } from "../Icon";
import styles from "./WayController.module.scss";

const WayController: FC = () => {
    return (
        <div className={styles.way}>
            <ul className={styles.way__list}>
                <li className={`${styles.way__item} ${styles.way__item_active}`}>{arrowUp}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowRight}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowRight}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowRight}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowRight}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowRight}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowRight}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowRight}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowRight}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowRight}</li>
            </ul>
        </div>
    )
}

export default WayController