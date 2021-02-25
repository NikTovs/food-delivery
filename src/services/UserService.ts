import axios from 'axios';

type UserType = {
    id: number,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

class UserService {
    async getUserData(id: number): Promise<string | null> {
        try {
            const { data } = await axios.get<UserType>(`https://jsonplaceholder.typicode.com/users/${id}`);
            console.log("Data user", data);
            return data.username;
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }
}

export const userService = new UserService();