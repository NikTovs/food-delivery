import { FC } from 'react';
import styles from '../DropDown/DropDown.module.css';
import arrow from '../../../assets/img/arrow.svg';

const DropDown: FC = () => {

    return (
        <div className={styles.dropdown}>
            <button className={styles.dropBtn}>
                <img src={arrow} alt='no arrow' />
            </button>
            <div className={styles.dropdownContent}>
                <a href="/">Link 1</a>
                <a href="/">Link 2</a>
                <a href="/">Link 3</a>
            </div>
        </div>
    )
}

export default DropDown;