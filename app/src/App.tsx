import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateEntity from 'components/pages/Entity/CreateEntity/CreateEntity';
import { ContainerApp } from 'components/ui/ContainerApp/ContainerApp';
import { ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router';

import { ERoutes } from 'router/config';
import 'react-toastify/dist/ReactToastify.min.css';
import ViewEntity from 'components/pages/Entity/ViewEntity/ViewEntity';

import { observer } from 'mobx-react-lite';
import { Auth } from 'components/pages/Auth/Auth';
import UserStore from './store/UserStore';
import Home from './components/pages/Home/Home';
import { intercept } from './common/axios/interceptor';

export const App = observer(() => {
  const { user } = UserStore;
  const history = useHistory();
  if (!user) {
    history.push(ERoutes.LOGIN);
  }

  intercept();

  return (
    <>
      <ContainerApp>
        <Router>
          <Switch>
            <Route path={ERoutes.HOME} exact>
              <Home />
            </Route>
            <Route path={ERoutes.LOGIN}>
              <Auth />
            </Route>
            <Route path={ERoutes.CREATE_ENTITY}>
              <CreateEntity />
            </Route>
            <Route path={`/:id${ERoutes.VIEW_ENTITY}`}>
              <ViewEntity />
            </Route>
          </Switch>
        </Router>
      </ContainerApp>
      <ToastContainer />
    </>
  );
});
