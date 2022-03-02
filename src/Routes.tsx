import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Portfolio from './pages/Portfolio';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Portfolio />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;