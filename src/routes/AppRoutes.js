import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
}
    from 'react-router-dom';
import { Detail } from '../containers/Detail';
import { Home } from '../containers/Home';

export const AppRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/detail/:uid/" element={<Detail />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </>
    )
}
