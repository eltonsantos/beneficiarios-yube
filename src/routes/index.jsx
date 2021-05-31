import { Switch } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import App from './app.routes';
import Auth from './auth.routes';

const Routes = () => {

  const { logged } = useAuth();

  return (
    <Switch>
      { logged ? <Auth /> : <App />}
    </Switch>
  )
}

export default Routes;