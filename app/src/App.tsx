import { Routes, Route, useNavigate } from 'react-router-dom';
import CreateEntity from 'components/pages/Entity/CreateEntity/CreateEntity';
import { ContainerApp } from 'components/ui/ContainerApp/ContainerApp';
import { ToastContainer } from 'react-toastify';

import { ERoutes } from 'router/config';
import 'react-toastify/dist/ReactToastify.min.css';
import ViewEntity from 'components/pages/Entity/ViewEntity/ViewEntity';

import { observer } from 'mobx-react-lite';
import { Auth } from 'components/pages/Auth/Auth';
import UserStore from './store/UserStore';
import Home from './components/pages/Home/Home';
import { intercept } from './common/axios/interceptor';
import { useEffect } from 'react';

export const App = observer(() => {
  const { user } = UserStore;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate(ERoutes.LOGIN);
  }, [user, navigate]);

  intercept();

  return (
    <>
      <ContainerApp>
        <Routes>
          <Route path={ERoutes.HOME} element={<Home />} />
          <Route path={ERoutes.LOGIN} element={<Auth />} />
          <Route path={ERoutes.CREATE_ENTITY} element={<CreateEntity />} />
          <Route path={ERoutes.VIEW_ENTITY_ID} element={<ViewEntity />} />
        </Routes>
      </ContainerApp>
      <ToastContainer />
    </>
  );
});
