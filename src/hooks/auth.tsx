import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getCookie } from "./cookies";

export const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    }
}

interface AuthContextType {
    user: any;
    signin: (user: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    let [user, setUser] = React.useState<any>(null);

    let signin = (newUser: string, callback: VoidFunction) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    };

    let signout = (callback: VoidFunction) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    return React.useContext(AuthContext);
}

export function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = getCookie('loggedin');
    console.log(auth)

    let location = useLocation();


    if (auth == '') {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;
}

/* export function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || '/';

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get('username') as string;

        auth.signin(username, () => {
            navigate(from, { replace: true });
        });
    }

    return (
        <div>
            <p>Você deve estar logado para ver essa página {from}</p>

            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text" />
                </label>{' '}
                <button type="submit">Login</button>
            </form>
        </div>
    )
} */

