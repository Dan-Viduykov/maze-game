import { FC } from "react";
import styles from "./PlayingField.module.scss";

interface PlayingFieldProps {
    className?: string;
}

const PlayingField: FC<PlayingFieldProps> = ({ className }) => { 

    const start = styles.field__item_start;
    const finish = styles.field__item_finish;
    const wrong = styles.field__item_wrong;

    return (
        <div className={`${styles.field} ${className}`}>
            <ul className={styles.field__list}>
                <li className={`${styles.field__item} ${start}`} />
                <li className={`${styles.field__item} ${finish}`} />
                <li className={`${styles.field__item} ${wrong}`} />
                <li className={`${styles.field__item} ${null}`} />
                <li className={`${styles.field__item} ${null}`} />
                <li className={`${styles.field__item} ${null}`} />
                <li className={`${styles.field__item} ${null}`} />
                <li className={`${styles.field__item} ${null}`} />
                <li className={`${styles.field__item} ${null}`} />
            </ul>
        </div>
    )
}

export default PlayingField