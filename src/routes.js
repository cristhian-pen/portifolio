import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Home from './components/Home';
import Bloomodas from './components/Projects/ShowRoom/bloommodas';
import GameFinder from './components/Projects/ShowRoom/game_finders';
import Portifolio from './components/Projects/ShowRoom/portifolio';
import Auth from './components/Admin/Auth';
import Admin from './components/Admin';
import ForgetPass from './components/Admin/Auth/Register';

export default function Routes() {

    const location = useLocation();

    return (
        <Switch location={location}>
            <Route path="/home" component={Home} />
            <Route path="/bloomodas" component={Bloomodas} />
            <Route path="/gamefinders" component={GameFinder} />
            <Route path="/portifolio" component={Portifolio} />
            <Route path="/admin" component={Admin} />
            <Route path="/auth" component={Auth} />
            <Route path="/forgotpassword" component={ForgetPass} />
        </Switch>
    );
}
