import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin';
import Home from './components/Home';
import Auth from './components/Admin/Auth';
import ForgetPass from './components/Admin/Auth/Register';
import alteraSenha from './components/Admin/Auth/alterasenha';
import Repositorio from './components/Projects/ShowRoom';
import Showroom from './components/Projects/ShowRoom/showroom';
import Worked from './components/404/Worked/index';
import Email from './components/email/index';
import NotFound from './components/404/index';


export default function Routes() {

    const location = useLocation();

    return (
        <Switch location={location}>
            <Route exact path="/" component={Worked} />
            <Route exact path="/home" component={Home} />
            <PrivateRoute exact path="/admin" component={Admin} />
            <Route path="/auth" component={Auth} />
            <Route exact path="/esqsenha" component={ForgetPass} />
            <Route exact path="/alterarSenha" component={alteraSenha} />
            <Route exact path="/home/projetos/repositorio" component={Repositorio} />
            <Route exact path="/home/repositorio/showroom/:nomeProjeto" component={Showroom} />
            <Route exact path="/home/email" component={Email} />
            <Route path="*" component={NotFound} />
        </Switch >
    );
}
