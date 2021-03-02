import { FC } from 'react';
import FoodSearch from '../FoodSearch/FoodSearch';
import UserData from '../UserData/UserData';
import style from '../Header/Header.module.css';

type Props = {
    title: string;
}

const Header: FC<Props> = ({ title }) => {

    return (
        <header className={style.header}>
            <h3 className={style.title}>{title}</h3>
            <FoodSearch />
            <UserData
                name='Luke'
                profilePicture='https://i.quotev.com/img/q/u/16/1/18/7de1ab8b5c-imag.jpg'
            />
        </header>
    )
};

export default Header;