// Importando o React de react.
import React from 'react';
// Importando o BrowserRouter como BRouter, Switch e Route de react-router-dom.
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

// Importando o Home de pages/Home.js. e Repos de pages/Repos.js.
import Home from './pages/home';
import Repos from './pages/repos';

// Renderizando o BRouter.
const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/repos" component={ Repos } />
        </Switch>
    </BRouter>
);

// Exportando o Routes.
export default Routes;