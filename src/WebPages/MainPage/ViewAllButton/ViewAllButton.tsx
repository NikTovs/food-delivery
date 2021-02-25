import { FC } from 'react';
import styles from './ViewAllButton.module.css';
import arrowPath from '../../../assets/img/arrow.svg';

export const ViewAllButton: FC = () => {

    return (
        <div className={styles.container}>
            <p className={styles.title}>View All</p>
            <button className={styles.button}>
                <img src={arrowPath} alt='arrow lost' className={styles.arrow}/>
            </button>
        </div>
    )
};