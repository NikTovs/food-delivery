import { FC } from 'react';
import styles from './MenuCategory.module.css';
import { ViewAllButton } from '../ViewAllButton/ViewAllButton'

const MenuCategory: FC = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.header}>
                <h3>Menu Category</h3>
                <ViewAllButton />
            </div>
        </div>
    )
}

export default MenuCategory;