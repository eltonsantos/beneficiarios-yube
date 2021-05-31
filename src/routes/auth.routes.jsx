import { Switch, Route } from 'react-router-dom';

import Admin from '../pages/Admin';
import Details from '../pages/Details';

const AuthRoutes = () => (
  <Switch>
    <Route path="/admin" component={Admin} />
    <Route path="/details" component={Details} />
  </Switch>
)

export default AuthRoutes;