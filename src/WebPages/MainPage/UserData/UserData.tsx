import { FC } from 'react'
import styles from './UserData.module.css';
import anonPicture from '../../../assets/img/anonProfilePic.jpg';
import DropDown from '../DropDown/DropDown';

type Props = {
    name: string
    profilePicture?: string;
}

const UserData: FC<Props> = ({ name, profilePicture }) => {

    return (
        <div className={styles.container}>
            <img src={profilePicture ?? anonPicture} alt='no Img' className={styles.profilePic} />
            <div className={styles.userContainer}>
                <p className={styles.name}>{name ?? ''}</p>
                <p className={styles.userStatus}>User</p>
            </div>
            <DropDown />
        </div>
    )
}

export default UserData;