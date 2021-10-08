import React, { useEffect } from 'react';
import { EmptyCountBlock } from 'components/layout/EmptyCountBlock/EmptyCountBlock';
import { CounterCard } from 'components/layout/CounterCard/CounterCard';
import { useHistory } from 'react-router';
import { observer } from 'mobx-react-lite';

import { CounterBlock } from '../../ui/ContainerBlock/ContainerBlock';
import EntityStore from '../../../store/EntityStore';
import { getEntities } from '../../../features/entity/api';
import { ErrorNotification } from '../../layout/ErrorNotification/ErrorNotification';
import { FooterWithButton } from '../../ui/FooterWithButton/FooterWithButton';
import { ERoutes } from '../../../router/config';

const Home = observer(() => {
  const entities = EntityStore.getEntities();
  const history = useHistory();

  useEffect(() => {
    const loadData = async () => {
      try {
        const entitiesData = await getEntities();

        if (entitiesData && entitiesData.length) {
          EntityStore.setEntities(entitiesData);
        }
      } catch (e) {
        ErrorNotification(e);
      }
    };

    loadData();
  }, []);

  return (
    <>
      {entities.length ? (
        <>
          {entities.map(entity => (
            <CounterCard entity={entity} key={entity.id} />
          ))}
          <FooterWithButton onClick={() => history.push(ERoutes.CREATE_ENTITY)} />
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
