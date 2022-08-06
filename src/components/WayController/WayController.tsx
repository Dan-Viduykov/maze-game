import { FC } from "react";
import styles from "./WayController.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowLeft, faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const WayController: FC = () => {
    const arrowUp = <FontAwesomeIcon icon={faArrowUp} /> 
    const arrowRight = <FontAwesomeIcon icon={faArrowRight} /> 
    const arrowDown = <FontAwesomeIcon icon={faArrowDown} /> 
    const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} /> 

    return (
        <div className={styles.way}>
            <ul className={styles.way__list}>
                <li className={`${styles.way__item} ${styles.way__item_active}`}>{arrowUp}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowRight}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowDown}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowLeft}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowUp}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowUp}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowRight}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowDown}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowLeft}</li>
                <li className={`${styles.way__item} ${null}`}>{arrowUp}</li>
            </ul>
        </div>
    )
}

export default WayController