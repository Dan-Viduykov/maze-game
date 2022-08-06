import { FC } from "react";
import Container from "../Container";
import styles from "./Header.module.scss";

interface HeaderProps {
    className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
    return (
        <header className={`${styles.header} ${className}`}>
            <Container className={styles.header__container}>
                <h1 className={styles.header__title}>Maze</h1>
            </Container>
        </header>
    )
}

export default Header