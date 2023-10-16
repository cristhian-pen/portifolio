import { Route, Redirect } from 'react-router-dom';

//Função autenticadora
import { isAutenticated } from '../../auth';

//Rota que retorna as propriedades do componente caso a função retorne true
const PrivateRoute = props => isAutenticated()
    ? <Route {...props} /> :
    <Redirect to="/auth" />

export default PrivateRoute 