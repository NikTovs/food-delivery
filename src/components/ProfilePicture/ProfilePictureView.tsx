import { FC } from 'react'
import styles from './ProfilePicture.module.css';
import anonPic from '../../../src/assets/img/anonProfilePic.jpg';

type Props = {
    picture?: string,
}

export const ProfilePictureView: FC<Props> = ({ picture }) => {

    return (
        <div className={styles.container}>
            <div className={styles.userContainer}>
                <img src={picture ?? anonPic} alt="oops" className={styles.picture} />
                <button className={styles.button}>Generate new Picture</button>
            </div>
        </div>
    )
}