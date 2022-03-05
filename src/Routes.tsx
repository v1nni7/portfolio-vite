import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Portfolio from './pages/Portfolio';

import Home from './pages/Home';
import { AuthProvider, RequireAuth } from './hooks/auth';
import Login from './pages/Login';


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
                    <Route path='/login' element={<Login />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;