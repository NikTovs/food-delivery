import React, { FC } from 'react';  
import styles from './ContentWrapper.module.css';
import MainPageView from '../../WebPages/MainPage/MainPageView';

const ContentWrapper: FC = () => {
    
    return (
        <div className={styles.container}>
            <MainPageView />
        </div>
    )
}

export default ContentWrapper;