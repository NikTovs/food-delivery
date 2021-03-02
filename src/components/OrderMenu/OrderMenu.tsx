import { FC } from 'react';
import { ViewAllButton } from '../ViewAllButton/ViewAllButton';
import styles from './OrderMenu.module.css';

const OrderMenu: FC = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.header}>
                <h2 className={styles.title}>Order Menu</h2>
                <ViewAllButton />
            </div>
            <button className={styles.button} >Checkout</button>
        </div>
    )
}

export default OrderMenu;