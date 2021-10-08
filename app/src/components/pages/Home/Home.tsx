import React, { useEffect } from 'react';
import { EmptyCountBlock } from 'components/layout/EmptyCountBlock/EmptyCountBlock';
import { CounterCard } from 'components/layout/CounterCard/CounterCard';
import { observer } from 'mobx-react-lite';
import { CounterBlock } from '../../ui/ContainerBlock/ContainerBlock';
import EntityStore from '../../../store/EntityStore';
import { getEntities } from '../../../features/entity/api';
import { ErrorNotification } from '../../layout/ErrorNotification/ErrorNotification';

const Home = observer(() => {
  const entities = EntityStore.getEntities();
  console.log(entities, 'entities');

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
        entities.map(entity => <CounterCard entity={entity} key={entity.id} />)
      ) : (
        <CounterBlock contentPosition='center'>
          <EmptyCountBlock />
        </CounterBlock>
      )}
    </>
  );
});

export default Home;
