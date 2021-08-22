import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CreateEntity from 'components/pages/Entity/CreateEntity/CreateEntity';
import { ContainerApp } from 'components/ui/ContainerApp/ContainerApp';
import { ToastContainer } from 'react-toastify';
import { ERoutes } from 'router/config';

import 'react-toastify/dist/ReactToastify.min.css';
import { observer } from 'mobx-react-lite';

import Login from 'components/pages/Login/Login';
import { useHistory } from 'react-router';
import UserStore from './store/UserStore';
import Home from './components/pages/Home/Home';

export const App = observer(() => {
  const { user } = UserStore;
  const history = useHistory();
  console.log(user, 'user');

  if (!user) {
    history.push(ERoutes.SIGN_IN);
  }

  return (
    <>
      <ContainerApp>
        <Router>
          <Switch>
            <Route path={ERoutes.HOME} exact>
              <Home />
            </Route>
            <Route path={ERoutes.SIGN_IN}>
              <Login />
            </Route>
            <Route path={ERoutes.CREATE_ENTITY}>
              <CreateEntity />
            </Route>
          </Switch>
        </Router>
      </ContainerApp>
      <ToastContainer />
    </>
  );
});
