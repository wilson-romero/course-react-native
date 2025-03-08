import { Table, TableBody, TableHead, TableHeader, TableRow } from './ui/table'
import { UserRow } from './UserRow'
import useUsers from '../hooks/useUsers'
import { Button } from './ui/button'

export default function Users() {
  const { users, previousPage, nextPage } = useUsers()

  return (
    <>
      <h3>Users:</h3>
      <Table bleed className="mx-4 w-full [--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
        <TableHead>
          <TableRow className="text-zinc-950 dark:text-white">
            <TableHeader>Avatar</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            (users ?? []).map((user) => (
              <UserRow key={user.id} user={user} />
            ))
          }

        </TableBody>
      </Table>
      <div className="flex justify-center gap-4 mt-4">
        <Button onClick={() => previousPage()} >Previus</Button>
        <Button onClick={() => nextPage()} >Next</Button>
      </div>
    </>
  )
}