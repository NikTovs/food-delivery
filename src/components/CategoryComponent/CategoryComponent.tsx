import { FC } from 'react';
import styles from './CategoryComponent.module.css';
import arrow from '../../assets/img/arrow.svg';

type Props = {
    categoryName: string
    ImgPath: string
}

export const CategoryComponent: FC<Props> = ({ ImgPath, categoryName }) => {

    return (
        <div className={styles.container}>
            <img className={styles.img} src={ImgPath} alt='no img' />
            <p className={styles.name}>{categoryName}</p>
            <div className={styles.circleBG}>
                <img src={arrow} alt='arrow Missing' className={styles.arrow} />
            </div>
        </div>
    );
}
