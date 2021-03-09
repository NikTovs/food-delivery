import { FC } from 'react';
import { Link } from "react-router-dom";
import { ProfilePicController } from '../../components/ProfilePicture/ProfilePictureController';
import { DataShowController } from '../../components/DataShow/DataShowController';
import styles from './ProfilePage.module.css';

export const ProfilePage: FC = () => {

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link className={styles.back} to='./'>&#8592; Back</Link>
            </header>
            <ProfilePicController />
            <DataShowController />
        </div>  
    )
}