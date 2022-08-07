import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import styles from "./PlayingField.module.scss";

interface PlayingFieldProps {
    className?: string;
}

const PlayingField: FC<PlayingFieldProps> = ({ className }) => { 
    const { rows, columns } = useAppSelector(state => state.app)

    const uniqid = require('uniqid');

    const start = styles.field__item_start;
    const finish = styles.field__item_finish;
    const wrong = styles.field__item_wrong;

    const acceptableWays = (colms: number) => {
        return [-colms, -1, 1, colms]
    }

    const randomWay = (ways: number[]) => {
        return ways[Math.floor(Math.random()*ways.length)];
    }

    const createElement = () => {
        const id = uniqid();

        return (
            <li key={id} className={styles.item}>
                <input
                    id={id}
                    className={styles.item__input}
                    type="radio" />
                <label
                    className={styles.item__label}
                    htmlFor={id} />
            </li>
        )
    }

    const createElements = (total: number) => {
        const allElements = [];

        for (let i = 0; i < total; i++) allElements.push(createElement());

        return allElements;
    }

    const createField = (rows: number, columns: number) => {
        const total = rows * columns;

        return (
            <ul
                className={styles.field__list}
                style={{
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                    gridTemplateRows: `repeat(${rows}, 1fr)`
                }} >

                { createElements(total).map(element => element) }
            </ul>
        )
    }

    return (
        <div className={`${styles.field} ${className}`}>
            { createField(rows, columns) }
        </div>
    )
}

export default PlayingField