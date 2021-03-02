import { FC, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Banner } from '../../components/Banner';
import styles from './MainPage.module.css';
import MenuCategory from '../../components/MenuCategory/MenuCategory';
import OrderMenu from '../../components/OrderMenu/OrderMenu';
import { userService } from '../../services/UserService';

const MainPageView: FC = () => {

    useEffect(() => {
        userService.getUserData(1);
    }, [])

    return (
        <div className={styles.pageContainer}>
            <Header title='Today Menu 😋' />
            <Banner />
            <MenuCategory />
            <OrderMenu />
        </div>
    );
}

export default MainPageView;