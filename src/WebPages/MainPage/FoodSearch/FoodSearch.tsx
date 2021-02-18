import { FC } from 'react';
import styles from './FoodSearch.module.css';

const FoodSearch: FC = () => {

    return (
        <div className={styles.container}>
            <input placeholder={'Search By Food Name'} />
        </div>
    )
}

export default FoodSearch;