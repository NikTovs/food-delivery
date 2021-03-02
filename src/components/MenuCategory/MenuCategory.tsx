import { FC } from 'react';
import styles from './MenuCategory.module.css';
import { ViewAllButton } from '../ViewAllButton/ViewAllButton'
import { CategoryComponent } from '../CategoryComponent/CategoryComponent';

import { menuIcons } from '../../assets/menuIconsIndex';

const MenuCategory: FC = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.header}>
                <h3>Menu Category</h3>
                <ViewAllButton />
            </div>
            <div className={styles.sections}>
                <CategoryComponent ImgPath={menuIcons.pizza} categoryName='pizza'/>
                <CategoryComponent ImgPath={menuIcons.burger} categoryName='burger'/>
                <CategoryComponent ImgPath={menuIcons.coffee} categoryName='coffee'/>
                <CategoryComponent ImgPath={menuIcons.taco} categoryName='taco'/>
                <CategoryComponent ImgPath={menuIcons.snack} categoryName='snack'/>
                <CategoryComponent ImgPath={menuIcons.hotdog} categoryName='hotdog'/>
            </div>
        </div>
    )
}

export default MenuCategory;