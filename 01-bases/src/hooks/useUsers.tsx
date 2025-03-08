import { useEffect, useRef, useState } from 'react'
import { User } from '../interfaces/usersResponse'
import { loadUsersAction } from '../components/actions/loadUsers.actions'

export default function useUsers() {
    const [users, setUsers] = useState<User[]>()
    const currentPageRef = useRef(1)

    useEffect(() => {
        loadUsersAction(1)
            .then((users) => {
                setUsers(users)
            }
            )
    }, [])

    const nextPage = async () => {
        currentPageRef.current++
        const users = await loadUsersAction(currentPageRef.current)
        if (users.length > 0) {
            setUsers(users)
        } else {
            currentPageRef.current--
        }
    }

    const previousPage = async () => {
        if (currentPageRef.current > 1) {
            currentPageRef.current--
            const users = await loadUsersAction(currentPageRef.current)
            setUsers(users)
        }
    }

    return {
        users,
        nextPage,
        previousPage
    }
}
