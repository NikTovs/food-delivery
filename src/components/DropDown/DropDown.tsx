import { FC } from 'react';
import styles from '../DropDown/DropDown.module.css';
import arrow from '../../assets/img/arrow.svg';

import { Link } from "react-router-dom";

const DropDown: FC = () => {

    return (
        <div className={styles.dropdown}>
            <button className={styles.dropBtn}>
                <img src={arrow} alt='no arrow' />
            </button>
            <div className={styles.dropdownContent}>
                <Link to='/myProfile'><p>My Profile</p></Link>
                <Link to='/logOut'><p>Log Out</p></Link>
            </div>
        </div>
    )
}

export default DropDown;