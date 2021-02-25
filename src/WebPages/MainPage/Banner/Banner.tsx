import { FC } from 'react';
import styles from './Banner.module.css'
import deliverImg from '../../../assets/img/deliver.png';

type Props = {
    name: string | null,
}

export const Banner: FC<Props> = ({ name }) => {

    return (

        <div className={styles.banner}>
            <div className={styles.textBox}>
                <p className={styles.title}>Hello {name ?? ''},</p>
                <p className={styles.subTitle}>Get free delivery every 20$ purchase!</p>
            </div>
            <button className={styles.button}>Learn More</button>
            <img className={styles.deliver} src={deliverImg} alt='no delivery' />
        </div>
    )
}
