import { useAuthContext } from "../context/AuthContext"

export default function Login() {
    const { isChecking, isAuthenticated, user, login, logout } = useAuthContext()
    return (
        <>
            {
                isChecking ? (
                    <h3>Verificated session</h3>
                ) : isAuthenticated ? (
                    <>
                        <h3>Welcome</h3>
                        <button
                            onClick={() => logout()}
                            className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                            Logout
                        </button>
                        <pre className="text-xs font-light p-2">
                            User: {
                                JSON.stringify(user, null, 2)
                            }</pre>
                    </>
                ) : (
                    <>
                        <h3>Not authenticated</h3>
                        <button
                            onClick={() => login('test@a.com', '123')}
                            className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                            Login
                        </button>
                    </>
                )
            }
        </>
    )
}
