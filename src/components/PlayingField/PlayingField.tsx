import { FC } from "react";
import styles from "./PlayingField.module.scss";

interface PlayingFieldProps {
    className?: string;
}

const PlayingField: FC<PlayingFieldProps> = ({ className }) => { 
    const uniqid = require('uniqid');

    const start = styles.field__item_start;
    const finish = styles.field__item_finish;
    const wrong = styles.field__item_wrong;

    const createField = (rows: number, columns: number) => {

        return (
            <ul
                className={styles.field__list}
                style={{
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                    gridTemplateRows: `repeat(${rows}, 1fr)`
                }} >
                <li className={styles.field__item}></li>
                <li className={styles.field__item}></li>
                <li className={styles.field__item}></li>
                <li className={styles.field__item}></li>
                <li className={styles.field__item}></li>
                <li className={styles.field__item}></li>
                <li className={styles.field__item}></li>
                <li className={styles.field__item}></li>
                <li className={styles.field__item}></li>
            </ul>
        )
    }

    return (
        <div className={`${styles.field} ${className}`}>
            { createField(3, 3) }
        </div>
    )
}

export default PlayingField