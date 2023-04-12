import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Home from './components/Home';
import Bloomodas from './components/Projects/ShowRoom/bloommodas';
import GameFinder from './components/Projects/ShowRoom/game_finders';
import Portifolio from './components/Projects/ShowRoom/portifolio';
import Auth from './components/Admin/Auth';
import Admin from './components/Admin';
import ForgetPass from './components/Admin/Auth/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function Routes() {

    const location = useLocation();

    return (
        <Switch location={location}>
            <Route exact path="/home" component={Home} />
            <Route exact path="/bloomodas" component={Bloomodas} />
            <Route exact path="/gamefinders" component={GameFinder} />
            <Route exact path="/portifolio" component={Portifolio} />
            <PrivateRoute path="/admin" component={Admin} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/forgotpassword" component={ForgetPass} />
        </Switch>
    );
}
