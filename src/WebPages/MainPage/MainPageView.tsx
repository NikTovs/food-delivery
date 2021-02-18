import { FC } from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import styles from './MainPage.module.css';
import MenuCategory from './MenuCategory/MenuCategory';
import OrderMenu from './OrderMenu/OrderMenu';


const MainPageView: FC = () => {

    return (
        <div className={styles.pageContainer}>
            <Header title='Today Menu' />
            <Banner />
            <MenuCategory />
            <OrderMenu />
        </div>
    );
}

export default MainPageView;