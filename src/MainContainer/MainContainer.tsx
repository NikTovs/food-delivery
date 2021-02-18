import React, { FC } from 'react';
import styles from './MainContainer.module.css';
import MainPageView from '../WebPages/MainPage/MainPageView';

const MainContainer: FC = () => {
    
    return (
        <div className={styles.container}>
            <MainPageView />
        </div>
    )
}

export default MainContainer;