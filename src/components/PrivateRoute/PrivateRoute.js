import react from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAutenticated } from '../../auth';

const PrivateRoute = props => isAutenticated()
    ? <Route {...props} /> :
    <Redirect to="/auth" />

export default PrivateRoute 