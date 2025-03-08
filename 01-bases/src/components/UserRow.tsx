import { User } from '../interfaces/usersResponse'
import { Avatar } from './ui/avatar'
import { TableCell, TableRow } from './ui/table'

interface Props {
    user: User
}

export function UserRow({ user }: Props) {
    return (
        <TableRow>
            <TableCell>
                <Avatar src={user.avatar} className="size-12" />
            </TableCell>
            <TableCell>
                {user.first_name} {user.last_name}
            </TableCell>
            <TableCell>
                {user.email}
            </TableCell>
        </TableRow>
    )
}
