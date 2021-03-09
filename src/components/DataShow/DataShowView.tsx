import { FC } from 'react' 
import styles from './DataShow.module.css';

type Props = {
    username: string,
    phone: string,
    address: string
}

export const DataShowView: FC<Props> = ({username, phone, address}) => {

    return (
        <div className={styles.container}>
            <p className={styles.row}>
                <span className={styles.title}>Username: </span>
                {username}
            </p>
            <p className={styles.row}>
                <span className={styles.title}>Phone: </span>
                {phone}
            </p>
            <p className={styles.row}>
                <span className={styles.title}>Address: </span>
                {address}
            </p>
        </div>
    )
}