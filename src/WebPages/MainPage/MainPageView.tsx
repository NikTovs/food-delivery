import { FC, useEffect } from 'react';
import Header from './Header/Header';
import { Banner } from './Banner';
import styles from './MainPage.module.css';
import MenuCategory from './MenuCategory/MenuCategory';
import OrderMenu from './OrderMenu/OrderMenu';
import { userService } from '../../services/UserService';
// import {FirstComponent, SecondComponent} from './components';

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