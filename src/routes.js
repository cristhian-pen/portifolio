import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Home from './components/Home';
import Bloomodas from './components/Projects/ShowRoom/bloommodas';
import GameFinder from './components/Projects/ShowRoom/game_finders';
import Portifolio from './components/Projects/ShowRoom/portifolio';

export default function Routes() {

    const location = useLocation();

    return (
        <Switch location={location}>
            <Route path="/home" component={Home} />
            <Route path="/projects/bloomodas" component={Bloomodas} />
            <Route path="/projects/gamefinders" component={GameFinder} />
            <Route path="/projects/portifolio" component={Portifolio} />
        </Switch>
    );
}
