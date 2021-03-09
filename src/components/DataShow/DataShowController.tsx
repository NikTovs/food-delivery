import { FC } from 'react'
import { DataShowView } from './DataShowView';


const fakeData = { //delete after backend will ready
    username: 'Luke',
    phone: '+3805553535',
    address: 'Tatooine'
}

export const DataShowController: FC = () => {

    return (
        <> 
        <DataShowView 
        username={fakeData.username} 
        phone={fakeData.phone}
        address={fakeData.address} />
        </>
    )
}