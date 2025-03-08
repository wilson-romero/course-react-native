import axios from 'axios'
import { UsersResponse } from '../../interfaces/usersResponse'

export const loadUsersAction = async (page: number) => {
    try {
        const { data } = await axios.get<UsersResponse>('https://reqres.in/api/users',
            {
                params: {
                    page
                }
            }
        )
        return data.data
    } catch (error) {
        console.error('Error loading users', error)
        return []
    }
}