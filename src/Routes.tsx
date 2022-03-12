import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Portfolio from './pages/Portfolio';

import Home from './pages/Home';
import { AuthProvider, RequireAuth } from './hooks/auth';
import Login from './pages/Login';
import Register from './pages/Register';


const AppRoutes = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route index element={<Home />} />
                    <Route
                        path='/portfolio'
                        element={
                            <RequireAuth>
                                <Portfolio />
                            </RequireAuth>
                        } />
                    <Route path='login' element={<Login />} />
                    <Route path='cadastro' element={<Register />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;