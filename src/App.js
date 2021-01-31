import React from 'react';
import Index from './pages/Index';
import { Header } from './components/Header';
import Sessions from './pages/Sessions';
import Preferences from './pages/Preferences';

import { HashRouter as Router, Route } from "react-router-dom";

export const App = () => {
    return (
        <div className="container">
            <Router>
                <Route exact path="/" render={() => <Index page="home" />} />
                <Route exact path="/sessions" render={() => <Sessions page="sessions" />} />
                <Route exact path="/preferences" render={() => <Preferences page="preferences" />} />
                <Route exact path="/preferences/update" render={() => <Preferences page="preferences" />} />
            </Router>
        </div>
    )
};