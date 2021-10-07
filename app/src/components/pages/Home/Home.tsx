import React, { useEffect, useState } from 'react';
import { EmptyCountBlock } from 'components/layout/EmptyCountBlock/EmptyCountBlock';
import { CounterCard } from 'components/layout/CounterCard/CounterCard';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import { CounterBlock } from '../../ui/ContainerBlock/ContainerBlock';
import EntityStore from '../../../store/EntityStore';
import { getEntities } from '../../../features/entity/api';
import { Notification, ResponseNotification } from '../../layout/Notification/Notification';

const Home = observer(() => {
  const entities = EntityStore.getEntities();

  useEffect(() => {
    const loadData = async () => {
      try {
        const entitiesData = await getEntities();

        if (entitiesData && entitiesData.length) {
          EntityStore.setEntities(entitiesData);
        }
      } catch (e) {
        ResponseNotification(e);
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
