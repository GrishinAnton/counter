import React, { useEffect, useState } from 'react';
import { EmptyCountBlock } from 'components/layout/EmptyCountBlock/EmptyCountBlock';
import { CounterCard } from 'components/layout/CounterCard/CounterCard';
import { observer } from 'mobx-react-lite';

import { Loading } from 'components/ui/Loading/Loading';
import { CounterBlock } from '../../ui/ContainerBlock/ContainerBlock';
import EntityStore from '../../../store/EntityStore';
import { getEntities } from '../../../features/entity/api';
import { ErrorNotification } from '../../layout/ErrorNotification/ErrorNotification';
import { FooterWithPrimaryButton } from '../../ui/FooterWithPrimaryButton/FooterWithButtons';
import { ERoutes } from '../../../router/config';
import { useNavigate } from 'react-router-dom';

const Home = observer(() => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const entities = EntityStore.getEntities();

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const entitiesData = await getEntities();

        if (entitiesData && entitiesData.length) {
          EntityStore.setEntities(entitiesData);
        }
      } catch (e) {
        ErrorNotification(e);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <Loading open />;
  }

  return (
    <>
      {entities.length ? (
        <>
          {entities.map(entity => (
            <CounterCard entity={entity} key={entity.id} />
          ))}
          <FooterWithPrimaryButton onClick={() => navigate(ERoutes.CREATE_ENTITY)} />
        </>
      ) : (
        <CounterBlock contentPosition='center'>
          <EmptyCountBlock />
        </CounterBlock>
      )}
    </>
  );
});

export default Home;
