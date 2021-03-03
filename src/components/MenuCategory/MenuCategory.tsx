import { FC } from 'react';
import styles from './MenuCategory.module.css';
import { ViewAllButton } from '../ViewAllButton/ViewAllButton'
import { CategoryComponent } from '../CategoryComponent/CategoryComponent';

import { menuIcons } from '../../assets/menuIconsIndex';

const MenuCategory: FC = () => {
    const categoryNames = ['pizza', 'burger', 'coffee', 'taco', 'snack', 'hotdog'];
    return (
        <div className={styles.menu}>
            <div className={styles.header}>
                <h3>Menu Category</h3>
                <ViewAllButton />
            </div>
            <div className={styles.sections}>
                {categoryNames.map(category => (
                    <CategoryComponent ImgPath={menuIcons.category} categoryName={category}/>
                    )
                }
            </div>
        </div>
    )
}

export default MenuCategory;
