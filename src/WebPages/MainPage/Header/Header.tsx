import { FC } from 'react';
import FoodSearch from '../FoodSearch/FoodSearch';
import style from '../Header/Header.module.css';

type Props = {
    title: string;
}

const Header: FC<Props> = ({ title }) => {

    return (
        <header className={style.header}>
            <h3 className={style.title}>{title}</h3>
            <FoodSearch />
        </header>
    )
};

export default Header;