import { FC, useEffect, useState } from 'react';
import { Banner } from './Banner';
import { userService } from '../../../services/UserService';

export const BannerContainer: FC = () => {

    const [name, setName] = useState<string | null>('');

    useEffect(() => {
        userService.getUserData(1).then(res => setName(res));
    }, [])

    return (
        <Banner name={name} />
    )
} 