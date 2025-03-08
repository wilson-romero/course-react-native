import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

enum AuthStatus {
    CHECKING,
    AUTHENTICATED,
    NOT_AUTHENTICATED
}

interface User {
    id: string;
    username: string;
    email: string;
}

interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: User;
    isChecking: boolean;
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
}

export const AuthContext = createContext({} as AuthState)

export const useAuthContext = () => useContext(AuthContext)


export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [status, setStatus] = useState(AuthStatus.CHECKING)
    const [user, setUser] = useState<User>()

    useEffect(() => {
        setTimeout(() => {
            setStatus(AuthStatus.NOT_AUTHENTICATED)
        }, 1500)
    }, [])

    const login = (email: string, password: string) => {
        if (email === 'test@a.com' && password === '123') {
            setUser({
                id: '123',
                username: 'test',
                email
            })
            setStatus(AuthStatus.AUTHENTICATED)
        } else {
            setStatus(AuthStatus.NOT_AUTHENTICATED)
        }
    }

    const logout = () => {
        setUser(undefined)
        setStatus(AuthStatus.NOT_AUTHENTICATED)
    }

    return <AuthContext.Provider
        value={{
            // State
            status,
            user,
            isChecking: status === AuthStatus.CHECKING,
            isAuthenticated: status === AuthStatus.AUTHENTICATED,
            // Methods
            login,
            logout
        }}>
        {children}
    </AuthContext.Provider >
}