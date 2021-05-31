import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={Register} />
    <Route path="/login" component={Login} />
  </Switch>
)

export default AppRoutes;